"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  interface User {
    _id: string;
    email: string;
    role: string;
    onDelete: () => void;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/users');
        const { success, users } = response.data;
        if (success) {
          const updatedUsers = users.map((user: User) => ({
            ...user,
            onDelete: () => handleDelete(users.findIndex((u: User) => u._id === user._id)),
          }));
          setUsers(updatedUsers);
        } else {
          console.log('Error: Unable to fetch users');
        }
      } catch (error) {
        console.log('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (position: number) => {
    try {
      // Remove the deleted user from the list
      setUsers(prevUsers => {
        const updatedUsers = [...prevUsers];
        updatedUsers.splice(position, 1);
        return updatedUsers;
      });

      // Send a request to delete the user from the server
      const response = await axios.delete(`/api/users?position=${position}`);
      const { success, message } = response.data;
      if (success) {
        console.log(message);
      } else {
        console.log('Error:', message);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-4">User List</h1>
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <ul className="space-y-4 text-black">
          {users.map((user: User) => (
            <li key={user._id} className="bg-white p-4 rounded-md shadow-md">
              <div>
                <span className="font-bold">Email:</span> {user.email}
              </div>
              <div>
                <span className="font-bold">Role:</span> {user.role}
              </div>
              <button
                onClick={user.onDelete}
                className="mt-2 py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
