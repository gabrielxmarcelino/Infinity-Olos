import styled from "styled-components";


export const Rodape = styled.div`
    background-color: white;
    width: 100%;
    height: 40px;
    display: flex;
    position: fixed;
    bottom: 0;
    border-radius: 5px;

    @media only screen and (min-width: 1366px) {
        width: 1366px; /* Tamanho para HD */
    }

    @media only screen and (min-width: 1920px) {
        width: 1920px; /* Tamanho para Full HD */
    }
`

export const PrinciPalPanel = styled.div`
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    width: 100%;
    height: 800px;
    border-radius: 10px;

    @media only screen and (min-width: 1366px) {
        width: 1300px; /* Tamanho para HD */
        height: 850px;
    }

    @media only screen and (min-width: 1920px) {
        width: 1800px; /* Tamanho para Full HD */
        height: 800px;
    }
    @media only screen and (min-width: 2560px) {
        width: 2500px; /* Tamanho para UltraWide */
        height: 850px;
    }
`