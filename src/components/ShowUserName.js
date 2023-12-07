import React from 'react'

const ShowUserName = (props) => {
  return (
    <div>
        <h1>PROPs</h1>
        <p>Propriedas são passadas como parâmetro para a função que representa cada componente, com essas propriedades é possível fazer passagem de valor de pai para filho</p>
        <p>Nome de usuário: {props.name}</p>
    </div>
  )
}

export default ShowUserName