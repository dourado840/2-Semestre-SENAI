import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[input, setInput] = useState("")
  const[resultado, setResultado] = useState("")

  function mostrarResultado(){
    let mensagem = ''
    for (let i = 0 ; i < input ; i++ ){
      mensagem += "Ho "
      
    }
    mensagem = mensagem + "!"
    setResultado(mensagem)
  }

  return (
    <>
    <div>
      <h1>Papai Noel & Elfos</h1>
      <span>Noel sorteia um papel e aquele número representa quantos "Ho" o Noel deve falar!</span>
    </div>

    <br />

    <div>
      <input type="text" value={input} 
        onChange={(e) => setInput(e.target.value)}/>

        <button onClick={mostrarResultado}>Calculadora de HoHo's</button>
    </div>

    <div>
      {resultado}
    </div>
    </>
  )
}

export default App
