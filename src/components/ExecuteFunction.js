import React from 'react'

const ExecuteFunction = ({myFunction}) => {
  return (
    <div>
        <button onClick={myFunction}>Clique aqui para ativar a função do componente pai</button>
    </div>
  )
}

export default ExecuteFunction