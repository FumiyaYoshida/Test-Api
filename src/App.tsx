import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('')
  fetch("https://tq4g7s57jl.execute-api.ap-northeast-1.amazonaws.com/wip2/sample01")
   .then((res) => res.json())
   .then((json) => setValue(json.body))
   .catch(() => alert("error"));

  return (
    <>
      <h1>API TEST</h1>
      <p>This is api test.</p>
      <p>{ value }</p>
    </>
  )
}

export default App
