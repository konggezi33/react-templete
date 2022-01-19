import React from 'react'
function Hooks2() {
  const [count, setCount] = React.useState(0)
  const [name, setName] = React.useState('Tom')
  const [times, setTimes] = React.useState(new Date())
  const myRef = React.useRef()
  React.useEffect(() => {
    let timer = setInterval(() => {
      // setTimes(val => new Date())
    },1000)
    return () => {
      // 页面离开时销毁
      clearInterval(timer)
    }
  },[count])
  function add() {
    setCount(val => val+1)
  }
  function show() {
    alert('value:' + myRef.current.value)
  }
  return(
    <div>
      <input ref={myRef}></input>
      <h2>我的名字是：{name}</h2>
      <button onClick={()=>{setName('Jerry')}}>点击我更改我的名字</button>
      <h4>我的值为：{ count } </h4>
      <button onClick={() => add()}>点击我更改我的值</button>
      <h3>当前的时间为: { times.toLocaleTimeString() }</h3>
      <button onClick={() => show()}>获取input的值</button>
    </div>
  )
}

export default Hooks2