// 创建reducer方法

const initState = {
  count: 0,
  status: false
}
const reducer = (state = initState, action ) => {
  console.log('reducer', action)
  switch(action.type) {
    case 'add_count':
      return { 
        count: state.count + 1 
      }
    case 'send_love':
        return { 
          status: true
        }
    case 'lose_love':
          return { 
            status: false
          }
    default:
      return state
  }
}

module.exports = {
  reducer
}