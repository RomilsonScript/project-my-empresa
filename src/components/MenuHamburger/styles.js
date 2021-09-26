import styled from "styled-components";

export const Conteiner = styled.div`

    width:40px;
    height:40px;
    background:transparent;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    position:fixed;
    right:5%;
    cursor:pointer;
    z-index:999;

    div{
        width:90%;
        height:2px;
        background:#fff;
        transition:all .2s ease;
        position:relative;
        margin:6px 0px;
    }

    .menuActiveTop{
        transform:rotate(45deg);
        position:absolute;
        background:#000;
    }
    .menuInativeTop{
        transform:rotate(0deg);
    }

    .menuCenterActive{
        display:none;
    }
    .menuCenterInative{
        display:block;
    }

    .menuActivebottom{
        transform:rotate(-45deg);
        background:#000;
    }
    .menuInativeBottom{
        transform:rotate(0deg);
    }

`;