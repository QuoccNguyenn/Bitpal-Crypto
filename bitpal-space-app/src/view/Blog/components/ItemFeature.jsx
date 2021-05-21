import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';
import Social from './Social'



const ItemFeature = () => {


  return (
    <Col lg="12">
       <BoxFeature>
          <ContentFeature>
            <TitleFeature color="#e42916" > <a href="/">JuiceSwap Year in Review: 2020 </a></TitleFeature>
            <DrepFeature>As 2020 comes to a close, we wanted to review some key accomplishments from the past 12 months and share some insight into our roadmap for the coming year.</DrepFeature>
            <Author><i className="fa fa-user"></i> Post by: <strong title="Post by Henry"> Henry</strong></Author>
            <div className="date-blog" ><i className="fa fa-clock-o"></i> January 8, 2021 . 9 Mins Read </div>
            <ButtonFeature href="/">Read more... <span><img src="./lev.svg" alt=""/></span></ButtonFeature>
            <Social/>
          </ContentFeature>
          <Thumblog>
              <ThumFeature href="/">
                <img src="./bl2.jpg" alt="thumbnail"/>
              </ThumFeature>
          </Thumblog>
        </BoxFeature>
    </Col>
   
  );
}

const BoxFeature = styled.div`
  position: relative;
  display:flex;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  margin-bottom: 35px;
  padding: 20px;
  width: 100%;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 1px 2px 4px 0px #cecece;
  background-color: rgb(236 236 236 / 28%);
  backdrop-filter: blur(2px);
  transition: transform 0.45s cubic-bezier(0.19, 1, 0.22, 1) 0s;


 .date-blog{
  font-style: italic;
  text-transform: capitalize;
  color: #6b6969;
  margin-bottom:20px;
 }
  @media (max-width:870px){
    flex-wrap: wrap;
  }
  
`

const ContentFeature = styled.div`
  width:calc( 100% - 700px);
 
  @media (max-width:1025px){
    width:calc( 100% - 550px);
  }

  @media (max-width:870px){
    width: 100%;
    order:2;
  }
`

const ThumFeature = styled.a`
  display: block;
  overflow: hidden;
  width: 100%;
  margin-bottom: 15px;
  border-radius: 10px;
  &:hover{
   
    img{
      transform: scale(1.2);
      opacity: .5;
    }
  }

  img{
    width: 100%;
    object-fit: cover;
    transition: ease-in-out .6s all;
    
    }
  }
 
 
`

const TitleFeature = styled.h3`
  font-size:24px;
  margin-bottom: 30px;
  
  a{
    color:${(props) => props.color};
    margin-bottom: 15px;
    text-decoration: none;
    display: -webkit-box;
    max-width: 100%;
    height: 25px;
    margin: 0 auto;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover{
      opacity: .5;
    }
  }
  
`

const ButtonFeature = styled.a`
    margin-bottom: 5px;
    display: block;
    height: 40px;
    border-radius:25px;
    color:#000;
    width:100%;
    border:soild 2px #000;
    text-decoration: underline;
    transition: background 300ms ease-in-out;

    img{
      max-width:25px;
      transition: ease-in-out .5s all;
      opacity: 0;
      margin-left: -5px;
    }

    &:hover{
      color:#e42916;

      img{
        opacity:1;
        margin-left: 15px;
      }
    }


    @media ( max-width: 870px){
      height:30px;
    }
`


const Thumblog = styled.div`
  position: relative;
  max-width: 700px;
  margin-left: 20px;
  width: 100%;
  
  @media ( max-width: 1025px){
    max-width: 550px;
  }

  @media ( max-width: 870px){
    margin-left: 0;
    max-width:100%;
  }
`

const DrepFeature = styled.p`
    text-align: justify;
    display: -webkit-box;
    max-width: 100%;
    height: 86px;
    margin: 0 auto;
    font-size: 17px;
    line-height: 20px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 30px;

    @media (max-width:870px){
      margin-bottom: 10px;
    }
`

const Author = styled.p`
    display: -webkit-box;
    max-width: 100%;
    height: 24px;
    font-style: italic;
    margin: 0 auto;
    font-size: 16px;
    line-height: 20px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0;
    cursor: pointer;
    transition: ease-in-out .5s all;

    strong{
      font-style: initial;

      &:hover{
        color:#e42916;
      }
    }

    i{
      color: #888;
    }


`




export default ItemFeature
