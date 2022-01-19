import { render } from "less";
import { Component } from "react";
import './index.css'

export default class RenderProps extends Component {
  render() {
    return (
      <div className="C">
        我是父组件
        {/* 使用 {this.props.chilren} */}
      <C>
        <B></B>
      </C>
      -----------------------------
      <A render={(data) =><D data={data}></D>}></A>
      </div>
    )
  }
}

class A extends Component {
  state = {
    name: 'Tom'
  }
  render() {
    console.log('D:',this)
    return (
      <div className="A">
        我是组件A
        <h3>使用 props render:this.props.render</h3>
        {this.props.render(this.state)}
      </div>
    )
  }
}

class C extends Component {
  state = {
    name: 'Tom'
  }
  render() {
    return (
      <div className="A">
        我是组件C
        <h3>使用this.props.chilren</h3>
        {this.props.children}
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className="B">
        我是组件B
      </div>
    )
  }
}

class D extends Component {
  render() {
    console.log('D:',this)
    return (
      <div className="B">
        我是组件D
      <h4>A组件的名字是：{this.props.data.name}</h4>
      </div>
    )
  }
}