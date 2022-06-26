import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { GET_USERS } from '../gql/Users';
import { useLazyQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

export const UserList = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [getUsers, { loading, error, data }] = useLazyQuery(GET_USERS, {
    variables: {
      page,
      limit,
    },
  });

  useEffect(() => {
    getUsers();
  }, [page, getUsers]);

  if (loading) return <div className="loading">Loading ....</div>;
  if (error) return <div className="error">Error ....</div>;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            {/* <th>Gender</th> */}
            {/* <th>Email</th> */}
            {/* <th>ip_address</th> */}
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.getAllUsers.data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{[user.first_name, user.last_name].join(' ')}</td>
                {/* <td>{user.gender}</td> */}
                {/* <td>{user.email}</td> */}
                {/* <td>{user.ip_address}</td> */}
                <td>
                  <Link to={`${user.id}`}>Detail</Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <ReactPaginate
        containerClassName="pagination"
        activeClassName="active"
        pageRangeDisplayed={5}
        initialPage={page - 1}
        onPageChange={({ selected }) => setPage(selected + 1)}
        pageCount={data ? data.getAllUsers.meta.pageCount : 1}
      />
    </div>
  );
};
