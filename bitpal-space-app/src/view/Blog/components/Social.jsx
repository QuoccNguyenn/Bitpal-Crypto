import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom'



const Social = () => {

  return (
            <BoxSocial>
                <Thumtree>Join Group:</Thumtree>
                <LinnkSocial target="_blank" href="https://facebook.com" title="Fanpage Facebook">
                  <img src="./fbb.svg" alt=""/>
                </LinnkSocial>
                <LinnkSocial target="_blank" href="https://facebook.com" title="Telegram">
                  <img src="./lee.svg" alt=""/>
                </LinnkSocial>
                <LinnkSocial target="_blank" href="https://facebook.com" title="witter">
                  <img src="./inn.svg" alt=""/>
                </LinnkSocial>
                <LinnkSocial target="_blank" href="https://facebook.com" title="Reddit">
                  <img src="./ogg.svg" alt=""/>
                </LinnkSocial>
                <LinnkSocial target="_blank" href="https://facebook.com" title="LinkedInT">
                  <img src="./vera.svg" alt=""/>
                </LinnkSocial>
            </BoxSocial>
    
  );
}

const BoxSocial = styled.div`
  position: relative;
  display:flex;
  margin-top:5px;

`
const Thumtree = styled.p`
  position: relative;
  display:flex;
  color: #6b6969;
  font-size:16px;
  margin-top: 5px;
  margin-right: 5px;
`


const LinnkSocial = styled.a`
  display: block;
  max-width: 22px;
  overflow: hidden;
  width: 100%;
  outline: none;
  filter: grayscale(1);
  transition: ease-in-out .5s all;

    img{
      width: 100%;
      height: 22px;
    }


  :hover{
    filter: unset;
  }
`






export default Social