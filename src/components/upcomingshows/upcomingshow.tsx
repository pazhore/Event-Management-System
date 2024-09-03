import { Divider, Flex, Paper, Title } from '@mantine/core';
import  { FC } from 'react';
import { LuTv } from "react-icons/lu";

interface UpcomingshowsProps {
  
}

const UpcomingShows: FC<UpcomingshowsProps> = ({}) => {
  return (
    <>
     
     <Paper shadow="xl" radius="md" p="xl">
        <Flex>
        <div> <LuTv /></div>
        <Title order={4} pl={5}>Upcoming Shows</Title>
        </Flex>
        <Divider/>
   
    </Paper>
      
       
    
     
  
    </>
  );
};

export default UpcomingShows;