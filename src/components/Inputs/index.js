import React from 'react';
import * as S from './style';


function Imputs({ wid, title, type, place, areaInput, getValor, isRequeredItem, classInput, texto}) {

  //const [valor, setValor] = useState();


  return (
    <S.Container larg={wid}>
     <label>{title ? title : 'Titulo'}{isRequeredItem && <span>&#10033;</span>}</label>
     
     {
       areaInput ?
     <textarea 
     onChange={e => getValor(e.target.value)} value={texto}
     type={type ? type : 'text'} 
     placeholder={place ? place : ' '}
     />
     :
     <input 
     onChange={e => getValor(e.target.value)} value={texto}
     type={type ? type : 'text'} 
     placeholder={place ? place : ' '}
      className={classInput ? classInput : ''}
     />
    }
    
    </S.Container>
  );
}

export default Imputs;
