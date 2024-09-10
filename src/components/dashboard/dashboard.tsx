import  { FC } from 'react';
import Header from '../Header/header';
import {Grid} from '@mantine/core';
import UpcomingShows from '../upcomingshows/upcomingshow';
import Revenue from '../revenue/revenue';
import { TbBrandBooking } from "react-icons/tb";
import { CiClock2 } from "react-icons/ci";
import { MdOutlineGraphicEq } from "react-icons/md";
import BoxContainer from '../boxcontainer/boxcontainet';

interface ComponentNameProps {

}
const Dashboard: FC<ComponentNameProps> = ({ }) => {
  const HandleClick2=()=>{
    console.log('onclick worked')
  }
  // const HandleManage=()=>{
  //   console.log("manage event")
  // }
  return (
    <>
      <Grid grow gutter="sm" >
        <Grid.Col span={12}>
          <Header title={"Dashboard"} subtitle={"some text"} />
        </Grid.Col>
        <Grid.Col span={7}>
          <Grid.Col span={12}>
            <UpcomingShows />
          </Grid.Col>
          <Grid.Col span={12}>
            <Revenue />
          </Grid.Col>
        </Grid.Col>
        <Grid.Col span={3} m={5}>
          <Grid.Col span={12}> 
          <BoxContainer titleText={'Event Booking'} TitleComponent={<CiClock2/>} button={["Book Event","manage Event"]} onClick={HandleClick2}/>
        </Grid.Col>
          <Grid.Col span={12}>
          <BoxContainer titleText={'Recent Bookings'} TitleComponent={<TbBrandBooking/>}/>
          </Grid.Col>
          <Grid.Col span={12}>
          <BoxContainer titleText={'Audience Demographics'} TitleComponent={<MdOutlineGraphicEq/>}/>
          </Grid.Col>
        </Grid.Col>
      </Grid>
    </>
  );
};
export default Dashboard;