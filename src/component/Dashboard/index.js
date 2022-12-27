import React, { useState } from 'react';
import Sidebar from '../global/shared/Sidebar';
import RecentCustomer from './section/Customers';
import SalesCard from './section/Salescard';
import ChartContainer from './section/SalesReport';
import TrafficSources from './section/Traffic_sources';
import Transcations from './section/Transcation';


const Dashboard = () => {


    return (
        <>
            <div className='grid pt-7 grid-cols-12'>
                <div className=' relative sm:col-span-2 col-span-10'>
                    <Sidebar />
                </div>
                <div className='sm:pt-0 pt-24 sm:ml-10 sm:col-span-10 col-span-12'>
                    <p className='text-[20px] font-bold'>Hey mariana
                        <span className='text-[18px] font-normal'>- here's what's happening with your store today</span>
                    </p>
                    <SalesCard />
                    <div className='flex gap-3 flex-wrap pb-8'>
                        <div className='lg:w-[60%] w-full'>
                            <ChartContainer />
                        </div>
                        <div className='lg:w-[38%] w-full'>
                            <TrafficSources />
                        </div>
                    </div>
                    <div className='flex gap-3 flex-wrap'>
                        <div className='lg:w-[60%] w-full'>
                            <Transcations />
                        </div>
                        <div className='lg:w-[38%] w-full'>
                            <RecentCustomer />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
export default Dashboard;