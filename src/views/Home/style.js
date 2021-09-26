import styled from "styled-components";

import ImgHeader from '../../assets/imgHeader.jpeg';
import ImgClienteBg from '../../assets/bgClientes.jpg';



export const Container = styled.div`
   width:100%;

   .titleSectionConteiner{
      width:100%;
      display:flex;
      flex-direction: row;
      justify-content:center;
      margin-bottom:40px;
   }
   .titleSection{
      font-family:'titulo-2';
      font-size:2.5rem;
      border-bottom:6px solid #ffa502;
      padding-bottom:5px;
      text-transform:uppercase;
      margin:0px;
      color:#1e90ff;
   }

`;

export const header = styled.div`

   width: 100%;
   height: 85vh;
   background:url('${ImgHeader}') no-repeat;
   background-attachment: fixed;
   background-size:100% 90%;
   margin: 0px;
   position: relative;
   display: flex;
   flex-wrap: wrap;
   align-items: space-around;
   flex-direction: column;
   justify-content: flex-start;
   align-content: center;

   .topContato{
      width:100%;
      height:40px;
      background:rgba(0,0,0,.5);
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color:#ffa502;
      font-family:titulo-3;

      p{
         margin-right:5%;
         width:130px;
      }
   }

   .headerNav{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      flex-direction: row;
      justify-content: space-around;
      align-content: center;
      width:100%;
      background:transparent;
      margin-top:10px;

      .div{
         width:40%;
         display: flex;
         flex-wrap: wrap;
         align-items: center;
         flex-direction: row;
         justify-content: center;
         align-content: center;
         height:80px;
         background:transparent;

         
      }
      img{
         width:180px;
         height:auto;
      }
   }


   .sectioInforHeader{
      width:400px;
      color:#fff;
      margin-left:13%;

      h1{
         font-family:titulo-3;
         font-size:2.5em;

         @media (max-width: 480px) {
            font-size:2rem;
            width:80%;
         }
      }
      p{
         font-family:Arial;
         font-size:.8em;
         width:100%;

         @media (max-width: 480px) {
            width:80%;
         }
      }
      @media (max-width: 480px) {
         width:90%;
         margin-left:0%;
         padding:10px;
      }
   }
   .btn_saibaMais{
      background:#ffa502;
      padding:15px;
      width:150px;
      border:none;
      color:#fff;
      font-size:1.2em;
   }

   @media (max-width: 800px) {
      background:url('${ImgHeader}') no-repeat;
      background-size:100% 90%;
    }
    @media (max-width: 480px) {
      height:100vh;
    }
   
`;


export const meta = styled.div`
width:100%;
height:500px;
display:flex;
justify-content:center;
margin-top:50px;

div{
   width:30%;
   height:100%;
   background:transparent;
   display:flex;
   justify-content:center;
   flex-direction: column;
   align-content: center;
   justify-content: center;
   margin-left:25px;
   position:relative;




   h1{
      width:100%;
      background:transparent;
      font-family:'titulo-2';
      

      @media (max-width: 820px) {
         width:70%;
         margin-top:80px;
      }

   }

   p{
      width:100%;
   }

   
   &:before{
      content:"";
      width:20%;
      height:20%;
      border-top:8px solid #ff7f50;
      border-right:8px solid #ff7f50;
      position:absolute;
      right:-70px;
      top:50px;

      @media (max-width: 820px) {
         width:40%;
      }
      @media (max-width: 620px) {
         width:40%;
         right:0px;
      }
   }
   @media (max-width: 820px) {
      width:70%;
      margin-left:0px;
      margin:0 auto;
   }
   

}

img{
   width:36%;
   height:500px;

   @media (max-width: 820px) {
       width:90%;
       height:auto;
       margin:0 auto;
    }
}

@media (max-width: 820px) {
   display:flex;
   flex-direction: column;
   justify-content:center;
   align-content: center;
   justify-content: center;
   height:auto;
 }

`;



export const ContentSevicos = styled.div`
   display:flex;
   flex-direction: row;
   justify-content:center;
   align-content: center;
   justify-content: center;
   align-items:center;
   flex-wrap:wrap;
   width:100%;
   margin-top:20px;

   

`;

export const ContentClientes = styled.div`
   width:100%;
   display:flex;
   flex-direction: row;
   justify-content:space-around;
   align-content: flex-start;
   align-items:center;
   flex-wrap:wrap;
   height:500px;
   margin:50px 0px;
   background:url('${ImgClienteBg}') no-repeat;
   background-size:cover;

   img{
      width:110px;
      height:110px;
      margin:50px 20PX;
      box-shadow:0 0 20px #000;
      border-radius:10px;
   }
`;

export const ConteinerContato = styled.div`
   width:100%;
   display:flex;
   flex-direction: row;
   justify-content:center;
   align-content: flex-start;
   align-items:center;
   flex-wrap:wrap;
   height:500px;
   margin:50px 0px;


   .sectionContato{
      width:350px;
      height:100%;
      display:flex;
      flex-direction: row;
      justify-content:center;
      align-content: flex-start;
      align-items:center;
      flex-wrap:wrap;
      background:transparent;

      h3{
         width:100%;
         display:block;
         text-align:center;
         font-family:'titulo-2';
         color:#ff7f50;
         margin:0px;
      }
      p{
         width:100%;
         display:block;
         text-align:center;
         font-family:'titulo-2';
         color:#2f3542;
         margin:0px;
      }
      @media (max-width: 820px) {
         width:90%;
       }
      
   }

   @media (max-width: 820px) {
      display:flex;
      flex-direction: column;
      justify-content:center;
      align-content: center;
      justify-content: center;
      flex-wrap:wrap;
      width:100%;
      height:auto;
    }
`;

export const ContainerInforServices = styled.div`
   display:flex;
   flex-direction: column;
   justify-content:center;
   align-content: center;
   flex-wrap:wrap;
   width:100%;
   height:100vh;
   position:fixed;
   background:rgba(0,0,0,.5);
   z-index:999;
   top:0px;
   left:0px;


   .contentInfor{
      width:600px;
      height:600px;
      background:#fff;
      position:relative;
      display:flex;
      flex-direction: column;
      justify-content:flex-start;
      align-content: center;
      align-items:center;
      flex-wrap:nowrap;
      overflow:auto;
      padding-bottom:50px;

      img{
         width:130px;
         height:130px;
      }

      h3{
         width:90%;
         text-align:center;
         font-family:'titulo-3';
         margin:0px;
         margin-bottom:10px;
      }

      h2{
         width:90%;
         text-align:center;
         font-family:'titulo-3';
         margin:0px;
         margin-bottom:10px;
      }

      p{
         width:90%;
         text-align:justify;
         font-family:'titulo-2';
         text-indent:20px;
         margin:0px;
         margin-bottom:10px;
      }

       .closeModal{
          padding:10px;
          width:60px;
          background:#ccc;
          border:none;
          border-radius:5px;
          position:absolute;
          bottom:10px;
          right:10px;
          cursor:pointer;

          @media (max-width: 620px) {
            position:fixed;
            bottom:2%;
            right:8%;
          }

       }

       @media (max-width: 620px) {
         width:90%;
         height:90vh;
       }
   }

`;

export const Footer = styled.div`

`;