import React, { useState, useEffect } from 'react';
import * as S from './style';


import Menu from '../../components/Menu';
import Inputs from '../../components/Inputs'

import CardServicos from '../../components/Sevicos';

import services from '../../utils/servicos.js';

import img04 from '../../assets/orientacao.jpg';
import img05 from '../../assets/SD_LOGO2.png';
import Bpa from '../../assets/BPA_LOGO.png';
import cnes from '../../assets/CNES_LOGO.png';
import sia from '../../assets/SIA_LOGO.png';
import fpo from '../../assets/FPO_LOGO.png';
import esus from '../../assets/ESUS_LOGO.png';

//LOGOS CLIENTES
import logo_lencois_ba from '../../assets/logo_lencois_ba.jpg';
import logo_nova_redencao_ba from '../../assets/logo_nova_redencao_ba.jpg';

function Home() {

  const [service, setService] = useState(false);

  const [nome, setNome] = useState("romilson");
	const [email, setEmai] = useState("hotmail");
  const [tel, setTel] = useState("75");
	const [descricao, setDescricao] = useState("ete");

  //SETA TRUE SE HOUVER CLIENTES
  const [cliente, setCliente] = useState(true);
  
  useEffect(() => {
    //abilita();
  },[service])

  //ENVIAR EMAIL

  //--------------

  return (
    <S.Container>
      
      <S.header>
        <div className="topContato"><p>(75) 99940-5011</p></div>

        <div className="headerNav">
          <div>
          <img src={img05} alt=""/>
          </div>
          <div>
            <Menu/>
          </div>
          
        </div>

        <div className="sectioInforHeader">
          <h1>
            Soluções personalizadas de alto impacto para o seu negócio
          </h1>
          <p>
          t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it
          </p>
          <input type="button" className="btn_saibaMais" value="Saiba mais"/>
        </div>
      
      </S.header>

    <S.meta>
      <img src={img04} alt=""/>
      <div>
        <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h1>
        <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type 
        and scrambled it to make a type specimen book. It has survived not only five centuries
        </p>
      </div>
    </S.meta>
    

    <S.ContentSevicos>
      <div className="titleSectionConteiner">
        <h3 className="titleSection">Serviços</h3>
      </div>
    

      <CardServicos icon={cnes} title="CNES" 
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less" 
      colorBk="#2f3542"
      getServices={()=> setService("2")}
      />

      <CardServicos icon={Bpa} title="BPA" 
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less" 
      colorBk="#57606f"
      getServices={()=> setService("1")}
      />
      
      <CardServicos icon={esus} title="ESUS" 
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less" 
      colorBk="#747d8c"
      getServices={()=> setService("5")}
      />

      <CardServicos icon={fpo} title="FPO" 
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less" 
      colorBk="#a4b0be"
      getServices={()=> setService("3")}
      />

      <CardServicos icon={sia} title="SIA" 
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less" 
      colorBk="#ced6e0"
      getServices={()=> setService("4")}
      />
    </S.ContentSevicos>

    {
      cliente &&
      <S.ContentClientes>
        <div className="titleSectionConteiner">
          <h3 className="titleSection">Clientes</h3>
        </div>
        <img src={logo_lencois_ba} alt="PREFEITURA MUNICIPAL DE LENÇÓIS-BA"/>
        <img src={logo_nova_redencao_ba} alt="PREFEITURA MUNICIPAL DE NOVA REDENÇÃO-BA"/>
      </S.ContentClientes>
    }

    <S.ConteinerContato>
        <div className="titleSectionConteiner">
          <h3 className="titleSection">Contato</h3>
        </div>

        <div className="sectionContato">
          <h3>Endereço</h3>
          <p>Rua vai quem quer, nº 058</p>
          <p>Lençóis Bahia</p>

          <h3 style={{marginTop:40}}>Telefone</h3>
          <p>(75) 99940-5011</p>
        </div>

        <form className="sectionContato">
          <Inputs wid={100} title="Nome" type="text" getValor={setNome}/>
          <Inputs wid={100} title="Email" type="text" getValor={setEmai}/>
          <Inputs wid={100} title="Telefone" type="text" getValor={setTel}/>
          <Inputs wid={100} title="descrição" type="text" areaInput={true} getValor={setDescricao}/>
        </form>

    </S.ConteinerContato>


      <S.ContainerInforServices style={service !== false ? {display:'flex'}:{display:'none'}}>

        {
          services.filter(item => item.id === service)
          .map(item =>  (
            <div className="contentInfor">
              <img src={item.icone} alt=""/>
              <h3>{item.titulo}</h3>
              <h2>{item.sigla}</h2>
              <p>{item.descricao1}</p>
              <p>{item.descricao2}</p>

              <input type="button" onClick={()=> setService(false)} value="Close" className="closeModal"/>
                    
            </div>
            
          ))
        }
        
    </S.ContainerInforServices>
    
     

    </S.Container>
  );
}

export default Home;
