import React from "react";
import {Form, Input, Button, DatePicker} from "antd";

const layout = {
  labelCol: {span: 8},
  wrapperCol: {span: 16},
};

function InvestForm() {
  return <Form {...layout} name='investForm'>
    <Form.Item label='起始日期:' name='startDate' rules={[{required: true, message: '请输入起始日期'}]}>
      <DatePicker style={{width:'100%'}}/>
    </Form.Item>
    <Form.Item label='结束日期:' name='endDate' rules={[{required: true, message: '请输入结束日期'}]}>
      <DatePicker style={{width:'100%'}}/>
    </Form.Item>
    <Form.Item label='起始金额:' name='price' rules={[{required: true, message: '请输入起始金额'}]}>
      <Input/>
    </Form.Item>
    <Form.Item label='交易数量:' name='amount' rules={[{required: true, message: '请输入交易数量'}]}>
      <Input/>
    </Form.Item>
    <Form.Item>
      <Button type='primary' htmlType='submit' style={{float: "right"}}>
        提交
      </Button>
    </Form.Item>
  </Form>
}

export default InvestForm
