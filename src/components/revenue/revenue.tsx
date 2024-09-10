import { FC } from 'react';
import { FaMoneyBill1Wave } from "react-icons/fa6";
import BoxContainer from '../boxcontainer/boxcontainet';

interface RevenueProps {
  
}

const Revenue: FC<RevenueProps> = ({}) => {
  return (
    <>
    <BoxContainer titleText={'Revenue Insight'} TitleComponent={<FaMoneyBill1Wave/>}/>
    </>
  );
};

export default Revenue;