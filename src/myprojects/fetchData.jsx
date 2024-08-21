import React, { useEffect, useState } from 'react';
import axios from 'axios';
 
const UserData = () => {
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://api.example.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
 
    fetchUsers();
  }, []);
 
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};
 
export default UserData;