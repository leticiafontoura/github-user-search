import React, { useState } from "react";
import axios from "axios";
import * as S from "./styled";
import { useHistory } from "react-router-dom";
import GitHubIcon from '@material-ui/icons/GitHub';

function Home() {  
  const history = useHistory();

  const [ usuario, setUsuario ] = useState("");
  const [ erro, setErro ] = useState(false);

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response => {
      const repositories = response.data;
      let repositoryAvatar = [];
      repositories.map((repository) => {
        repositoryAvatar.push(repository.owner.avatar_url);
      });
      repositoryAvatar = repositoryAvatar[0];
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      })
      localStorage.setItem("repositoriesName", JSON.stringify(repositoriesName));
      // setErro(false);
      // history.push("/repositories");
      localStorage.setItem("repositoriesUser", usuario);
      localStorage.setItem("repositoryAvatar", repositoryAvatar);
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
      <S.Title>Qual usuário do github você quer pesquisar?</S.Title>
      <S.SubTitle>Insira no campo abaixo o usuário desejado para listar os respectivos repositórios :)</S.SubTitle>
      <S.Content>
        <S.Input name="usuario" id="usuario" value={usuario} className="usuarioInput" placeholder="Usuário" onChange={e => setUsuario(e.target.value)} onKeyPress={handlePesquisaEnter} autoComplete="off" />
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Content>
      {erro ? <S.ErrorMessage>Opa! <S.Strong>Usuário não encontrado.</S.Strong> Tem certeza que você digitou corretamente? Tente de novo! :)</S.ErrorMessage> : ""}
      <S.Footer><p >Desenvolvido por <S.LinkGit href="https://github.com/leticiafontoura" target="_blank">Letícia Fontoura <GitHubIcon style={{verticalAlign: "sub"}}/></S.LinkGit></p></S.Footer>
    </S.HomeContainer>
  );
}
export default Home;
