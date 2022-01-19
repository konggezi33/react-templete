import { Button } from 'antd';
var createReactClass = require('create-react-class')
var add = createReactClass({
  getInitialState:function() {
    return {count: 0}
  },
  addTo: function() {
    if(this.count < 0) return
    this.setState({count: this.state.count + 1});
  },
  reduce:function() {
    if(this.count < 0) return
    this.setState({count: this.state.count - 1});
  },
  render: function() {
    return (
      <div>
        <h3>使用create-react-class</h3>
        <div>目前的数据为：{ this.count }</div>
        <Button onClick={this.addTo}>+</Button><Button  onClick={this.reduce}>-</Button>
      </div>
    )
  }
})

export default add