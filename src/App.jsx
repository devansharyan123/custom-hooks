import { useState } from 'react'
import { useFetch } from './hooks/useFetch';

import './App.css'

function App() {

  const { loading, data } = useFetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");



  console.log(data)
  return (


    <div>
      {loading ? <h1>Loading !!!</h1> : data.map((e, index) => (
        <p key={index}>Nation: {e.Nation}</p>
      ))}
    </div>

  )

}


function useCounter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1)
  }
  return {
    count: count,
    increaseCount: increaseCount
  }
}

function Counter() {
  const { count, increaseCount } = useCounter()
  return <div>
    <button onClick={increaseCount}>Increase {count}</button>
  </div>
}

export default App
