import React, {useEffect, useRef} from 'react'

import './App.css'

export default function App() {
  const [text, setText] = React.useState("")
  const [timer, setTimer] = React.useState(5)
  const [isTimerOn, setIsTimerOn] = React.useState(false)
  const [wordCount, setWordCount] = React.useState(0)
  const textBoxRef = useRef(null)

  function handleChange(e){
    const {value} = e.target
    setText(value)
  }

  function wordCounter(text) {
    const array = text.trim().split(/\s+/)
    return array.length
  }

  function startClock(){
    setIsTimerOn(true)
    setTimer(5)
    setText("")
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()
  }

  function endGame(){
    setIsTimerOn(false)
    const count = wordCounter(text)
    setWordCount(count)
  }

 useEffect(() => {
  if (isTimerOn && timer > 0){
    setTimeout(()=> {
      setTimer(time => time - 1)
  }, 1000)
  } else {
    endGame()
    }
 }, [timer, isTimerOn] )


   return (  
    
      <div>
            <h1>How fast do you type?</h1>
            <textarea 
            ref={textBoxRef}
            onChange={handleChange} 
            value={text}
            disabled={!isTimerOn}
            />
            <h4>Time remaining: {timer}</h4>
            <button
              onClick={startClock}
              disabled={isTimerOn}
              >
              Start</button>
            <h1>Word count:{wordCount}</h1>
        </div>
        
    
  )
}

