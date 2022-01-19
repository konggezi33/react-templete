import React from 'react'
import { connect } from 'react-redux'

class Acom extends React.Component {
  handerClick() {
    console.log(this.props)
    this.props.sendAction()
  }
  render() {
    return (
      <div onClick={()=> this.handerClick()}>点击+</div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    sendAction: () => {
      dispatch({
        type: 'add_count'
      })
    }
  }
}
export default connect(null, mapDispatchToProps)(Acom)