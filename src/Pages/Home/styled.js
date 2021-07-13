import styled from "styled-components";

export const Input = styled.input`
    border: 1px solid #efeeb4;
    text-align: center;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    background-color: transparent;
    color: #efeeb4;
    height: 2rem;
    padding: 0 .5rem;
    font-family: 'Inconsolata', monospace;
    &::placeholder {
        color: rgba(239,238,180, 0.6);
    };

    &:-internal-autofill-selected {
        background-color: transparent !important;
        color: #efeeb4 !important; 
        background-image: none !important;
    };
    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

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

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export const Content = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


export const Button = styled.button`
    border-radius: 15px;
    margin: 1rem;
    border: none;
    padding: 0.5rem 1rem;
    background-color: #309975;
    font-family: 'Inconsolata', monospace;
    color: #fff;
    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`

export const ErrorMessage = styled.span`
    display: block;
    font-size: 0.75rem;
    color: #995230;
    margin-top: 1rem;
    font-family: 'Inconsolata', monospace;
    text-align: center;
    padding: 5px;
    background-color: rgb(255, 255, 255);
`

export const Strong = styled.span`
    font-weight: 700;
`

export const Footer = styled.footer`
    height: 50px;
    background-color: black;
    width: 100%;
    position: absolute;
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