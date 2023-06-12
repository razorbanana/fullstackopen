import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" func={()=>setGood(good+1)} />
      <Button text="neutral" func={()=>setNeutral(neutral+1)} />
      <Button text="bad" func={()=>setBad(bad+1)} />
      <Statistics good={good} bad={bad} neutral={neutral}/>    
    </div>
  )
}

const Button = ({func, text}) => {
  return (
      <button onClick={func}>{text}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if(good+bad+neutral > 0){
    return(
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} percentChar={false}/>
            <StatisticLine text="neutral" value={neutral} percentChar={false}/>
            <StatisticLine text="bad" value={bad} percentChar={false}/>
            <StatisticLine text="all" value={good+neutral+bad} percentChar={false}/>
            <StatisticLine text="average" value={good-bad} percentChar={false}/>
            <StatisticLine text="positive" value={good*100/(good+neutral+bad)} percentChar={true}/>
          </tbody>
        </table>
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

const StatisticLine = ({text, value, percentChar}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value} {percentChar ? "%" : ""}</td>
    </tr>
  )
}

export default App
