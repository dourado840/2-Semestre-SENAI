import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const[inputAntigo, setInputAntigo] = useState("")
const[inputNovo, setInputNovo] = useState("")
const[resultado, setResultado] = useState("")

function calcularAumento(){
  let antigo = Number(inputAntigo)
  let novo = Number(inputNovo)
  let diferenca = novo - antigo
  setResultado(diferenca)
}


  return (
    <>  
    <div>
      <div>
        <h1>MAIS NOVO</h1>
      </div>
      <label htmlFor="">Valor Antigo</label>
      <input type="text" value={inputAntigo} onChange={(e) => setInputAntigo(e.target.value)} />
    </div>

    <div>
      <label htmlFor="">Valor Novo</label>
      <input type="text" value={inputNovo} onChange={(e) => setInputNovo(e.target.value)} />
    </div>
    <button onClick={calcularAumento}>Calcular Aumento</button>
    <div>
        {resultado}
    </div>
    </>
  )
}

export default App
