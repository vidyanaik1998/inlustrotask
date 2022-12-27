import React, { useState , useEffect } from 'react';
import Sidebar from '../../global/shared/Sidebar';
import {getCustomerDetails} from '../../APIIntegration/apicalls'
import Customercard from './section/customer';


const Customer = () => {


    return (
        <>
        <div className='grid pt-7 grid-cols-12'>
            <div className=' relative sm:col-span-2 col-span-10'>
                   <Sidebar />
            </div>
            <div className=' ml-10 col-span-10'>
                <Customercard />
</div>
         
        </div>
    
        </>
    );
};
export default Customer;