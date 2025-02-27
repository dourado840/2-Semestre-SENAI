import {useState} from 'react'
import './Conversao2.css'

function Conversao2(){
    const[milhas, setMilhas] = useState(0)
    const[km, setKm] = useState(0)
    const[leguas, setLeguas] = useState(0)

function converterMilhasPraKm(){
    let entrada = Number(prompt("Km: "))   
    setMilhas((entrada / 1.609).toFixed(2))
    setKm(entrada)
    setLeguas((entrada / 4.828).toFixed(2))
}


  return (
    <div className='container-conversao2'>
        <h2>Km➡️Milhas➡️Léguas</h2>
        <button onClick={converterMilhasPraKm}>Converter</button>
        <p>
            Km: {km}
        </p>

        <p>
            Milhas: {milhas}
        </p>

        <p>
            Léguas: {leguas}
        </p>
    </div>
  )
}

export default Conversao2 

