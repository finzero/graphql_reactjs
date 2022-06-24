import React from 'react';
import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export const ExchangeRates = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>currency</th>
          <th>rate</th>
        </tr>
      </thead>
      <tbody>
        {data.rates.map(({ currency, rate }) => (
          <tr key={currency}>
            <td>{currency}</td>
            <td>{rate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
