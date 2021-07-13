import React, { useState } from "react";
import axios from "axios";
import * as S from "./styled";
import { useHistory } from "react-router-dom";

function Home() {  
  const history = useHistory();

  const [ usuario, setUsuario ] = useState("");
  const [ erro, setErro ] = useState(false);

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      })
      localStorage.setItem("repositoriesName", JSON.stringify(repositoriesName));
      setErro(false);
      history.push("/repositories");
    })
    .catch(err => {
      setErro(true);
    });
  };

  const handlePesquisaEnter = e => {
  if (e.key === "Enter") {
    handlePesquisa();
  }
};

  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input name="usuario" id="usuario" value={usuario} className="usuarioInput" placeholder="Usuário" onChange={e => setUsuario(e.target.value)} onKeyPress={handlePesquisaEnter} />
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Content>
      {erro ? <S.ErrorMessage>Usuário não encontrado.</S.ErrorMessage> : ""}
    </S.HomeContainer>
  );
}
export default Home;
