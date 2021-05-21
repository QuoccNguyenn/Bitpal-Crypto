import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import styled from 'styled-components';
import HeaderTitle from '../HeaderTiltle/HeaderTitle';
import Parallaxie from '../Parallax/Parallax';

function Partner() {

    const state = {
        images:[
            {
                src: '../../images/h1-client-img-1.png',
                srcHover: '../../images/h1-client-hover-img-1.png'
            },
            {
                src: '../../images/h1-client-img-2.png',
                srcHover: '../../images/h1-client-hover-img-2.png'
            },
            {
                src: '../../images/h1-client-img-3.png',
                srcHover: '../../images/h1-client-hover-img-3.png'
            },
            {
                src: '../../images/h1-client-img-4.png',
                srcHover: '../../images/h1-client-hover-img-4.png'
            },
            {
                src: '../../images/h1-client-img-5.png',
                srcHover: '../../images/h1-client-hover-img-5.png'
            },
            {
                src: '../../images/h1-client-img-6.png',
                srcHover: '../../images/h1-client-hover-img-6.png'
            },
            {
                src: '../../images/h1-client-img-7.png',
                srcHover: '../../images/h1-client-hover-img-7.png'
            },
            {
                src: '../../images/h1-client-img-8.png',
                srcHover: '../../images/h1-client-hover-img-8.png'
            },
            {
                src: '../../images/h1-client-img-9.png',
                srcHover: '../../images/h1-client-hover-img-9.png'
            },
            {
                src: '../../images/h1-client-img-10.png',
                srcHover: '../../images/h1-client-hover-img-10.png'
            },
            {
                src: '../../images/h1-client-img-11.png',
                srcHover: '../../images/h1-client-hover-img-11.png'
            },
            {
                src: '../../images/h1-client-img-12.png',
                srcHover: '../../images/h1-client-hover-img-12.png'
            }
        ]
    }

    return(
        <PartnerSection>
            <PartnerContainer>

                <BodyContainer>
                    <HeaderTitle header='Strategic Partners'/>

                    <BodyBrand>
                        <BrandContainer>
                        {state.images.map(item => (
                            <Brand>
                                <Images className='img' src = {item.src}/>
                                <ImagesHover className='img-hover' src = {item.srcHover}/>
                            </Brand>
                        ))}
                            
                        </BrandContainer>
                    </BodyBrand>

                </BodyContainer>    
            </PartnerContainer>
        </PartnerSection>
    );
}

const PartnerSection = styled.section`
    overflow: hidden;
    clear: both;
    
    background-image: url(../../images/h1-parallax-img-3.jpeg);
    background-position: center;
    background-size: cover;
    background-attachment: fixed;

    position: relative;

    @media screen and (max-width: 1024px){
        max-height: 1024px;
    }
    @media screen and (max-width: 768px){
        max-height: 1110px;
    }
`
const PartnerContainer = styled.div`

    @media screen and (max-width: 1024px){
        img{
            max-width: 184%;
            margin-left: -20%;
        }
    }

    @media screen and (max-width: 768px){
        img{
            max-width: 384%;
            margin-left: -100%;
        }
    }

    @media screen and (max-width:415px){
        img{
            max-width: 460%;
            margin-left: -200%;
        }
    }
`

const BodyContainer = styled.div`
    padding-top: 5%;

    @media screen and (max-width: 1024px){
        padding-top: 1%;
    }

    @media screen and (max-width: 768px){
        padding-top: 5%;
    }
`

const BodyBrand = styled.div`
    padding: 0 6%;
`

const BrandContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
`

const Brand = styled.div`
        
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover{
        .img{
            display: none;
        }
        .img-hover{
            display: block;
        }
    }

    @media screen and (max-width: 1024px){
        width: 33%;
    }

    @media screen and (max-width: 768px){
        width: 50%;
        height: 135px;
    }

    @media screen and (max-width: 415px){
        height: 135px;
    }

    @media screen and (max-width: 375px){
        height: 120px;
    }
`

const Images = styled.img`
    display: block;
    margin: 0!important;
    @media screen and (max-width: 768px){
        height: 70%!important;
    }
`

const ImagesHover = styled.img`
    display: none;
    margin: 0!important;
    @media screen and (max-width: 768px){
        height: 70%!important;
    }
`

export default Partner;