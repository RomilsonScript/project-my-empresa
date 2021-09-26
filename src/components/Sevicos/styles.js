import styled from 'styled-components';

export const Card = styled.div`
    width:170px;
    height:430px;
    margin:0px;
    display:flex;
   flex-direction: column;
   align-content: center;
   justify-content: space-around;
   align-items:center;
   color:#fff;
   margin-bottom:15px;
   padding:15px;

    img{
        width:110px;
        height:110px;
        border-radius:50%;
        border:6px dashed #fff;
    }

    h2{
        font-family:'titulo-3';
        font-size:2.2rem;
        margin:0px;

    }
    p{
        text-align:center;
        font-family:'titulo-3';
        margin:0px;
    }
    button{
        background:#ff7f50;
        border:none;
        padding:10px;
        width:80%;
        font-family:Arial;
        color:#fff;
        font-size:1.2rem;
        cursor:pointer;

        &:hover{
            opacity:0.5;
        }
    }

    @media (max-width: 420px) {
        width:90%;
     }
`;