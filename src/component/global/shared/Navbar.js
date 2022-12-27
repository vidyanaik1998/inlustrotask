import { Badge, Form, Input } from "antd";
import React, { useRef } from "react";
// import "../../../style/global.css"
import '../../style/global.css'
import search from "../../../public/assets/icons/search.svg";
import Icon, { SearchOutlined , MailOutlined , BellOutlined} from '@ant-design/icons';


export default function Navbar(){
    const [form] = Form.useForm();
    const input = useRef(null);

    return(
        <>
        <div className="navbar flex pb-7">
            <h2 className="header pt-2 flex gap-2 font-bold  items-center ">Clarity Ui</h2>
            <div className="searchfield">
            <Form form={form}>
                    <Form.Item name="filterdata">
                      <Input
                        type="text"
                        placeholder="Type search "
                        // onChange={optimizedSearch}
                        prefix={<SearchOutlined />}
                        className="sm:!w-[600px] lg:flex hidden"
                        ref={input}
                      />
                    </Form.Item>
                  </Form></div>
                 <div className="flex pt-2 gap-10 absolute sm:right-[50px] right-[6px]">
                 <Badge count={5}>

                 <MailOutlined />
                 </Badge>
                  <BellOutlined />
                 </div>
        </div>
        <hr/>
        </>
    )
}