import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={()=>setGood(good+1)}>good</button>
      <button onClick={()=>setNeutral(neutral+1)}>neutral</button>
      <button onClick={()=>setBad(bad+1)}>bad</button>
      <Statistics good={good} bad={bad} neutral={neutral}/>    
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if(good+bad+neutral > 0){
    return(
      <div>
        <h1>statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {good+neutral+bad}</p>
        <p>average {good-bad}</p>
        <p>positive {good*100/(good+neutral+bad)}%</p>
      </div>
    )
  }else{
    return(
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  
}

export default App
