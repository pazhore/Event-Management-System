import  { FC } from 'react';
import MainBody from '../mainBody/mainBody';
import SideBar from '../sideBar/sideBar';

interface ComponentNameProps {
  
}

const Main: FC<ComponentNameProps> = ({}) => {
  return (

 <div className='container-fluid'>
    <div className='row'>
    <div className='col-2 p-0'>
    <SideBar/>
    </div>
    <div className='col-10 p-0'>
    <MainBody/>
    </div>  
    </div>
 </div>

    
  );
};

export default Main;