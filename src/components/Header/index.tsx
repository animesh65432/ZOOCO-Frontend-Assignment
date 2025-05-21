import React from 'react';
import batterysvg from '../../assets/header/Group.svg';
import NetworkSvg from "../../assets/header/Excludeanother.svg"
import WifiSvg from "../../assets/header/Exclude.svg"

const Header: React.FC = () =>
    <header className="flex items-center justify-between w-[90vw] mt-2">
        <nav className="lg:text-2xl md:text-1xl text-sm font-bold text-black">
            <h1 className="text-black font-readex ">9:41</h1>
        </nav>
        <nav className="flex items-center lg:gap-12 md:gap-6 gap-4">
            <ul>
                <img src={NetworkSvg} className='lg:h-8 lg:w-8 md:h-6 md:w-6 h-4 w-4' />
            </ul>
            <ul>
                <img src={WifiSvg} className='lg:h-8 lg:w-8 md:h-6 md:w-6 h-4 w-4' />
            </ul>
            <ul>
                <img src={batterysvg} className='lg:h-8 lg:w-8 md:h-6 md:w-6 h-4 w-4' />
            </ul>
        </nav>
    </header>


export default Header

