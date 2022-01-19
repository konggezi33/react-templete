// import React from 'react'
import './index.css'

// export default class Square extends React.Component {
//  // ES6的形式  
//   render() {
//     return (<button className="square" onClick={() => this.props.onClick()}>
//       { this.props.value }
//     </button>)
//   }
// }

export default function Square (props) {
  // 无状态的函数形式
  return <button className="square" onClick={ () => props.onClick() }>
      { props.value }
    </button>
}