import  { FC } from 'react';
import Header from '../Header/header';
import { Divider, Flex, Grid,  Paper, Title } from '@mantine/core';
import UpcomingShows from '../upcomingshows/upcomingshow';
import Revenue from '../revenue/revenue';
import { TbBrandBooking } from "react-icons/tb";
import { CiClock2 } from "react-icons/ci";
import { MdOutlineGraphicEq } from "react-icons/md";

interface ComponentNameProps {

}

const Dashboard: FC<ComponentNameProps> = ({ }) => {
  return (
    <>
      <Grid grow gutter="sm" >
        <Grid.Col span={12}  >
          <Header />
        </Grid.Col>
        <Grid.Col span={7}  >
          <Grid.Col span={12}>
            <UpcomingShows />
          </Grid.Col>
          <Grid.Col span={12}>
            <Revenue />
          </Grid.Col>
        </Grid.Col>
        <Grid.Col span={3} m={5}  >
          <Grid.Col span={12}> 
            <Paper shadow="xl" radius="md" p="xl">
        <Flex>
        <div> <CiClock2 /></div>
        <Title order={4} pl={5}>Time Slots</Title>
        </Flex>
        <Divider/>
        </Paper>
        </Grid.Col>
          <Grid.Col span={12}>
          <Paper shadow="xl" radius="md" p="xl">
        <Flex>
        <div> <TbBrandBooking /></div>
        <Title order={4} pl={5}>Recent Bookings</Title>
        </Flex>
        <Divider/>
        </Paper>
          </Grid.Col>
          <Grid.Col span={12} >
          <Paper shadow="xl" radius="md" p="xl">
        <Flex>
        <div> <MdOutlineGraphicEq /></div>
        <Title order={4} pl={5}>Audience Demographics</Title>
        </Flex>
        <Divider/>
        </Paper>
          </Grid.Col>
        </Grid.Col>

      </Grid>
      {/* <Header/> */}
    </>
  );
};

export default Dashboard;