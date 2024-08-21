import  { FC } from 'react';
import "./sideBar.css";
import { RiDashboard2Fill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { IoIosAnalytics } from "react-icons/io";
import { IoMic } from "react-icons/io5";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { RiMoneyEuroCircleFill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";

interface SideBarProps {
  
}

const SideBar: FC<SideBarProps> = ({}) => {
  return (
    <>
    <div className='sidebar'>
        <div>
        <h1 className='title'>PlAnIfY</h1>
        </div>
        
        <ul className='menu'>
            <li><RiDashboard2Fill /> Dashboard</li>
            <li><SlCalender /> Talent Booking</li>
            <li><IoIosAnalytics /> Auidience Analytics</li>
            <li><IoMic /> Show Promotion</li>
            <li><BsTicketPerforatedFill /> Ticketing and Reservation</li>
            <li><RiMoneyEuroCircleFill /> financial Reporting</li>
        </ul>
      <div className='footer'>
      <div className='footermenu'>
            <li><IoSettingsSharp /> Settings</li>
            <li> <BiSupport /> Support</li>
        </div>
        <div className='profile'>
            <img src="https://cache.careers360.mobi/media/article_images/2021/7/27/best-professions-in-the-world.jpg" alt="" />
            <p>NIKHIL</p>
            <p>nikhilpkodannur@gmail.com</p>
        </div>
      </div>
      
    </div>
      
    </>
  );
};

export default SideBar;