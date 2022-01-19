import React,{ useState, useEffect } from 'react'

function Count () {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })
  
  return (
    <div>
      <h2>引用useState来增加数据</h2>
      <p>count: {count}</p>
      <button onClick={()=>setCount(count+1) }>add</button>
    </div>
  )
}

export default Count