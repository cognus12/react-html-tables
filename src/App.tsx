import './App.css';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const data = [
  {
    name: 'employee 1',
    clients: [
      {
        name: 'client 1',
        inn: '1111',
        ogrn: '2222',
        accounts: [
          {
            accountNumber: 'x2222',
            debt: 4000,
            service: 'service 1',
          },
          {
            accountNumber: 'x2223',
            debt: 4000,
            service: 'service 2',
          },
          {
            accountNumber: 'x2224',
            debt: 4000,
            service: 'service 3',
          },
        ],
      },
      {
        name: 'client 2',
        inn: '1112',
        ogrn: '2223',
        accounts: [
          {
            accountNumber: 'x2222',
            debt: 4000,
            service: 'service 1',
          },
          {
            accountNumber: 'x2223',
            debt: 4000,
            service: 'service 2',
          },
          {
            accountNumber: 'x2224',
            debt: 4000,
            service: 'service 3',
          },
        ],
      },
    ],
  },
];

const TableOne: React.FC = () => (
  <table>
    <thead>
      <tr>
        <th>Employee</th>
        <th>Client</th>
        <th>Account</th>
        <th>service</th>
        <th>debt</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowSpan={7}>employee 1</td>
        <td rowSpan={4}>client 1</td>
        <td>x2222</td>
        <td>service 1</td>
        <td>3000</td>
      </tr>
      <tr>
        <td>x2223</td>
        <td>service 2</td>
        <td>4000</td>
      </tr>
    </tbody>
  </table>
);

const TableTwo: React.FC = () => (
  <table>
    <thead>
      <tr>
        <th>Employee</th>
        <th>Client</th>
        <th>Account</th>
        <th>service</th>
        <th>debt</th>
      </tr>
    </thead>
    <tbody>{/*  implement dynamic variant of TableOne*/}</tbody>
  </table>
);

const App: React.FC = () => {
  return (
    <div className="App">
      <TableOne />
      <div style={{ margin: '100px 0' }} />
      <TableTwo />
    </div>
  );
};

export default App;
