import { useState, useEffect } from 'react';
import User from '../User/User';

function UsersList() {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://gorest.co.in/public/v1/users')
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setUsers(data.data);
      })
      .catch(err => {
        console.error('there was some error:', err);
      });
  }, []);

  if (users.length === 0) {
    return null;
  } else {
    return users.map(user => {
      return <User userInfo={user} key={user.id} />;
    });
  }
}
export default UsersList;
