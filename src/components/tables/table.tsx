import React, { FC } from 'react';
import { Table } from '@mantine/core';

interface TableProps {
  
}

const Tableex: FC<TableProps> = ({}) => {
    const elements = [
        {id: 6, cus_name: 12.011, Date: 'C', count: 'Carbon',price:'', status:''},
        {id: 7, cus_name: 14.007, Date: 'N', count: 'Nitrogen' },
        {id: 39, cus_name: 88.906, Date: 'Y', count: 'Yttrium' },
        {id: 56, cus_name: 137.33, Date: 'Ba', count: 'Barium' },
        {id: 58, cus_name: 140.12, Date: 'Ce', count: 'Cerium' },
      ];
    const rows =elements.map((element:any) => (
        <Table.Tr key={element.cus_name}>
          <Table.Td>{element.id}</Table.Td>
          <Table.Td>{element.cus_name}</Table.Td>
          <Table.Td>{element.Date}</Table.Td>
          <Table.Td>{element.count}</Table.Td>
          <Table.Td>{element.price}</Table.Td>
          <Table.Td>{element.status}</Table.Td>
        </Table.Tr>
      ))
  return (
    <>
      <Table.ScrollContainer minWidth={500}>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Booking ID</Table.Th>
            <Table.Th>Customer</Table.Th>
            <Table.Th>Show Date & TIME</Table.Th>
            <Table.Th>NO of ticktes</Table.Th>
            <Table.Th>Total Price</Table.Th>
            <Table.Th>Status</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
    </>
  );
};

export default Tableex;