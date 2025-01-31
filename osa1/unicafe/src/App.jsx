import { useState } from 'react'

import './App.css'

// Statistic child Component
const Statistics = (props) => {
  if (props[0].total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={props[0].goodClicks} />
          <StatisticLine text="neutral" value={props[0].neutralClicks} />
          <StatisticLine text="bad" value={props[0].badClicks} />
          <StatisticLine text="all" value={props[0].total} />
          <StatisticLine text="average" value={props[0].avg} />
          <StatisticLine text="positive" value={props[0].percentageGood} />
        </tbody>
      </table>
    </div>
  )
}

// Button component
const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

// StatisticsLine component, prints out one statistics line
const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)


// MAIN COMPONENT
function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  // Event handler for good feedback
  const handleGoodClicks = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setAll(updatedGood + neutral + bad)
  }

  // Event handler for neutral feedback
  const handleNeutralClicks = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setAll(good + updatedNeutral + bad)
  }

  // Event handler for bad feedback
  const handleBadClicks = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setAll(good + neutral + updatedBad)
  }

  // Function for calculating average rating
  // good equals +1 and bad equals -1, while neutral equals 0
  const averageRating = function (positive, negative) {
    return (positive + (-negative)) / all
  }

  // Function for calculating percentage of good ratings
  // from the given ratings
  const percentagePositive = function (positiveRating) {
    return (positiveRating) / all * 100
  }

  // Array to pass values to child component
  const clicksAndStats = [
    {
      goodClicks: good,
      neutralClicks: neutral,
      badClicks: bad,
      total: all,
      avg: averageRating(good, bad),
      percentageGood: percentagePositive(good) + ' %'
    }
  ]

  return (
    <div>
      <h1>Unicafe feedback app</h1>
      <h2>Give feedback</h2>
        <Button onClick={handleGoodClicks} text="good" />
        <Button onClick={handleNeutralClicks} text="neutral" />
        <Button onClick={handleBadClicks} text="bad" />
      <h2>Statistics</h2>
      <Statistics {...clicksAndStats} />
    </div>
  )
}

export default App