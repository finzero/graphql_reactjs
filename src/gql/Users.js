import { gql } from '@apollo/client';

//get users
export const GET_USERS = gql`
  query GetUsers($limit: Int, $page: Int) {
    getAllUsers(limit: $limit, page: $page) {
      data {
        id
        first_name
        last_name
        email
        gender
        ip_address
      }
      meta {
        pageCount
        totalRecord
      }
    }
  }
`;

export const GET_USER_DETAIL = gql`
  query getUserByID($id: Int!) {
    getUserById(id: $id) {
      first_name
      last_name
      email
      gender
      ip_address
    }
  }
`;
