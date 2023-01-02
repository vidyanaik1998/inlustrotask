import React, { useState , useEffect} from 'react';
import {
    BarChartOutlined,
    FolderOutlined,
    IdcardOutlined,
    HomeOutlined,
    TeamOutlined,
    UserOutlined,
    PlusOutlined,
    AlertOutlined,
    BellOutlined,
    SettingOutlined,
    LogoutOutlined ,
    MenuOutlined
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import ModalSuccess from '../../Modalpopus/Newaccount';


const sidebardata = [
    {
        label: 'ANALYTICS',
        icon: <BarChartOutlined />,
        link: '/',
        state: 'inactive'
    },
    {
        label: 'Performance',
        icon: <BarChartOutlined />,
        link: '/',
        state: 'active'
    },
    {
        label: 'Hotjar',
        icon: <AlertOutlined />,
        link: '/',
        state: 'active'
    },
    {
        label: 'SUPPORT',
        icon: <BarChartOutlined />,
        link: '/',
        state: 'inactive'
    },
    {
        label: 'Tickets',
        icon: <BarChartOutlined />,
        link: '/',
        state: 'active'
    },
    {
        label: 'Agent',
        icon: <UserOutlined />,
        link: '/',
        state: 'active'
    },
    {
        label: 'Customers',
        icon: <TeamOutlined />,
        link: '/customer',
        state: 'active'
    },
    {
        label: 'SHOP',
        icon: <BarChartOutlined />,
        link: '/',
        state: 'inactive'
    },
    {
        label: 'Products',
        icon: <FolderOutlined />,
        link: '/',
        state: 'active'
    },
    {
        label: 'Orders',
        icon: <IdcardOutlined />,
        link: '/',
        state: 'active'
    },
    {
        label: 'Reports',
        icon: <BellOutlined />,
        link: '/',
        state: 'active'
    },

]

const footer = [
    {
        label: 'Settings',
        icon: <SettingOutlined />,
        link: '/',
        state: 'active'
    },
    {
        label: 'Logout',
        icon: <LogoutOutlined />,
        link: '/',
        state: 'active'
    }]




export default function Sidebar() {
    const [Success, setSuccess] = useState(false);
    const [open, setOpen] = useState(false);
    const [stepHeight, setStepHeight] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
      };

    return (
        <>
            <div className=' ' >
                <button
                    onClick={() => setSuccess(true)}
                    className='bg-[#4555dd] whitespace-nowrap  py-3 px-4 rounded-[10px] flex items-center  gap-2 text-white'>
                    <PlusOutlined />
                    <span>Connect New Account</span>
                </button>
                <div >
                    <Link to='/'>
                        <h3 className='text-[18px] pt-4 text-gray-600 flex items-center gap-4'><HomeOutlined /> Dashborad</h3></Link>
                    <ul className=' '>
                        {/* {sidebardata.map((item) => { */}
                        {sidebardata?.map((item) => {
                            return (
                                <>
                                    {item?.state === 'inactive' ?
                                        <li className='pt-5  text-[18px] text-gray-400 flex items-center gap-4'>{item.label}</li> :
                                        <Link to={item.link}>
                                            <li className=' ml-3 pt-2 text-[18px] text-gray-600 flex items-center gap-4'>
                                                {item.icon}  {item.label}</li></Link>

                                    }
                                </>
                            )
                        })}
                    </ul>
                    <div className=' absolute bottom-0'>
                        <ul className=' '>
                            {/* {sidebardata.map((item) => { */}
                            {footer?.map((item) => {
                                return (
                                    <>
                                        {item?.state === 'inactive' ?
                                            <li className='pt-5  text-[18px] text-gray-400 flex items-center gap-4'>{item.label}</li> :
                                            <Link to={item.link}>
                                                <li className=' ml-3 pt-2 text-[18px] text-gray-600 flex items-center gap-4'>
                                                    {item.icon}  {item.label}</li></Link>

                                        }
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>   
            <ModalSuccess Success={Success} setSuccess={setSuccess} />
        </>
    )
}