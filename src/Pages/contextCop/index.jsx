import React, {Component} from 'react'
import './index.css'
// 创建context容器
const MyContext = React.createContext()
const {Provider,Consumer} = MyContext
export default class A extends Component {
  state = {
    userName:'Tome'
  }
  render() {
    return (
      <div className="A">
        我是A组件
        <h3>我的名字是：{this.state.userName}</h3>
        <Provider value={this.state}>
          <B />
        </Provider>
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className="B">
        我是B组件
        <h3>我的名字是:ccc</h3>
        <C />
      </div>
    )
  }
}

// class C extends Component {
//   // 类式组件
//   static contextType = MyContext
//   render() {
//     console.log(this)
//     return (
//       <div className="C">
//         我是C组件
//         <h3>我爷爷的名字是: {this.context.userName}</h3>
//       </div>
//     )
//   }
// }

function C(){
  // 函数式组件
  return (
    <div className="C">
      我是C组件
      <h3>我爷爷的名字是:
        <Consumer>
          {
            value => {
              return value.userName
            }
          }
        </Consumer>
      </h3>
    </div>
  )
}