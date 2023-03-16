import React,{useState} from 'react'

const App = () => {
  const [name,setName] = useState("Your Future!!!");
  return (
    <div>
      <center>
      <h1>All The Best For {name}</h1>
      </center>
    </div>
  )
}

export default App