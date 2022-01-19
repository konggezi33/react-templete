import { Button } from 'antd'
import { Component, Fragment } from 'react'
import { connect } from 'react-redux'
class Boy extends Component {
  state = {
    send: false
  }
  handlerClick() {
    const { send } = this.state
    send ? this.props.cancelLove() : this.props.sendLove()
    this.setState({
      send: !send
    })
  }
  render() {
    return (
      <Fragment>
        <div>
          <h2>I am boy</h2>
          <p>{this.state.send ? '我已发送了爱心，接收到了吗': '我将要发送爱心，请接收'}</p>
        </div>
        <Button onClick={ () => this.handlerClick()}>{ this.state.send ? '取消发送' : '发送爱心'}</Button>
      </Fragment>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    sendLove: () => {
      dispatch({
        type: 'send_love'
      })
    },
    cancelLove: () => {
      dispatch({
        type: 'lose_love'
      })
    }
  }
}
export default connect(null, mapDispatchToProps)(Boy)