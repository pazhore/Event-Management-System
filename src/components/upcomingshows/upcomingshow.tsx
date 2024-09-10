
import  { FC } from 'react';
import { LuTv } from "react-icons/lu";
import BoxContainer from '../boxcontainer/boxcontainet';
import CardS from '../card/card';


interface UpcomingshowsProps {
  
}

const UpcomingShows: FC<UpcomingshowsProps> = ({}) => {
  return (
    <>
    <BoxContainer titleText={'Upcoming shows'} TitleComponent={<LuTv/>} cards={[<CardS/>]}>

    </BoxContainer>
    </>
  );
};

export default UpcomingShows;