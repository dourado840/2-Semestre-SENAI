import { useState } from 'react'
import './App.css'

function App() {
  const[desejada, setDesejada] = useState(0);
  const[lida, setLida] = useState(0);

  return (
    <>
      <div>
          <h1>Calibrador de Pneus</h1>

          <div id='container-1'>
          <span>Pressão Desejada</span>
          <input type="number" 
          id='container-1'
          placeholder='Pressão Desejada'
          value={desejada}
          onChange={(e) => setDesejada(Number(e.target.value))}
          />
          </div>
        
          <div id='container-2'>
          <span>Pressão Lida</span>
          <input type="number"
          placeholder='Pressão lida'
          value={lida}
          onChange={(e) => setLida(Number (e.target.value))} 
          />
          </div>

          <p>Diferença {desejada - lida}</p>
      </div>
    </>
  )
}

export default App
