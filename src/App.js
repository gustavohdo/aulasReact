import { useState } from 'react';
import './App.css';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {

  const [userName] = useState("Gustavo")

  function showMessage() {
    console.log('Evento do componente pai');
  }

  const [message, setMessage] = useState("")

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <div>
        <h1>Binding de dados: </h1>
        <p>Utilizamos o hook useState pois variáveis não são re-renderizadas. O primeiro exemplo é feito com uma variável e o segundo com o Hook:</p>
        <ManageData />
        <h1>Renderização de listas:</h1>
        <p>Utilizamos o hook useState para declarar uma lista de valores, e usamos a função MAP para percorrer o array e pra cada item devolver um JSX - atenção para incluir KEY utilizando o segundo parametro da arrow function para evitar avisos no console</p>
        <ListRender />
        <ConditionalRender />
        <ShowUserName name={userName} />
        <h1>Reaproveitamento de componentes:</h1>
        <CarDetails marca="Volks" modelo="Gol" cor="azul" />
        <CarDetails marca="Chevrolet" modelo="Celta" cor="prata" />
        <CarDetails marca="Toyota" modelo="Corona" cor="rosa" />
        <CarDetails marca="Fiat" modelo="Palio" cor="vermelho" />
        <h1>Container</h1>
        <Container>
          <p>
            Esse parágrafo foi criado a partir da passagem de elementos JSX para dentro do componente container.
            Semelhante a diretiva template do Angular.
          </p>
        </Container>
      </div>
      <ExecuteFunction myFunction={showMessage} />
      <Message msg={message}/>
      <ChangeMessageState handleMessage={setMessage}/>
    </div>
  );
}

export default App;
