import React, { useState, useEffect } from 'react';
import * as S from './style';


import { Link } from 'react-router-dom';

function Menu() {

  const [menu, setMenu] = useState(false);

  function setMenuUser(){
    menu === false ? setMenu(true) : setMenu(false)
  }

  useEffect(() => {

  }, [])

  return (
    <S.Container>
      
      <Link to="/" className="linksConteiner linkActive">Início</Link>
      <Link to="/" className="linksConteiner">A empresa</Link>
      <Link to="/" className="linksConteiner">Serviços</Link>
      <Link to="/" className="linksConteiner">Clientes</Link>
      <Link to="/" className="linksConteiner">Contato</Link>

      <div className={menu ? 'getMenu' : 'menuResponsive'}>
        <Link to="/" className="linkActive linksResponsive">Início</Link>
        <Link to="/" className="linksResponsive">A empresa</Link>
        <Link to="/" className="linksResponsive">Serviços</Link>
        <Link to="/" className="linksResponsive">Clientes</Link>
        <Link to="/" className="linksResponsive">Contato</Link>
      </div>

      <S.Conteiner onClick={() => setMenuUser()}>
            <div className={menu ? 'menuActiveTop' : 'menuInativeTop'}></div>
            <div className={menu ? 'menuCenterActive' : 'menuCenterInative'}></div>
            <div className={menu ? 'menuActivebottom' : 'menuInativeBottom'}></div>
       </S.Conteiner>

    </S.Container>
  );
}

export default Menu;
