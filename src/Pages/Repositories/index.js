import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { useHistory } from "react-router-dom";
import GitHubIcon from '@material-ui/icons/GitHub';
import FileCopyIcon from '@material-ui/icons/FileCopy';

export default function Repositories() {
    const history = useHistory();
    const [repositories, setRepositories] = useState([]);
    const [users, setUsers] = useState();
    const [copied, setCopied] = useState(false);
    const [avatar, setAvatar] = useState("");

    useEffect(() => {
         let repositoriesName = localStorage.getItem("repositoriesName");
         let repositoriesUser = localStorage.getItem("repositoriesUser");
         let repositoryAvatar = localStorage.getItem("repositoryAvatar");
         if (repositoriesName !== null) {
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            setUsers(repositoriesUser);
            setAvatar(repositoryAvatar);
            // localStorage.clear();
         } else {
            history.push("/");
         }

    }, []);

    return (
        <S.Body>
            <S.Container>
                <S.Title>Repositórios de {users}</S.Title>
                <S.Avatar src={avatar}></S.Avatar>
                <S.SubTitle>{repositories.length} repositórios encontrados, yay!</S.SubTitle>
                <div>
                    <S.List>
                        { repositories.map(repository => {
                            return (
                                <S.ListItem><span style={{fontWeight: 700}}>{repository}</span>
                                    <S.LineBreak>
                                        <S.LinkRepo href={`https://github.com/${users}/${repository}`} target="_blank" rel="noreferrer noopener"><GitHubIcon style={{fontSize: 16, verticalAlign: "top"}}/> Acesse o repositório
                                        </S.LinkRepo>
                                    </S.LineBreak>
                                    <S.LineBreak>
                                        <S.LinkRepo onClick={() => {
                                            const el = document.createElement("input");
                                            el.value = `https://github.com/${users}/${repository}.git`;
                                            document.body.appendChild(el);
                                            el.select();
                                            document.execCommand("copy");
                                            document.body.removeChild(el);
                                            setCopied(true)
                                            alert("copiado para o clipboard");
                                        }}><FileCopyIcon style={{fontSize: 16, verticalAlign: "top"}}/> Clone o repositório</S.LinkRepo>
                                    </S.LineBreak>
                                </S.ListItem>
                            )
                        })}
                    </S.List>
                </div>
                
                <S.LinkHome to="/">Voltar</S.LinkHome>
            </S.Container>
            
            <S.Footer><p >Desenvolvido por <S.LinkGit href="https://github.com/leticiafontoura" target="_blank">Letícia Fontoura <GitHubIcon style={{verticalAlign: "sub"}}/></S.LinkGit></p></S.Footer>
            </S.Body>

    )
}