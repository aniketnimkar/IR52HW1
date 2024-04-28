import { useState } from 'react'
import './App.css'
import UseFetch from './useFetch'

export default function App() {
  const [gedata, setGetData] = useState(false)
  const {data} = UseFetch("https://jsonplaceholder.typicode.com/todos/4")
  
  return (
    <main>
      <h1>Todo API</h1>
       <button onClick={()=> setGetData(true)}>Get Data</button>
      <div>
      {
        gedata && (
          <div>
            {data ? <p>{JSON.stringify(data)}</p> : <p>Error occerd while fetching the Data.</p>} 
          </div>
        )
      }
      </div>
    </main>
  )
}
