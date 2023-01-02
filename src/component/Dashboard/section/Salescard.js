import React, { useState } from 'react';

import {
    PlusOutlined,
    ArrowUpOutlined,
    ArrowDownOutlined
} from '@ant-design/icons';
import { data } from '../../constants/constants';

const SalesCard = () => {
   

    return (
        <>
            <div className='flex flex-wrap gap-6 pt-8 pb-8 '>
                {data?.map((item) => {
                    return (
                        <div key={item?.id} className='lg:w-[23%] w-full  border-[1px] rounded-[8px] border-[#d1c7c7] p-3'>
                            <p className='text-[#787474] text-[18px] capitalize'>{item?.title}</p>
                            <div className='flex pt-3 justify-between items-center' >
                                <p className=' text-[22px] font-bold capitalize'>{item?.amount}</p>
                                <div
                                className={item?.percentage >'20%' ? 'increment flex items-center gap-2' :'flex items-center gap-2 decrement' }
                                >
                                    <PlusOutlined  />
                                    <p className='pt-1'>{item?.percentage}</p>
                                    {item?.percentage < '20%' ?
                                        <ArrowDownOutlined   /> :
                                        <ArrowUpOutlined  />
                                    }
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>



        </>
    );
};
export default SalesCard;