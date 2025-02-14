import './Corpo.css'
function Corpo(){
    function alertarUsuario(){
        alert("Cuidado")
    }
    return(
        <div className="container-corpo">
        <h1 className='texto'>Desbravando o React</h1>
        <p className='paragrafo'>Vamos começar nossa aventura</p>
        <button onClick={alertarUsuario}>Alerta</button>
        <img className='imagem' src="./qwe.jpg" alt="RichieRich" />
        </div>
    )
}
export default Corpo;