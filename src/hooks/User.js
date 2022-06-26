import { GET_USER_DETAIL } from '../gql/Users';
import { useQuery } from '@apollo/client';

export const useUser = (id) => {
  const { loading, error, data } = useQuery(GET_USER_DETAIL, {
    variables: {
      id,
    },
  });

  return { loading, error, data };
};
