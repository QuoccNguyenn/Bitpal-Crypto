import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import styled from 'styled-components';
import Parallaxie from '../Parallax/Parallax';

function Quality() {

    const state = {
        item:[
            {
                src:'../../images/h1-custom-icon-img-12.png',
                percent:'75%',
                ability:'Sercurity',
                delay: '0.1s'
            },
            {
                src:'../../images/h1-custom-icon-img-13.png',
                percent:'150%',
                ability:'Transparency',
                delay: '0.3s'
            },
            {
                src:'../../images/h1-custom-icon-img-14.png',
                percent:'220%',
                ability:'Professional',
                delay: '0.5s'
            }
        ]
    }

    return(
        <QualitySection>
            <ParallaxProvider>

                <QualityContainer>
                    <Parallaxie src='../../images/h1-parallax-img-1.jpeg'/>

                    <BodyContainer>

                        <ContentHolder>
                            <Content>
                                <Title>Grow Your Capital</Title>
                                <Paragraph>
                                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. 
                                    Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. 
                                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero
                                </Paragraph>
                                <ButtonOutter>
                                    WHITE PAPER
                                    <ButtonBg></ButtonBg>
                                </ButtonOutter>
                            </Content>
                        </ContentHolder>

                        <ContentHolder>
                            <ContentFlex>
                                {state.item.map(item => (
                                    <ContentItem className="wow fadeInUp" data-wow-delay={item.delay} duration="0.2s">
                                        <Image src={item.src}/>
                                        <Percent>{item.percent}</Percent>
                                        <Ability>{item.ability}</Ability>
                                    </ContentItem>
                                ))}
                                

                            </ContentFlex>
                        </ContentHolder>
                    </BodyContainer>

                </QualityContainer>
            </ParallaxProvider>
        </QualitySection>
    );
}

const QualitySection = styled.section`
    max-height: 450px;
    overflow: hidden;

    @media screen and (max-width: 1024px){
        max-height: 875px;
    }

    @media screen and (max-width: 415px){
        max-height: 1180px;
    }
`

const QualityContainer = styled.div `
    position: relative;
    @media screen and (max-width: 1024px){
        img{
            max-width: 175%;
            margin-left: -55%;
        }
    }
    @media screen and (max-width: 768px){
        img{
            max-width: 183%;
            margin-left: -70%;
        }
    }
    @media screen and (max-width: 415px){
        img{
            max-width: 400%;
            margin-left: -150%;
        }
    }
    @media screen and (max-width: 375px){
        img {
            max-width: 512%;
            margin-left: -325%;
        }
    }
`

const BodyContainer = styled.div`
    display: flex;
    flex-direction: row;

    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
    transform: translateY(-10%);

    @media screen and (max-width: 1024px){
        flex-direction: column;

        top: 14%;
    }
`

const ContentHolder = styled.div`
    width: 50%;
    @media screen and (max-width: 1024px){
        width: 100%;
    }
`

const Content = styled.div`
    padding: 0 5% 0 15%;
    
    @media screen and (max-width: 1024px){
        padding-bottom: 15%;
    }
    
    @media screen and (max-width: 415px){
        padding: 0 15% 15%;
    }
`

const Title = styled.div`
    font-size: 40px;
    font-family: sans-serif;
    color: #fff;
    font-weight: bold;

    @media screen and (max-width: 415px){
        text-align: center;
    }
`

const Paragraph = styled.div`
    font-size: 14px;
    color: #fff;
    font-weight: 100;
    font-family: sans-serif;
    padding: 3% 20px 8% 0;

    @media screen and (max-width: 1024px){
        padding: 3% 0 8% 0;
        text-align: justify;
    }

    @media screen and (max-width: 1024px){
        padding: 3% 0 8% 0;
    }

    @media screen and (max-width: 415px){
        text-align: justify;
    }
`

const ContentFlex = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
    @media screen and (max-width: 415px){
        flex-direction: column;
    }
`

const ContentItem = styled.div`  
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Image = styled.img`
    max-width: 100% !important;
    margin: 0!important;
`

const Percent = styled.div`
    color: #fff;
    font-size: 60px;
    font-family: Montserrat;
    line-height: 1;
`

const Ability = styled.div`
    font-size: 20px;
    font-family: sans-serif;
    font-weight: 500;
    color: #fff;
`
const ButtonOutter = styled.a`

    color: #fff !important;
    position: relative;
    display: block;
    overflow: hidden;

    width: 30%;
    height: auto;
    border-radius: 50px;
    margin: 1rem 0;

    font-weight: 900 !important;
    padding: 15px 25px;
    text-transform: uppercase;
    font: normal 14px/16px 'proxima-nova', sans-serif;

    text-align: center;
    text-decoration: none;
    border: 2px solid #fff; 
    z-index: 1;

    :hover {
        color: #000 !important;
    }
    :hover span {
        width: 225%;
        height: 562.5px;
    }
    @media screen and (max-width: 568px){
        width: 40%;
    }
    @media screen and (max-width: 415px){
        margin: 1rem auto;
        width: 70%;
    }
  
`

const ButtonBg = styled.span`
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-radius: 80%;
    background-color: #fff;
    transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
    transform: translate(-50%, -50%);
    z-index: -1;
`

export default Quality;