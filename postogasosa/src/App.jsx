import { useState } from 'react'
import './App.css'

function App() {
const[alcool, setAlcool] = useState(0)
const[inputAlcool, setInputAlcool] = useState('')
const[gasolina, setGasolina] = useState(0)
const[inputGasolina, setInputGasolina] = useState('')
const[diesel, setDiesel] = useState(0)
const[inputDiesel, setInputDiesel] = useState('')
const[resultado, setResultado] = useState("")


function abastecer(){
  setAlcool(alcool + Number(inputAlcool))
  setGasolina(gasolina +Number(inputGasolina))
  setDiesel(diesel +Number(inputDiesel))
}

  return (
    <>
    <div>
      <h1>Posto de Gasolina</h1>
    </div>
    <br />
    <div>
        <input type="number" value={inputAlcool}  placeholder='Álcool' onChange={(e) => setInputAlcool(e.target.value)}/> <br />
        {alcool} <br />
        <input type="number" value={inputGasolina} onChange={(e) => setInputGasolina(e.target.value)} placeholder='Gasolina'/> <br />
        {gasolina} <br />
        <input type="number" value={inputDiesel} onChange={(e) => setInputDiesel(e.target.value)} placeholder='Diesel'/> <br />
        {diesel} <br />
        <button onClick={abastecer}>Abastecer</button>
    </div>
    
    <div>

    </div>


    </>
  )
}

export default App
