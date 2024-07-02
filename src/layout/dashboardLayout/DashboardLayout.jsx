import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Side from '../../components/sidebar/Side';
import Top from '../../components/topnav/Top';
import { FaBars } from 'react-icons/fa'
import { IoIosArrowBack } from 'react-icons/io';


const DashboardLayout = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            <div className="flex h-[100vh] bg-indigo-900 justify-center overflow-hidden">
                <div onClick={toggleSidebar}>
                    {isOpen ? <IoIosArrowBack className='text-white h-8 translate-x-72 translate-y-40 ml-[-1em] ' /> : <FaBars className='bg-green-700 mt-10 py-4 px-10 text-3xl-white cursor-pointer' />}
                </div>
                {isOpen && (
                    <Side />
                )}

                <div className="w-4/5 flex flex-col items-center bg-indigo-900 h-[100vh]">
                    <Top />
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;
