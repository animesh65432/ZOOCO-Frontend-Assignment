import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './index';

const Layout: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col lg:gap-7 md:gap-5 gap-5 items-center background-color w-[100vw]">
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;
