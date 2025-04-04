import { useState } from 'react'
import './App.css'
import Evento from './components/Evento'

function App() {
  const[inputUsername, setInputUsername] = useState('')
  const[inputSenha, setInputSenha] = useState('')
  const[erro, setErro] = useState (false)
  const[acerto, setAcerto] = useState(false)

  function efetuarLogin(){
    if(inputUsername == "Dourado" && inputSenha == "12345"){
      setAcerto(true)
      setInputUsername("")
      setInputSenha("")
    }
    else{
      // alert("Você não está cadastrado na plataforma!")
      setErro(true)
    }

  }
  return (
    <div className='container-app'>
        <h1>Inputs Controlados</h1>
        <label htmlFor="">Username</label>
        <input type="text" 
        value={inputUsername}
        onChange={(event) => setInputUsername (event.target.value)} 
        />

        <label htmlFor="">Senha</label>
        <input type="password" 
        value={inputSenha}
        onChange={(event) => setInputSenha(event.target.value)}


        />

        {acerto &&
        <span className='msg-acerto'>Aprovado para navegar na plataforma</span>
        }
        {erro &&
        <span className='msg-erro'>Credenciais Inválidas</span>
        }
        {/*inputValor */}
        <button onClick={efetuarLogin}>Login</button>

        <Evento/>
    </div>  
  )
}

export default App
