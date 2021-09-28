import React from 'react';
import * as S from './style';


function Selects({value, bg, color, startFunction}){
    return(
        <S.Container bgk={bg} colo={color}>
           <input type="button" value={value ? value : 'Botão'} className="btn" onClick={startFunction}/>
        </S.Container>
    );
}

export default Selects;
