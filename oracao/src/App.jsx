import { useState } from 'react'
import './App.css'

function App() {
  const[oracao, setOracao] = useState("")

  function bt1(){
    setOracao("Amém, Ó CSS divino, que dos bugs nos livra e nos guia ao pixel perfeito. Que tuas classes abençoem nosso layout e que as variáveis se ajustem com graça. Que o Flexbox nos mostre o caminho do alinhamento e que o grid seja nosso farol de organização. Que cada media query seja um alívio e que os breakpoints nos protejam da destruição dos mobile views.")

  }

  function bt2(){
    setOracao("Senhor Git, dai-me forças para subir a branch certa,Coragem para lidar com o merge,E sabedoria para entender o código que eu mesmo escrevi ontem.Concedei-me domínio sobre o front, o back, e o café.Protegei minha stack das atualizações quebradoras,E dai-me fé nos testes automatizados. Pois teu é o commit, O build e a glória do log Agora e para sempre.")
  }

  function bt3(){
    setOracao("Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nobis voluptatum dignissimos non, ea nam esse maxime rem dolorum velit placeat modi voluptatibus aspernatur? Perspiciatis nihil itaque blanditiis odit libero.")

  }

  function bt4(){
    setOracao("AAAAAAAA")
  }
  
  function bt5(){
    setOracao("AAAAAAAA")
    
  }

  
  return (
    <>
      <div className='container-buttons'>
        <h2>Painel de Orações</h2>
        <p>Escolha uma Oração!</p>

        <div>
          <p>{oracao}</p>
        </div>

        <button onClick={bt1}>Oração 1</button>
        <button onClick={bt2}>Oração 2</button>
        <button onClick={bt3}>Oração 3</button>
        <button onClick={bt4}>Oração 4</button>
        <button onClick={bt5}>Oração 5</button>
      </div>
    </>
  )
}

export default App
