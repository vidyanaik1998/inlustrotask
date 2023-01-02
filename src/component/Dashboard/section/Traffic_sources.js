import React, { useEffect, useState } from 'react';
import { Progress, Select } from 'antd';
import { traffic_data } from '../../constants/constants';

const TrafficSources = () => {

    const [value, setvalue] = useState(1);
    const [progressvalue, setprogressvalue] = useState([])

    const handleChange = (value) => {
        setvalue(value)
    };

    useEffect(() => {
        setprogressvalue(traffic_data?.filter((item) => item.value === value)[0]?.data);
    }, [value])

    return (
        <>

            <div className=' border-[1px] rounded-[8px] border-[#d1c7c7] p-3'>
                <div className='flex justify-between pb-[25px]'>
                    <h3 className=' text-[18px] font-bold'>Traffic Sources</h3>
                    <Select
                        value={value}
                        style={{
                            width: 140,
                        }}
                        onChange={handleChange}
                        options={traffic_data}
                    />
                </div>
                <div >
                    <div className='pb-[15px]'>
                        <h3>Direct</h3>
                        <Progress width={1}   percent={progressvalue.direct_pre} status="active" format={()=> progressvalue?.direct} />
                    </div>
                    <div className='pb-[15px]'>
                        <h3>Referral</h3>
                        <Progress percent={progressvalue.referral_pre} status="active" format={()=> progressvalue?.referral} />
                    </div>
                    <div className='pb-[15px]'>
                        <h3>Social Media</h3>
                        <Progress percent={progressvalue.social_pre} status="active" format={()=> progressvalue?.social} />
                    </div>
                    <div className='pb-[15px]'>
                        <h3>Twitter</h3>
                        <Progress percent={progressvalue.twitter_pre} status="active" format={()=> progressvalue?.twitter} />
                    </div>
                </div>


            </div>

        </>
    );
};
export default TrafficSources;