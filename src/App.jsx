import { useState } from "react"

export function App() {
  const [data, setData] = useState();
  const handleClickUp = () => {
    console.log('ok');
    
  }
  const handleClickDown = () => {
    console.log('ok');
    
  }
  return (
    <div className="bg-cyan-200">
      <button onClick={handleClickUp}>Clic moi pour monter</button>
      <h1></h1>
      <button onClick={handleClickDown}>Clic moi pour descendre</button>
    </div>
  )
}