import styled from "styled-components";


export const Container = styled.div`
    background: transparente;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    flex-wrap:wrap;
    align-items:center;
    transition:all .2s ease;
    overflow:hidden;
    position:relative;
    padding:0px;
    margin:5px 0px;

    label{
        width:100%;
        font-family:Arial;
        font-size:0.9em;
        background: transparente;
        font-weight:600;
        color:#747d8c;
    }
      
    input{
        width:100%;
        font-size:1em;
        font-family:Arial;
        outline:none;
        border:none;
        padding:5px 0px;
        border-bottom:1px solid #ccc;
        margin:0px;
        background:transparent;
    }
    textarea{
        width:100%;
        height:100px;
        font-size:1em;
        font-family:Arial;
        outline:none;
        border:none;
        padding:5px 0px;
        border-bottom:1px solid #ccc;
        margin:0px;
        background:transparent;
    }

`;