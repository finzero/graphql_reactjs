import React from 'react';
import { useParams } from 'react-router';
import { useUser } from '../hooks/User';

export const UserDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useUser(Number(id));
  let user;

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error Happen {error}</div>;
  if (!loading && data) {
    user = data.getUserById;
  }

  return (
    <div>
      <ul>
        <li>Name: {[user.first_name, user.last_name].join(' ')}</li>
        <li>Email: {user.email}</li>
        <li>Gender: {user.gender}</li>
        <li>ip address: {user.ip_address}</li>
      </ul>
    </div>
  );
};
