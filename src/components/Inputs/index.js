import React, {useState} from 'react';
import * as S from './style';


function Imputs({ wid, title, type, place, areaInput, getValor}) {

  const [valor, setValor] = useState();

  return (
    <S.Container style={wid ? {width:`${wid}%`} : {width:'100%'}}>
     <label>{title ? title : 'Titulo'}</label>
     {
       areaInput ?
     <textarea 
     onChange={e => setValor(e.target.value) & getValor(e.target.value)} value={valor}
     type={type ? type : 'text'} 
     placeholder={place ? place : ' '}
     />
     :
     <input 
     onChange={e => setValor(e.target.value) & getValor(e.target.value)} value={valor}
     type={type ? type : 'text'} 
     placeholder={place ? place : ' '}
     />
    }
    </S.Container>
  );
}

export default Imputs;
