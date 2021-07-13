import styled from "styled-components";
import { Link } from "react-router-dom";

export const Body = styled.div`
    width: 100%;
    height: 100%;
`

export const Container = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 4rem auto;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: 'Inconsolata', monospace;
    color: #efeeb4;
    margin-bottom: 2rem;
`;

export const SubTitle = styled.h3`
    text-align: center;
    font-family: 'Inconsolata', monospace;
    font-weight: 200;
    color: #efeeb4;
    margin-bottom: 2rem;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    font-family: sans-serif;
`;

export const ListItem = styled.li`
    height: auto;
    margin: .5rem 0;
    border: 1px solid #efeeb4;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    background-color: transparent;
    color: #efeeb4;
    padding: .5rem;
    transition: 0.2s;
    border-radius: 10px 10px 0px 0;

    &:hover {
        background-color: rgba(239,238,180, 0.4);
        color: #fff;
        border-radius: 10px 10px 0px 0;
    }
`

export const LineBreak = styled.p`
    margin: 10px 0px 10px 0;
`

export const LinkRepo = styled.a`
height: auto;
display: block;
cursor: pointer;
width: 200px;
border-radius: 15px;
margin: .5rem 0;
border: none;
padding: 0.2rem 1rem;
background-color: #309975;
font-family: 'Inconsolata', monospace;
color: #fff;
text-decoration: none;
transition: 0.2s;
&:focus,
&:active {
    outline: none;
    box-shadow: none;
}
&:hover {
    background-color: #57bc9a;
}
`

export const LinkHome = styled(Link)`
display: block;
width: 3rem;
border-radius: 15px;
margin: 1rem auto 3rem auto;
border: none;
padding: 0.5rem 1rem;
background-color: #309975;
font-family: 'Inconsolata', monospace;
color: #fff;
text-decoration: none;
&:focus,
&:active {
    outline: none;
    box-shadow: none;
}
`

export const Avatar = styled.img`
    border-radius: 50%;
    width: 200px;
    margin: 0 auto 2rem auto;
    display: block;
`

export const Footer = styled.footer`
    height: 50px;
    background-color: black;
    width: 100%;
    
    bottom: 0;
    color: white;
    font-family: 'Inconsolata', monospace;
    text-align: center;
    padding: 10px 0;
`

export const LinkGit = styled.a`
    text-decoration: none;
    font-family: 'Inconsolata', monospace;
    &:visited {
        color: #dad873;
    }
`