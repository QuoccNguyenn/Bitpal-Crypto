import React from 'react';
import styled from 'styled-components';

function Button(props){
    return(
        <ButtonOutter>
            {props.name}
            <ButtonBg></ButtonBg>
        </ButtonOutter>
    );
}

const ButtonOutter = styled.a`

    color: #fff !important;
    position: relative;
    display: block;
    overflow: hidden;

    width: 100%;
    height: auto;
    border-radius: 50px;
    margin: 1rem auto;

    font-weight: 600;
    padding: 15px 25px;
    text-transform: uppercase;
    font: normal 14px/16px 'proxima-nova', sans-serif;

    text-align: center;
    text-decoration: none;
    border: 2px solid #aceb2f; 
    z-index: 1;

    :hover {
        color: #fff !important;
    }
    :hover span {
        width: 225%;
        height: 562.5px;
    }
  
`

const ButtonBg = styled.span`
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-radius: 80%;
    background-color: #abec2f;
    transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
    transform: translate(-50%, -50%);
    z-index: -1;
`

export default Button;