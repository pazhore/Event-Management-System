import  { FC } from 'react';
import Header from '../Header/header';

interface Props {
  
}

const Promotion: FC<Props> = ({}) => {
  const HandleClick=()=>{
    console.log("onclick fun")
  }
  return (
    <>
  <Header title='Show Promotion' subtitle='some text' buttons={['+ create Talent']} onClick={HandleClick} />
    </>
  );
};

export default Promotion ;