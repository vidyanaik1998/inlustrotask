import React, { useState, useEffect } from 'react';
import { getCustomerDetails } from '../../../APIIntegration/apicalls';


const Customercard = () => {

    const [user, setuser] = useState([])

    useEffect(() => {
        const UserAPI = async () => {
            const res = await getCustomerDetails().then(
                (res) => {
                    setuser(res?.users);
                    console.log("setuser", res?.users)
                }
            )
                .catch((err) => {
                    setuser([]);
                });
        };

        UserAPI();

    }, []);

    console.log("user", user)
    return (
        <>
            <div className=' flex flex-wrap gap-7 sm:pt-8 pt-24 pb-8 '>
                {user?.map((item) => {
                    return (
                        <div key={item?.id} className='sm:w-[30%] w-full  border-[1px] rounded-[8px] border-[#d1c7c7] p-3'>
                            <div className=' text-center flex justify-center'>
                                <img className=' bg-gray-300 rounded-[50%] w-[90px] h-[90px] object-cover' src={item?.image} alt={item?.image} />
                            </div>
                            <div className=' text-center pt-5'>
                                <h4>{item?.firstName} {item?.lastName} </h4>
                                <p>{item?.phone} </p>

                                <p>{item?.email}</p>
                                <p className='pt-3 text-[#787474] text-[16px] '>{item?.address?.address} , {item?.address?.city} , {item?.address?.postalCode} </p>
                            </div>
                        </div>
                    )
                })}
            </div>

        </>
    );
};
export default Customercard;