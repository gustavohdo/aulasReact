import React, { useState } from 'react'

const ListRender = () => {

    const [list] = useState(["Matheus", "Pedro", "Gustavo"]);

    const [users] = useState([
        {id: 1, name: "Gustavo", age: 24},
        {id: 2, name: "João", age: 30},
        {id: 3, name: "Pedro", age: 44},
    ]);

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>

        <ul>
           {users.map((user, id) => (
            <li key={id}>Nome: {user.name} | Idade: {user.age}</li>

           ))} 
        </ul>
    </div>
  )
}

export default ListRender