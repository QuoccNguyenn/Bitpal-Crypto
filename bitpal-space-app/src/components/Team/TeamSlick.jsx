import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';


function TeamSlick(){
        const state = {
            members:[
                {
                    src:'../../images/team-img-9.png',
                    fullName:  'Steven Griffin',
                    position: 'Miner'
                },
                {
                    src:'../../images/team-img-13.png',
                    fullName: 'Linda Porter',
                    position: 'Software Architect'
                },
                {
                    src:'../../images/team-img-8.png',
                    fullName: 'Alice Adams',
                    position:  'Engineer'
                }
            ]
        }

        const settings = {
            arrows: true,
            infinite: true,
            autoplay: true,
            speed: 800,
            autoplayspeed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            customPaging: i => (
                <span className="dot"></span>
            ),
            responsive: [
                {
                    breakpoint: 1024,
                    settings:{
                        dots: true,
                        arrows: false
                    }
                }
            ]
        };
        return (
            <div>
                <Slider {...settings} style={{zIndex: '1'}}>
                    {state.members.map(item => (
                        <div>
                            <TeamItem>
                                <TeamImg>
                                    <img src={item.src}/>
                                </TeamImg>
                                <TeamHolder>
                                    <TeamQuote>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis
                                    </TeamQuote>
                                    <TeamName>{item.fullName}</TeamName>
                                    <TeamPosition>{item.position}</TeamPosition>
                                </TeamHolder>
                            </TeamItem>
                        </div>
                    ))}
                </Slider>
            </div>
          );
}


const TeamItem = styled.div``

const TeamImg = styled.div`
    img{
        width: 75px;
        height: 75px;
        margin: auto;
    }
`

const TeamHolder = styled.div``

const TeamQuote = styled.p`
    color: #fff;
    text-align: center;
    margin: 20px 10%;

    font-size: 20px;
    font-family: sans-serif;
    font-style: italic;
    font-weight: 300;

    @media screen and (max-width: 415px){
        font-size: 17px;
    }
`
const TeamName = styled.div`
    text-align: center;
    color: #fff;

    font-size: 20px;
    font-family: sans-serif;
    font-weight: 500;
    letter-spacing: 1px;
`

const TeamPosition = styled.div`
    text-align: center;
    color: green;

    font-size: 15px;
    font-family: sans-serif;
    font-weight: 300;
`

export default TeamSlick;