import React from 'react';
import batterysvg from '../../assets/header/Group.svg';
import NetworkSvg from "../../assets/header/Excludeanother.svg"
import WifiSvg from "../../assets/header/Exclude.svg"

const Header: React.FC = () =>
    <header className="flex items-center justify-between lg:p-8 p-5">
        <nav className="text-3xl font-bold text-black">
            <h1 className="text-black font-readex ">9:41</h1>
        </nav>
        <nav className="flex items-center gap-12">
            <ul>
                <img src={NetworkSvg} className='h-10 w-10' />
            </ul>
            <ul>
                <img src={WifiSvg} className='h-10 w-10' />
            </ul>
            <ul>
                <img src={batterysvg} className='h-10 w-10' />
            </ul>
        </nav>
    </header>


export default Header

