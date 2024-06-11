import React, {useEffect} from 'react'

import './App.css'

function App() {
  const [text, setText] = React.useState("")
  const [timer, setTimer] = React.useState(5)
  const [isTimerOn, setIsTimerOn] = React.useState(false)

  function handleChange(e){
    const {value} = e.target
    setText(value)
  }

  function wordCount(text) {
    const array = text.trim().split(/\s+/)
    return array.length
  }

 useEffect(() => {
  if (isTimerOn && timer > 0){
    setTimeout(()=> {
      setTimer(time => time - 1)
  }, 1000)
  } else {
    setIsTimerOn(false)
  }
 }, [timer, isTimerOn] )

console.log(isTimerOn)
   return (  
    
      <div>
            <h1>How fast do you type?</h1>
            <textarea 
            onChange={handleChange} 
            value={text}
            />
            <h4>Time remaining: {timer}</h4>
            <button onClick={() => setIsTimerOn(true)} >Start</button>
            <h1>Word count: ???</h1>
        </div>
        
    
  )
}

export default App
