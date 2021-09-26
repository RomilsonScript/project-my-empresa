import React from 'react';
import * as S from './styles';

export default function CardServicos({icon, title, alt, description, colorBk, getServices}){

    //const [service, setService] = useState();

    return(
        <S.Card style={{background:`${colorBk}`}}>
            <img src={icon} alt={alt}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={getServices}>Saiba Mais</button>
        </S.Card>
    );
}