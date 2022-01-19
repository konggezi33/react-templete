import React, { Component} from 'react'
import store from '../../reducers/store'
import { sendAction } from '../../reducers/action' 
export default class StoreHome extends Component {
  handerClick() {
    const action = sendAction()
    store.dispatch(action)
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({})
    })
  }
  render() {
    return (
      <>
      <div onClick={()=>this.handerClick()}>用store触发点击事件</div>
      <div>{store.getState().value}</div>
      </>
    )
  }
}