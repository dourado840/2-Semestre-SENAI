import{ useState } from 'react'
import './App.css'
import Conversao from './assets/components/Conversao'
import Conversao2 from './assets/components/Conversao2'

function App() {
  const [usuario, setUsuario] = useState("Juca")
  const[senha, setSenha] = useState()
  
  // usuario = "Deu Ruim"

  let nome = "Uilib"

  function lerNome(){
    nome = prompt("Digite o nome (vou ignorar):")
    console.log(nome);
  }
  function lerUsuario(){
    let resposta = prompt("Digite o novo usuário:")
    setUsuario(resposta)

    let pw = prompt("Digite a nova senha!: ")
    let pw2 = prompt("Confirme sua senha!: ")
    if (pw === pw2){
      setSenha(pw)
    }else
    alert("As senhas não são coerentes!")

  }
  return (
    <>
    <Conversao/>
    <Conversao2/>
    
    <h1>ESTADOS</h1>
    Nome: {nome}
    <div>
      Usuário: {usuario} <br />
      Senha: {senha}
    </div>
    <button onClick={lerNome}>Trocar Nome</button>
    <button onClick={lerUsuario}>Trocar Usuário</button>
    </>
  )
}

export default App
