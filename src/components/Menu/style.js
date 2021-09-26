import styled from "styled-components";


export const Container = styled.div`
    
    background:transparent;
    display: flex;
    flex-direction:row;
    justify-content: flex-start;
    align-items:center;
    transition:all .2s ease;
    position:relative;

       

    &:hover{
        
    }
    .linksConteiner{
        text-decoration:none;
        color:;
        margin:15px;
        font-family:Arial;
        font-weight:500;
        text-transform:uppercase;
        color:#fff; 

        &:hover{
            color:#57606f;
        }

        @media (max-width: 820px) {
            display:none;
         }
    }

    .linkActive{
        color:#ffa502;
    }





    .menuResponsive{
    width:100%;
    height:100vh;
    background:#fff;
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items:center;
    transition:all .2s ease;
    position:fixed;
    left:0px;
    top:0px;
    transform:translateX(-110%);

    

    @media (min-width: 820px) {
        display:none;
     }


    .linksResponsive{
        display:block;
        width:100%;
        padding:8px 0px;
        text-align:center;
        text-decoration:none;
        color:#000;
        font-family:'titulo-2';
        font-size:1.5rem;
    }

    

        
    }
    .getMenu{
        width:100%;
        height:100vh;
        background:#fff;
        display: flex;
        flex-direction:column;
        justify-content: flex-start;
        align-items:center;
        transition:all .2s ease;
        position:fixed;
        left:0px;
        top:0px;
        transform:translateX(0%);

        .linksResponsive{
            display:block;
            width:100%;
            padding:8px 0px;
            text-align:center;
            text-decoration:none;
            color:#000;
            font-family:'titulo-2';
            font-size:1.5rem;

            &:hover{
                color:#ffa502;
            }
        }
        .linkActive{
            color:#ffa502;
        }
        @media (min-width: 820px) {
            display:none;
         }
    }

    @media (max-width: 820px) {
        width:50px;
     }


`;


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
    top:10%;
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

    @media (min-width: 820px) {
        display:none;
     }

`;