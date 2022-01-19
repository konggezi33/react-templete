/**
 * 这是acion函数
 */

const sendAction = () => {
  return {
    type: 'send_action',
    value: '我是一个action的值'
  }
}

module.exports = {
  sendAction
}