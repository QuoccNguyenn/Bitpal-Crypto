import React, { Component } from 'react';
import styled from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';
import Parallaxie from '../Parallax/Parallax';
import TeamSlick from './TeamSlick';

function Team() {
    return(
        <TeamSection>
            <ParallaxProvider>
                <TeamContainer>

                    <Parallaxie src="../../images/h1-parallax-img-2.jpeg" className="paralaxie"/>
                    <TeamSlickContainer>
                        <TeamSlick/>
                    </TeamSlickContainer>    

                </TeamContainer>
            </ParallaxProvider>
        </TeamSection>
    );
}

const TeamSection = styled.section`
    overflow: hidden;
    max-height: 450px;

    .slick-dots{
        bottom: -20%;
    }

    .slick-active span.dot {
        background: #aceb2f;
    }

    span.dot {
        width: 60%;
        height: 60%;
        display: block;
        border-radius: 50%;
        background: #fff;
    }

    .slick-prev {
        left: -40px;
    }

    .slick-prev:before, .slick-next:before {
        font-family: system-ui;
        font-size: 37px;
        color: #fff;
        opacity: 1;
    }

    .slick-prev:hover:before, .slick-next:hover:before{
        color: #aceb2f;
    }

    @media screen and (max-width: 768px){
        max-height: 500px;
    }
`

const TeamSlickContainer = styled.div`
    position:absolute;
    top:13%;
    left:0;
    right:0;
    padding: 3% 10%;
    transform: translateY(-13%);

    @media screen and (max-width: 768px){
        top: 8%;
        transform: translateY(-8%);
    }
`

const TeamContainer = styled.div`
    overflow: hidden;
    position: relative;
    
    &.parallaxie{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }
`


export default Team;
