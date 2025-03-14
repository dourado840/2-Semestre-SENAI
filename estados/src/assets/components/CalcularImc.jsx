import { useState } from 'react'
import './CalcularImc.css'

function CalcularImc() {
    const [imc, setImc] = useState("IMC Não calculado")
     
function CalcularImcConversao(){
    let peso = Number(prompt("Digite seu peso"))
    let altura = Number(prompt("Digite sua altura"))
    setImc(peso /(altura ** 2) )
        
}

  return (
    <div className='container-imc'>
        <h2>
            Calcular IMC🥶
        </h2>
        <button onClick={CalcularImcConversao}>Calcular</button>
         <p>
             {imc}
        </p>
    </div>
  )
}

export default CalcularImc