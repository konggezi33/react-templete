import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date() //初始化时间
    }
  }
  updateTime() { //更新时间
    this.setState({
      date: new Date()
    })
  }
  componentDidMount() {
    // 组件的已经渲染到Dom后执行
    this.timerID = setInterval(()=>{
      this.updateTime()
    }, 1000)
  }
  componentWillUnmount() {
    // 组件在销毁之前
    clearTimeout(this.timerID)
  }
  render() {
    return (
      <div>
        <h2>hello, words</h2>
        <div>当前时间为:{ this.state.date.toLocaleTimeString() }</div>
      </div>
    )
  }
}

export default Clock