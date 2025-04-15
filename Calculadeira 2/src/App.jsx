import { useState } from 'react'
import './App.css'

function App() {
const[valorM, setValorM] = useState('')
const[valorC, setValorC] = useState('')
const[resultado, setResultado] = useState('')

function calcularcap(){
let total = Number(valorM) + Number(valorC)
setResultado(total)
if(total > 50){
  setResultado(total + "Devida a capacidade máxima atingida (50) o passeio não sera realizado.")
}else{
  setResultado("O passeio irá sem realizado sem problemas, " + total +" Pessoas a bordo!")
}

}

  return (
    <>  
    <div>
      <div>
        <h1>Bondinho</h1>
      <span>A turma do colégio vai fazer uma excursão na serra e todos os alunos e monitores vão tomar um bondinho para subir até o pico de uma montanha. Informe os valores perguntados</span>
      </div>
      <input type="number" placeholder='Quantos Monitores' className='input-bonde' value={valorM} onChange={(e) => setValorM(e.target.value)}
      />
      <input type="number" placeholder='Quantas Crianças?' className='input-bonde' value={valorC} onChange={(e) => setValorC(e.target.value)}
      />
    </div>
      <button onClick={calcularcap}>Calcular capacidade</button>
    <div>
      <div>
        {resultado}
      </div>
    </div>

    </>
  )
}

export default App
