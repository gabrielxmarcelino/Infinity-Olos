import styled from "styled-components";

export const DialerPhone = styled.div`
    width: 175px;
    height: 250px;
    position: absolute;
    left: -18px;
    border: 1px;
    border-color: red;
    top: -270px;
    border-radius: 8px;
    background: aliceblue;

    .input {
        width: 150px;
        border-radius: 10px;
        height: 30px;
        border:solid 1px;
        border-color: #E6E7E8;
    }
`

export const Field = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 10px;
`
export const FieldDialer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    top: 25px;
`
export const FieldDialer0 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    top: 25px;
`
export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    top: 50px;
`