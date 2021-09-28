import styled from "styled-components";

export const Container = styled.div`
    width: 40%;
.btn{
    padding: 10px;
    cursor: pointer;
    border-radius: 3px;
    border: none;
    transition: all .2s ease;
    font-size: 1rem;
    margin: 5px;
    width: 100%;

    background: #ccc;
    ${props => props.bgk && `background:${props.bgk}`};
    color: #000;
    ${props => props.colo && `color:${props.colo}`};

    &:hover{
        box-shadow: 0 0 8px rgba(0,0,0,.5);
        opacity: 0.7;
    }
}

`;