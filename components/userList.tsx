'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  interface User {
    _id: string;
    email: string;
    role: string;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/users');
        const { success, users } = response.data;
        if (success) {
          setUsers(users);
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

  return (
    <div>
      <h1>User List</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              Email: {user.email}, Role: {user.role}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
