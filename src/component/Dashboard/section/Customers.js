import React, { useEffect, useState } from 'react';
import {
    RightOutlined
} from '@ant-design/icons';
import {getCustomerDetails} from '../../APIIntegration/apicalls'
import { Link, useNavigate } from 'react-router-dom';

const RecentCustomer = () => {

    const [user, setuser] = useState([])
  
    useEffect(() => {
        const UserAPI = async () => {
            const res = await getCustomerDetails().then(
                (res) => {
                    setuser(res?.users.slice(0, 4));
                    console.log("setuser", res?.users.slice(0, 4))
                }
            )
                .catch((err) => {
                    setuser([]);
                });
        };

        UserAPI();


    }, []);

    return (
        <>
            <div className=' border-[1px] rounded-[8px] border-[#d1c7c7] p-3'>
                <h3 className=' text-[18px] font-bold'>Recent Customers </h3>
                <p className='text-[#787474] text-[16px] pb-5'>Lorem ipsum is placeholder text commonly used in the graphic</p>
                {user.map((item) => {
                    return (
                        <>
                            <div className='flex pb-4'>
                                <img className='w-[50px] h-[50px] object-cover' src={item?.image} alt={item?.image} />                            
                                    <div className='w-[45%] pt-2'>
                                        <h4>{item?.firstName} {item?.lastName} </h4>
                                        <p className='text-[#787474] text-[16px] '>{item?.email} </p>
                                    </div>
                                    <div className=' text-end pt-2'>
                                        <p>{item?.phone} </p>
                                        <p className='text-[#787474] text-[16px] '>{item?.address?.city} </p>
                                    </div>
                                </div>
                       
                        </>
                    )
                })}
                <Link to="/customer">
                <button className='flex items-center pb-5 gap-2 capitalize text-[#787474] text-[16px]'>
                  <span> see all customers</span> 
                    <RightOutlined />
                </button></Link>
            </div>


        </>
    );
};
export default RecentCustomer;