'use client';

import React, { useEffect, useState } from 'react';
import { UserResponseDTO } from '@/application/users/dtos/UserDTO';

export default function UserList() {
  const [users, setUsers] = useState<UserResponseDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div className="p-4">Loading users...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <ul className="space-y-2">
        {users.length === 0 ? (
          <li className="p-2 bg-gray-100 rounded">No users found</li>
        ) : (
          users.map((user) => (
            <li key={user.id} className="p-3 border rounded shadow-sm">
              <p className="font-bold">{user.name}</p>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-xs text-gray-500">
                Created: {new Date(user.createdAt).toLocaleDateString()}
              </p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
