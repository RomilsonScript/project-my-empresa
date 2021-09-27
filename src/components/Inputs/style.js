import styled from "styled-components";


export const Container = styled.div`
    background: transparent;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    flex-wrap:wrap;
    align-items:center;
    transition:all .2s ease;
    overflow:hidden;
    position:relative;
    padding:0px;
    margin:9px 0px;
    width: 100%;

    ${props => props.larg && `width:${props.larg}%`};

    label{
        width:80%;
        font-family:Arial;
        font-size:0.9em;
        background: transparente;
        font-weight:600;
        color:#747d8c;
        margin-bottom:6px;

        span{
            color:red;
            margin-left:10px;
        }
    }
      
    input{
        width:100%;
        font-size:1em;
        font-family:Arial;
        outline:none;
        border:none;
        padding:8px 0px;
        border:1px solid #ccc;
        margin:0px;
        background:transparent;
        padding-left:5px;
        color:#2f3542;
        box-shadow:0 0 2px rgba(0,0,0,.5)inset;
        border-radius: 3px;

        &:focus{
            border:1px solid #2ed573;
        }
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

    @media (max-width: 880px) {
            width:95%;
    }
    

`;