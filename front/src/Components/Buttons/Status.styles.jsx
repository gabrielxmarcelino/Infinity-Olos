import styled from "styled-components"

export const ChangeStatus = styled.div`
    width: 175px;
    height: 350px;
    position: absolute;
    left: -18px;
    border: 1px;
    border-color: red;
    top: -370px;
    border-radius: 8px;
    background: aliceblue;
`

export const Pauses = styled.div`
  display: flex;
  top: 10px;
  position: relative;
  left: 20px;
  flex-wrap: wrap; /* Permite que os botões quebrem para a próxima linha se não houver espaço suficiente */
`;

export const PauseButton = styled.input`
  margin-right: 100px; /* Espaçamento entre os botões */
  margin-bottom: 10px; /* Espaçamento entre as linhas */
`;