import React from "react";
import { connect } from 'react-redux'

class Bcom extends React.Component {
  render() {
    console.log('Bcom', this.props)
    return(
      <div>值为：{this.props.count}</div>
    )
  }
}
const mapStateToProps = state => {
  console.log('state', state)
  return state
}
export default connect(mapStateToProps)(Bcom)