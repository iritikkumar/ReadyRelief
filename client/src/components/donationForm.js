import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const donationForm = () => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Amount"
      name="donationAmount"
      rules={[
        {
        //   type: "number",
          required: true,
        //   message: 'Please input the amount you want to donate 🤑!',
        },
      ]}
    >
      <Input type='number'/>
    </Form.Item>    

    

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Pay Now
      </Button>
    </Form.Item>
  </Form>
);
export default donationForm;