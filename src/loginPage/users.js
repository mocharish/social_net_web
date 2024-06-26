import { useState, useEffect } from 'react';
import jake from '../images/jake.jpg';

export function useUserInitialization() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Initialize users array with two users
    setUsers([
      {
        name: 'Jake Peralta',
         photo: jake,
        email: 'yosi@gmail.com',
        password: '1234',
        dob: '2010-01-01',
        gender: 'male'
      },
      {
        email: 'yorm@gmail.com',
        password: 'qwer',
        dob: '2008-03-02',
        gender: 'female',
        photo: null
      }
    ]);
  }, []);

  return { users, setUsers };
}
