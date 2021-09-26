import React, { useState } from 'react';
import * as S from './styles';

export default function MenuHamburger(){

    const [menu, setMenu] = useState(false);

    function setMenuUser(){
       menu === false ? setMenu(true) : setMenu(false)
    }


    return (
        <S.Conteiner onClick={() => setMenuUser()}>
            <div className={menu ? 'menuActiveTop' : 'menuInativeTop'}></div>
            <div className={menu ? 'menuCenterActive' : 'menuCenterInative'}></div>
            <div className={menu ? 'menuActivebottom' : 'menuInativeBottom'}></div>
        </S.Conteiner>
    );
}