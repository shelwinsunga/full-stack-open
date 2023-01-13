import { useState } from 'react'


const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

const Display = ({ text, value }) => (
  <p>{text}: {value}</p>
)

const Statistics = ({ good, neutral, bad, average, positive, all }) => {
  if (all === 0) return (<p>No feedback given</p>)
  return (
    <div>
      <Display text="good" value={good}></Display>
      <Display text="neutral" value={neutral}></Display>
      <Display text="bad" value={bad}></Display>
      <Display text="all" value={all}></Display>
      <Display text="average" value={average}></Display>
      <Display text="positive" value={positive}></Display>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + bad + neutral;
  const average = (good - bad) / all;
  const positive = good / all + "%";

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={() => { setGood(good + 1) }} text="good"></Button>
      <Button onClick={() => { setNeutral(neutral + 1) }} text="neutral"></Button>
      <Button onClick={() => { setBad(bad + 1) }} text="bad"></Button>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} average={average} positive={positive} all={all}></Statistics>
    </div >
  )
}

export default App