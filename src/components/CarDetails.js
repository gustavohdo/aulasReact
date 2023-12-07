import React from 'react'

const CarDetails = ({marca, modelo, cor}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {marca}</li>
            <li>Modelo: {modelo}</li>
            <li>Cor: {cor}</li>
        </ul>
    </div>
  )
}

export default CarDetails