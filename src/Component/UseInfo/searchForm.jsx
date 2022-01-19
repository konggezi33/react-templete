import React from 'react'
import { Form, Input, Button, InputNumber } from 'antd';

export default function searchInfo(props) {
  function onFinish(value){
    console.log(value)
    props.onClick(value)
  }
    return (
      <Form
        name="basic"
        labelCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        layout="inline"
        onFinish={ onFinish }
      >
        <Form.Item label="名称" name="name">
          <Input placeholder="请输入名称"/>
        </Form.Item>
        <Form.Item label="年龄" name="age" rules={[{ type: 'number', min: 0, max: 99 }]}>
          <InputNumber placeholder="请输入年龄" />
        </Form.Item>
        <Form.Item label="地址" name="address">
          <Input placeholder="请输入地址"/>
        </Form.Item>
        <Form.Item>
        <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
}