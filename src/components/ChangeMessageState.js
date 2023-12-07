import React, { useState } from 'react'

const ChangeMessageState = ({handleMessage}) => {

    const messages = ["Oi", "Eai", "Como vai"]

  return (
    <div>
        <button onClick={() => handleMessage(messages[0])}>1</button>
        <button onClick={() => handleMessage(messages[1])}>2</button>
        <button onClick={() => handleMessage(messages[2])}>3</button>

    </div>
  )
}

export default ChangeMessageState