import { Badge, Form, Input } from "antd";
import React, { useRef, useState } from "react";
// import "../../../style/global.css"
import '../../style/global.css'
import Icon, { SearchOutlined, MailOutlined, BellOutlined, MenuOutlined } from '@ant-design/icons';
import Sidebar from "./Sidebar";
import { Drawer } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { AutoComplete } from 'antd';
import { getHomePageSearchContentAPI } from "../../APIIntegration/apicalls";
import { Link } from "react-router-dom";
const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const [stepHeight, setStepHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const [dataSource, setdataSource] = useState([]);
  const onSearch = async (searchText) => {
    setInputValue(searchText);

    const res = await getHomePageSearchContentAPI(searchText)
      .then((res) => {
        setdataSource(res?.users);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [inputValue, setInputValue] = React.useState('');

  const onSelect = (data, option) => {
    console.log("onSelect", data, option.children[1]?.props?.children[0])
    setInputValue(option.children[1]?.props?.children[0]);
  };


  return (
    <>
      <div className="navbar flex flex-wrap pb-7">
        <h2 className="header pt-2 flex gap-2 font-bold  items-center ">Clarity Ui</h2>
        <div className="searchfield">
          <AutoComplete
           
            value={inputValue}
            dataSource={
              dataSource.map((item) => {
                return (
                  <>
                  <div className="grid pb-3">
                    <img className="w-[40px] h-[40px]" src={item?.image} alt={item?.image} />
                    <h1>
                      {item.firstName} {item?.lastName}
                    </h1>                 
                   </div>
                    </>
                )
              })
            }
            notFoundContent="no result found"
            onSelect={onSelect}
            onSearch={onSearch}
            placeholder="Type to search"
            className=" lg:flex hidden"
          >
            <Input prefix={<SearchOutlined />} />
          </AutoComplete>

        </div>
        <div className="flex pt-2 gap-10 absolute sm:right-[50px] right-[6px]">
          <Badge count={5}>

            <MailOutlined />
          </Badge>
          <BellOutlined />
          <div className="mt-[-5px]">
            <Avatar icon={<UserOutlined />} />

          </div>
          <div className="lg:hidden block ">
            <MenuOutlined onClick={showDrawer} />
          </div>
        </div>
      </div>
      <hr />

      <Drawer
        placement="right"
        onClose={onClose}
        open={open}
        className="navdrawer"
      >
        <div className="sidebar__menu">
          <div
            //   ref={indicatorRef}
            className="sidebar__menu__indicator"
            style={{
              transform: `translateX(-50%) translateY(${activeIndex * stepHeight
                }px)`,
            }}
          ></div>
          <Sidebar />
        </div>
      </Drawer>

    </>
  )
}