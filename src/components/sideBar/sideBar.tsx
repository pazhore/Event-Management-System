import { FC } from 'react';
import './sidebar.css'
import  UserButton  from '../userbutton/userbuttion';
import { Divider, NavLink } from '@mantine/core';

import { RiDashboard2Line } from "react-icons/ri";
import { TbBrandBooking } from "react-icons/tb";
import { AiTwotoneAudio } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineSupportAgent } from "react-icons/md";
import { BsTicketPerforatedFill } from "react-icons/bs";


interface SideBarProps {
  
}

const SideBar: FC<SideBarProps> = ({}) => {
  return (
  <div className='sidebar'>
    <div className='navbar'>
    <NavLink
        href="/dashboard"
        label="Dashboard"
        leftSection={<RiDashboard2Line />}
        
      />
      <NavLink
      href="/booking"
      label="Talent Booking"
      leftSection={<TbBrandBooking />}
    
    />
    <NavLink
        href="/promotion"
        label="Show Promotion"
        leftSection={ <AiTwotoneAudio />}
     
      />
      <NavLink
        href="/ticketing"
        label="Ticketing and Reservation"
        leftSection={<BsTicketPerforatedFill />}
       
      />
    </div>
    
   
      <div className="footer">
      <div className='sub'>
      <NavLink
        href="/Settings"
        label="Settings"
        leftSection={<IoMdSettings />}
      />
      <NavLink
        href="/support"
        label="Support"
        leftSection={<MdOutlineSupportAgent />}
      />
    </div>
    <Divider/>
    <a href="/profile"> <UserButton/></a>
     
      </div>
  </div>
  );
};

export default SideBar;