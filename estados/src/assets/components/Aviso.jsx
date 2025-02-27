import React, { useState } from 'react'


function Aviso() {
    const [avisar, setAvisar] = useState(false)
  return (
    <div>
        {avisar}
        <p>
        Celulares e jogos são proibidos no laboratório
        </p>
    </div>
  )
}

export default Aviso