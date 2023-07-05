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
    <div>
      <h1>User List</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user: User) => (
            <li key={user._id}>
              Email: {user.email}, Role: {user.role}
              <button onClick={user.onDelete}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
