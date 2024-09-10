import { FC } from 'react';
import Header from '../Header/header';
import { Divider, Grid, Progress } from '@mantine/core';
import BoxContainer from '../boxcontainer/boxcontainet';
import { TbBrandBooking } from 'react-icons/tb';
import { BiSolidParty } from "react-icons/bi";
import { LuTv } from 'react-icons/lu';
import Tableex from '../tables/table';

interface ComponentNameProps {
  
}

const Ticketing: FC<ComponentNameProps> = ({}) => {

  return (
    <div>
      <Header title='Ticketing and Reservation' subtitle='some text' />
      <Divider/>
      <Grid grow gutter="sm" >       
        <Grid.Col span={7} m={'5'} >
            <BoxContainer titleText={'Reservations'} TitleComponent={<BiSolidParty/>} progress={[<Progress color="blue" radius="xl" size="xl" value={60} />,<Progress color="green" radius="xl" size="xl" value={60} />,<Progress color="red" radius="xl" size="xl" value={60} />]}/> 
          <Grid.Col span={12}>      
          </Grid.Col>
        </Grid.Col>
        <Grid.Col span={4} m={5}  >         
           <BoxContainer titleText={'COMEDY SHOW 12.05'} TitleComponent={<LuTv/>}/> 
        </Grid.Col>
          <Grid.Col span={12}>
           <BoxContainer titleText={' Bookings'} TitleComponent={<TbBrandBooking/>} table={<Tableex/>} />       
        </Grid.Col>
      </Grid>
    </div>
  );
};
export default Ticketing;