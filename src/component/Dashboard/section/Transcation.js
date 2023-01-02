import React, { useEffect, useState } from 'react';
import {
    RightOutlined,
    EllipsisOutlined
} from '@ant-design/icons';
import { transcation_data } from '../../constants/constants';

const Transcations = () => {


    return (
        <>
            <div className=' border-[1px] rounded-[8px] border-[#d1c7c7] p-3'>
                <h3 className=' text-[18px] font-bold'>Transcation </h3>
                <div className='flex  items-baseline flex-wrap justify-between'>
                    <p className=' sm:w-[60%] text-[#787474] text-[16px] pb-5'>Lorem ipsum is placeholder text commonly used in the graphic</p>
                    <button className='sm:pb-0 pb-4 flex items-center gap-2 capitalize text-[#787474] text-[16px]'>
                        <span> see all Transcations</span>
                        <RightOutlined />
                    </button>
                </div>
                {transcation_data.slice(0, 4).map((item) => {
                    return (
                        <>
                            <div className='flex  sm:gap-0 gap-3 lg:flex-nowrap flex-wrap pb-[30px] items-center'>
                                {item.status === 'Completed' ?
                                    <div className='   grid    w-[30%]'>
                                        <p className='bg-green-100 gap-1 items-center flex w-[110px] px-2 py-1 rounded-[10px] text-green-700 status '>{item?.status}</p>
                                    </div>
                                    :
                                    item.status === 'Pending' ?
                                        <div className='   grid    w-[30%]'>
                                            <p className=' bg-yellow-100  gap-1 items-center flex w-[110px] px-2 py-1 rounded-[10px] text-yellow-700 status '>{item?.status}</p>
                                        </div>
                                        :
                                        item.status === 'Cancelled' ?
                                            <div className='   grid    w-[30%]'>
                                                <p className=' bg-red-100 gap-1 items-center flex w-[110px] px-2 py-1 rounded-[10px] text-red-700 status '>{item?.status}</p>
                                            </div> : null
                                }
                                <div className='sm:w-[35%] w-[50%] sm:ml-0 ml-12'>
                                    <p>{item?.card_name}{item?.card_no} </p>
                                    <p className='text-[#787474] text-[16px] '>{item?.payment_method} </p>
                                </div>
                                <div className='w-[30%] sm:w-[35%] '>
                                    <p>{item?.amount} </p>
                                    <p className='text-[#787474] text-[16px] '>{item?.transcation_date} </p>
                                </div>
                                <p className='w-[20%] sm:w-[30%]  sm:ml-0 ml-12 text-[#787474] text-[16px] '>{item?.site} </p>
                                <EllipsisOutlined />
                            </div>

                        </>
                    )
                })}

            </div>


        </>
    );
};
export default Transcations;