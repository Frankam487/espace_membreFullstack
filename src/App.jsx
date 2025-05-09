import { useState } from "react"
import React from 'react';
export default function App() {
  const [data, setData] = useState(0);
  const handleClickUp = () => {
    setData((t) => t+1);
    data === 10 && alert('tu es trop loin bro!!!');
    return null;
  }
  const handleClickDown = () => {
    setData((t) => t-1);
    data === -4 && alert('tu es trop bas !!!')
    return null;
    
  }
  return (
    <div className="w-1/2 my-10 mx-auto bg-red-900 flex flex-col rounded">
      <button className="p-2 bg-rose-500 btn-accent hover:p-[12px] transition-all" onClick={handleClickUp}>Clic moi pour monter</button>
      <h1 className="text-center">{ data}</h1>
      <button onClick={handleClickDown} className="p-2 bg-rose-500 btn-accent hover:p-[12px] transition-all">Clic moi pour descendre</button>
    </div>
  )
}