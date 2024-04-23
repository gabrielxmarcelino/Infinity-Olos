import styled from "styled-components";

export const Geral = styled.div`
    background-color: blue;
`

export const Container = styled.div`
width: 700px;
height: auto; /* Alterado para 'auto' para permitir que a altura se ajuste conforme o conteúdo */
padding: 30px 20px;
background-color: white;
border-radius: 10px;
box-sizing: border-box;
z-index: 999;
text-align: center;
box-shadow: rgb(0 0 0 / 35%) 0px 5px 5px;
transform: translate(-50%, -50%) scale(0.5);
transition: opacity 300ms ease-in-out, top 1000ms ease-in-out, transform 1000ms ease-in-out;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
display: flex;
flex-direction: column;
justify-content: space-between;
`;

export const Logo = styled.div`
width: 100px;
`

export const IniciaLogin = styled.div`
    display: flex;
`
export const Campos = styled.div`
display: flex;
position: relative;
box-sizing: inherit;
justify-content: flex-end;
margin: 5px;
`
export const CampoPreencher = styled.div`
height: 25px;
width: 300px;
`

export const NomeCampo = styled.div`
    background: white;
    display: flex;
    justify-content: flex-start;
`