import React from 'react'
import { Button, Form, Input } from 'antd';

function donationForm() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  
  return (
    <div className='donate'>
      <h1>Donate</h1>
      <Form 
      initialValues={{remember: false,}} onFinish={onFinish}
      >
      <Form.Item 
        name="donationAmount"
        rules={[
          {
            required: true,
            message: 'Please enter the amount!',
          },
        ]}
      >
        <Input type="number"  placeholder="Amount in ₹"  />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="btn btnlogin login-form-button">
            Pay Now
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default donationForm;