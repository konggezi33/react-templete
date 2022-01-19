/**
 * 这是reducer 函数
 */
const initState = {
  value: '默认值'
}
const reducer = (state=initState, action) => {
  console.log(action)
  switch(action.type) {
    case 'send_action':
      return Object.assign({}, state, action)
    default:
      return state
  }
}

module.exports = {
  reducer
}