import { useState } from 'react'
import './App.css'

function App() {
const[nota, setNota] = useState("")
const[input, setInput] = useState("")
const[input2, setInput2] = useState("")


function calcularMedia(){
  if((Number(input) + Number(input2)) / 2 <= 4){
    setNota("Reprovado!");

  }else if((Number(input) + Number(input2)) / 2 >= 7){
    setNota("Aprovado!");
  }else if((Number(input) + Number(input2)) / 2 < 7){
    setNota("Está em recuperação!")
  }

}

  return (
    <>
      <h1>Média Final</h1>
      <span>De acordo com suas 2 notas iremos avaliar se o aluno (você) será: <br /> aprovado, reprovado ou irá para a recuperação!</span>
  
      <div className='container'>
        <br />
        <input type="Number" value={input} 
         onChange={(e) => setInput(e.target.value)}
         placeholder='Primeira Nota'/>
        <input type="Number" value={input2} 
         onChange={(e) => setInput2(e.target.value)}
         placeholder='Segunda Nota'/>
      </div>
      
      <div>
        <button onClick={calcularMedia}>Calcular Média</button>

      </div>
      <div>
        {nota}
      </div>
    </>
  )
}

export default App
