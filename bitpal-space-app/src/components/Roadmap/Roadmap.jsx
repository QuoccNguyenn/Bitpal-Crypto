import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Button from '../Buttons/Button';

function Roadmap() {
    var settings = {
            arrow: true,
            infinite: false,
            speed: 400,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                    }
                }
            ]
        };

    const state = {
        item:[
            {
                class: 'bottom-roadmap wow fadeInUp',
                delay: '0.2s',
                styleDate: {
                    bottom: '32px'
                },
                styleLine: {
                    background: '#aceb2f'
                },
                styleLinebelow: {
                    background: '#aceb2f'
                },
                styleContent: {
                    top: '75px',
                    background:'url(../../images/h1-img-8.png)'
                },
                date: 'Q2 2017',
                title: 'Future is Now',
                content: 'Aliquam lorem ante, dapi bus in, viverra quis, feugi at a, tel lus. Phaselus vive'
            },
            {
                class: 'wow fadeInDown',
                delay: '0.4s',
                styleDate: {
                    top: '32px'
                },
                styleLine: {
                    background: '#aceb2f'
                },
                styleLinebelow: {
                    background: '#aceb2f'
                },
                styleContent: {
                    bottom: '75px',
                    background:'url(../../images/h1-img-4.png)',
                    animation: 'fadeUp'
                },
                date: 'Q3 2017',
                title: 'London Office',
                content: 'Aliquam lorem ante, dapi bus in, viverra quis, feugi at a, tel lus. Phaselus vive'
            },
            {
                class: 'bottom-roadmap wow fadeInUp',
                delay: '0.6s',
                styleDate: {
                    bottom: '32px'
                },
                styleLine: {
                    background: '#aceb2f'
                },
                styleLinebelow: {
                    background: '#aceb2f'
                },
                styleContent: {
                    top: '75px',
                    background:'url(../../images/h1-img-2.png)'
                },
                date: 'Q4 2017',
                title: 'New Startup',
                content: 'Lorem ipsum dolor sitam et consectetuer adipisci elit lorem ipsum'
            },
            {
                class:'wow fadeInUp',
                delay: '0.8s',
                styleDate: {
                    top: '32px'
                },
                styleLine: {
                    background: '#aceb2f'
                },
                styleLinebelow: {
                    background: '#888'
                },
                styleContent: {
                    bottom: '75px',
                    background:'url(../../images/h1-img-5.png)'
                },
                date: 'Q1 2018',
                title: 'Move Forward',
                content: 'Aliquam lorem ante dapi busin, viverra quis feugia ta tellus. Phaselus viverra nulla ut metus us. Aenea imperdiet quis que rut'
            },
            {
                class: 'bottom-roadmap wow fadeInUp',
                styleDate: {
                    bottom: '32px'
                },
                styleLine: {
                    background: '#888'
                },
                styleLinebelow: {
                    background: '#888'
                },
                styleContent: {
                    top: '75px',
                    background:'url(../../images/h1-img-3.png)'
                },
                date: 'Q2 2018',
                title: 'Indian Market',
                content: 'Aliquam lorem ante, dapibus in, viverra qui, feugit a, telus pha sel.'
            },
            {
                class:'wow fadeInUp',
                styleDate: {
                    top: '32px'
                },
                styleLine: {
                    background: '#888'
                },
                styleLinebelow: {
                    background: '#888'
                },
                styleContent: {
                    bottom: '75px',
                    background:'url(../../images/h1-img-6.png)'
                },
                date: 'Q1 2019',
                title: 'Future is Now',
                content: 'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phaselus viverra nulla ut metus us.'
            },
            {
                class: 'bottom-roadmap wow fadeInUp',
                styleDate: {
                    bottom: '32px'
                },
                styleLine: {
                    background: '#888'
                },
                styleLinebelow: {
                    background: '#888'
                },
                styleContent: {
                    top: '75px',
                    background:'url(../../images/h1-img-8.png)'
                },
                date: 'Q2 2019',
                title: 'Smart Invest',
                content: 'Donec quam felis ultricie snec pelente sqeu preti unquis sem nulla conseq'
            },
            {
                class: 'wow fadeInUp',
                styleDate: {
                    top: '32px'
                },
                styleLine: {
                    background: '#888'
                },
                styleLinebelow: {
                    background: '#888'
                },
                styleContent: {
                    bottom: '75px',
                    background:'url(../../images/h1-img-4.png)'
                },
                date: 'Q3 2019',
                title: 'Beijing Office',
                content: 'Aliquam lorem ante, dapi bus in, viverra quis, feugi at a, tel lus. Phaselus vive'
            }
        ]
    }

    return (
        <RoadmapSection>
            <RoadmapOutter>
                <RoadmapContainer>
                    <div>
                        <Slider {...settings}>
                            {state.item.map(item => (
                                <div>
                                    <RoadmapItemHolder>
                                        <RoadmapDate style={item.styleDate}>{item.date}</RoadmapDate>
                                        <RoadmapLiner>
                                            <Line style={item.styleLine}/>
                                            <Dot/>
                                            <Line style={item.styleLinebelow}/>
                                        </RoadmapLiner>
                                        <RoadmapContent className={item.class} data-wow-delay={item.delay} style={item.styleContent}>
                                            <h5>{item.title}</h5>
                                            <Content>{item.content}</Content>
                                        </RoadmapContent>
                                    </RoadmapItemHolder>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </RoadmapContainer>
            </RoadmapOutter>
        </RoadmapSection>
    );
}

const RoadmapSection = styled.section`
    color: #fff;
    padding: 2% 2% 3%;
    min-height: 750px;
    position: relative;

    .slick-list{
        overflow: visible !important;
    }
    .slick-prev{
        left: -2.5px;
    }
    .slick-prev:before {
        content: '<';
    }
    .slick-prev, .slick-next {
        top: -3.5px;
        z-index: 2;
    }

    .slick-next:before {
        content: '>';
    }
    .slick-next{
        right: 11px;
    }

    .slick-prev:before, .slick-next:before {
        font-family: monospace;
        font-size: 57px;
        color: #aceb2f;
        opacity: 1;
    }
    .slick-prev.slick-disabled:before, .slick-next.slick-disabled:before {
        opacity: 1;
    }

    @media screen and (max-width: 768px){
        min-height: 630px;
    }

    @media screen and (max-width: 415px){
        padding: 2% 3% 3%;
        min-height: 300px;

        .slick-prev, .slick-next {
            top: -3.5px;
            z-index: 2;
        }
        .slick-next{
            right: 9px;
        }
    }

    @media screen and (max-width: 375px){

        .slick-prev, .slick-next {
            top: -3.5px;
        }
        .slick-prev{
            left: -3px;
        }
        .slick-next{
            right: 10px;
        }
    }

    @media screen and (max-width: 375px){

        .slick-prev, .slick-next {
            top: -2.5px;
        }
    }

`

const RoadmapOutter = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
`

const RoadmapContainer = styled.div`
    position: absolute;
    top: 50%;
    box-sizing: border-box;
    max-width: 95%;
    transform: translateY(50%);
    overflow-x: clip;
    @media screen and (max-width: 480px){
        top: 20%;
        transform: translateY(20%);
    }
`

const RoadmapItemHolder = styled.div`
    position: relative;
    .bottom-roadmap:after{
        background: #505050!important;
        top: unset!important;
        bottom: 100% !important;
        height: 55px !important;
    }

    
`

const RoadmapLiner = styled.div`
    display: flex;
    flex-direction: row;
    overflow: visible;
    height: 20px;
    align-items: center;
    justify-content: center;
`

const Line = styled.div`
    width: 51%;
    height: 3px;
`

const Dot = styled.div`
    width: 20px;
    height: 20px;
    background: #888;
    border: 5px solid #aceb2f;
    border-radius: 5rem;
`

const RoadmapContent = styled.div`
    position: absolute;
    font-family: sans-serif;
    padding: 25px 35px 27px;
    border-radius: 10px;
    box-sizing: border-box;
    background-position: center !important;
    background-size: cover !important;
    :after{    
        content: '';
        position: absolute;
        top:100%;
        left: 50%;
        width: 3px;
        height: 55px;
        background-color: #505050;
        transform: translateX(-50%);
        z-index: -1;
    }

    @keyframe fadeUp{
        from: {opacity: 0; top: 0px;}
        to: {opacity:1; top: 75px;}
    }

    @media screen and (max-width: 768px){
        h5{
            font-size: 18px;
        }
    }

    @media screen and (max-width: 480px){
        bottom: unset !important;
        top: 75px;
        margin: 0 8%;

        :after{
            bottom: 100% !important;
            top: unset !important;
            height: 55px;
        }
    }
    
`

const RoadmapDate = styled.div`
    position: absolute;
    width: 100%;
    text-align: center;

    @media screen and (max-width: 480px){
        top: unset !important;
        bottom: 32px !important;
    }
`

const Content = styled.div`

    @media screen and (max-width: 768px){
        font-size: 12px;
    }
`

export default Roadmap;