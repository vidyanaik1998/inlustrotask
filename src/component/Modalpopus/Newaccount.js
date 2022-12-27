import React, { useEffect, useState } from "react";
import { Alert, Modal, notification } from "antd";
import { Button, Checkbox, Form, Input } from 'antd';
import Icon, { CheckCircleOutlined} from '@ant-design/icons';



const successicon = "/assets/images/successicon.gif";
const BloxLogo = "/assets/icons/logo.svg";

const ModalSuccess = ({ Success, setSuccess }) => {
    const [form] = Form.useForm();
    const [successmsg, setsuccessmsg] = useState(false)

    const handleCancel = () => {
        setSuccess(false);
    };

    const onFinish = (values) => {
        console.log('Success:', values);
        openNotification("User account created successfully");
        setSuccess(false);
        form.resetFields();
    };
    console.log('Success:', successmsg);

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const openNotification = (errorMessage) => {
        notification.open({
          message: "Success",
          description: errorMessage,
          icon: <CheckCircleOutlined  style={{ color: "#EB5757" }} />,
        });
      };
    

    // useEffect(() => {
    //    setTimeout(() => {
    //     setsuccessmsg(false);
    //     }, 2000);
    //   }, [successmsg]);
    return (
        <>

            <Modal footer={null} className="account-modal" visible={Success} onCancel={handleCancel} width={600}>
                <h3 className="pb-6 text-[24px] text-black font-bold text-center">Create new account</h3>

                <Form
                    name="basic"
                    form={form} 
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    labelCol={{ span: 6 }}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Phone number"
                        name="phone"
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email Id"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email id!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <div className=" text-center">
                        <button className="px-6 rounded-[10px] py-3 bg-blue-600 text-white">
                            submit
                        </button></div>
                </Form>
            </Modal>
          {successmsg ?<Alert message="Success Text" type="success" /> : null }  

        </>
    );
};

export default ModalSuccess;


