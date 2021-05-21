import React, { useState } from 'react'
import styled from 'styled-components'
import NavBar from './components/nav/nav';
import Home from './view/Home/Home';
import Marquee from "react-fast-marquee";
import Nav_Mobi from './components/nav_mobile/nav_mobi';
import Slide_T from './components/slide_top/slide_top';

const App = () => {

  const[navbar,setNavbar] = useState(false);

  const changedBackground=() =>{
    if (window.scrollY >= 50){

      setNavbar(true);
    }else{
        setNavbar(false);
    }
  }

  window.addEventListener('scroll',changedBackground)

  return(
    <Box_app>
      <Boxline>
            <div className="item-line"></div>
            <div className="item-line"></div>
            <div className="item-line"></div>
            <div className="item-line"></div>
        </Boxline>
          <Marquee gradientColor="[]" pauseOnHover="true" className="slide_top">
            <Slide_T></Slide_T>
        </Marquee>
          <NavBar changedBackground={navbar}></NavBar>
          <Nav_Mobi></Nav_Mobi>
          <Home></Home>
    </Box_app>
  ) ;
}

const Box_app = styled.div`

  width:100%;
  position: relative;
  overflow: hidden;
  background:#171819;
  .container{
    max-width:1469px;
    @media screen and (max-width:1550px){
      max-width:1140px;
    }
  }

  

  ::selection {
    background: #aceb2f;
    color: #fff;
}

  .slide_top{
    width:100%;
    height:44px;
    background:black;
  }
`
const  Boxline = styled.div`
    position:absolute;
    top:0;
    float:left;
    width:100%;
    height:100%;
    z-index:0;
    
    .item-line{
        width:25%;
        height:100%;
        position:relative;
        float:left;
        ::before{
          content:"";
          width:1px;
          height:100%;
          background:rgba(253,252,248,.15); 
          position:absolute;
          top:0;
          left:0;
        }
        :last-child::after{
          content:"";
          width:1px;
          height:100%;
          background:rgba(253,252,248,.15); 
          position:absolute;
          top:0;
          right:0;
        }
    }
` 

export default App;
