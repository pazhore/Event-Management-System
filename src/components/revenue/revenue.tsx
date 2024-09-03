import { Divider, Flex, Paper, Title } from '@mantine/core';
import { FC } from 'react';

import { FaMoneyBill1Wave } from "react-icons/fa6";

interface RevenueProps {
  
}

const Revenue: FC<RevenueProps> = ({}) => {
  return (
    <>
   <Paper shadow="xl" radius="md" p="xl">
        <Flex>
        <div> <FaMoneyBill1Wave /></div>
        <Title order={4} pl={5}>Revenue Insight</Title>
        </Flex>
        <Divider/>
   
    </Paper>
    </>
  );
};

export default Revenue;