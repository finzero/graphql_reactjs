import { gql, useQuery } from '@apollo/client';
import React, { useEffect } from 'react';

const GET_USERS = gql`
  query {
    getAllUsers {
      id
      first_name
      last_name
      email
      gender
      ip_address
    }
  }
`;

export const Users = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) return <div className="loading">Loading ....</div>;
  if (error) return <div className="error">Error ....</div>;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>ip_address</th>
          </tr>
        </thead>
        <tbody>
          {data.getAllUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{[user.first_name, user.last_name].join(' ')}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.ip_address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
