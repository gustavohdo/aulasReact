import React, { useState } from 'react'

const ConditionalRender = () => {
    const [exibir, setExibir] = useState(true);

    const [name, setName] = useState("Gustavo")

  return (
    <div>
        <h1>Renderização Condicional</h1>
        {exibir &&<p>Esse parágro só exibido se a variável EXIBIR for true, o botão abaixo alterna o booleano dessa variável, essa sintaxe é especialmente estranha, 'condicao && tag'</p>}
        <button onClick={() => setExibir(!exibir)}>Alternar estado</button>
        <p>Mas há uma segunda forma, com ternário.</p>
    </div>
  )
}

export default ConditionalRender