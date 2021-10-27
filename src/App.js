import api from "./service/Api"
import { useState } from "react"
import './App.css';

function App() {
  const [cep, setCep] = useState()
  const [dados, setDados] = useState()

  function pegarCep(e) {
    e.preventDefault();
    setCep(e.target.value);

  }
  function consultar() {
    let url = cep + "/json"
    api.get(url).then((response) => {

      if (!response.data.erro) {
        setDados(response.data)
      } else {
        alert("Nãon foi encontrado");
      }

    }).catch((erro) => {
      alert("não foi encontrado");
    })
  }
  return (
    <div className="conteudo">
      <h1>Consultar <span>CEP</span></h1>
      <div className="buscar">
        <input type="number"  maxlength="8" name="cep" onChange={(e) => pegarCep(e)} placeholder="ex:55730000"/>
        <button onClick={() => consultar()}>Buscar CEP</button>
      </div>
      <section className="resultados">
        <div className="dd1">
          <p>Logradouro: {dados?.logradouro}</p>
          <p>CEP: {dados?.cep}</p>
          <p>Bairro: {dados?.bairro}</p>
        </div>
        <div className="dd2">
          <p>Cidade: {dados?.localidade}</p>
          <p>UF: {dados?.uf}</p>
          <p>DDD: {dados?.ddd}</p>
        </div>
      </section>
    </div>
  );
}

export default App;
