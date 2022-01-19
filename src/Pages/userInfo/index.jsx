import React, {Component } from "react"
import { Table, Space } from 'antd';
import '../../Component/UseInfo/index.css'
import SearchInfo from "../../Component/UseInfo/searchForm";

class TableForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
        },
        {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
        },
      ]
    }
    this.columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        render: (test,record) => (
          <Space size="middle">
            <a onClick={ () => this.clickHandler(record.key) }>删除</a>
          </Space>
        )
      },
    ];
  }
  clickHandler = (key) => {
    const list = this.state.data.filter(item=>key !==item.key)
    this.setState({
      data: list
    })
  }
  add(form) {
    const key = Date.now().toString(36)
    const list = this.state.data.concat([{...form,key}])
    this.setState({
      data: list
    })

  }
  render() {
    return (
      <div className="userInfo">
        <SearchInfo form={ this.state.form } onClick={(i) => this.add(i)}/>
        <Table columns={this.columns} dataSource={this.state.data} width="100%"/>
      </div>
    )
  }
}

export default TableForm