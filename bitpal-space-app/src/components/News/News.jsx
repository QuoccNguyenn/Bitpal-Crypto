import React from 'react';
import styled from 'styled-components';

function News() {

    const state = {
        content:[
            {
                title: 'ICO Projection'
            },
            {
                title: 'The First Edge ICO'
            },
            {
                title: 'Crypto is stable?'
            }
        ]
    }
    return(
        <NewsSection>

            <BannerTeam>
                <BannerLetter>n</BannerLetter>
                <BannerLetter>e</BannerLetter>
                <BannerLetter>w</BannerLetter>
                <BannerLetter>s</BannerLetter>
            </BannerTeam>

            <BodyContainer>
                    {state.content.map(item => (
                        <ContentHolder>
                            <Content>
                                <Date>August 10, 2018</Date>
                                <Title>{item.title}</Title>
                                <Paragraph>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient monte, nases ridi culu 
                                </Paragraph>
                                <ReadMore>READ MORE <i class="fa fa-arrow-right"></i></ReadMore>
                            </Content>
                        </ContentHolder>
                    ))}
                        

            </BodyContainer>

        </NewsSection>
    );
}

const NewsSection = styled.section`
    position: relative;
    padding: 10% 15px 3%;
    clear: both;
    @media screen and (max-width: 1024px){
        padding: 10% 15px 3%;
    }
`

const BannerTeam = styled.div`
    position: absolute;
    top: -10%;
    left: 5%;
    @media screen and (max-width: 1024px){
        top: -5%;
    }
    @media screen and (max-width: 768px){
        display: none;
    }
`

const BannerLetter = styled.span`
    color: #ffffff05;
    font-size: 50px;
    z-index: -1;

    font-size: 250px;
    font-weight: 900;
    font-family: sans-serif;
    letter-spacing: 10px;
    line-height: normal;
`

const BodyContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    padding: 0 5%;

`

const ContentHolder = styled.div`
    max-width: 33%;
    padding: 0 1%;
    z-index: 2;

    @media screen and (max-width: 768px){
        max-width: 50%;
        margin-bottom: 3%;
    }

    @media screen and (max-width: 415px){
        max-width: 100%;
        margin-bottom: 12%;
    }
`

const Content = styled.div`

`

const Date = styled.div`
    color: #959595;
    font-size: 14px;
    font-family: sans-serif;
    width: fit-content;

    :hover{
        color: #aceb2f;
    }
`

const Title = styled.div`
    color: #fff;
    font-size: 28px;
    font-family: sans-serif;
`

const Paragraph = styled.div`
    color: #fff;
    font-size: 15px;
    font-family: sans-serif;
    font-weight: 100;
    line-height: 1.7;
    margin: 15px 0;
`

const ReadMore = styled.div`
    color: #fff;
    font-family: sans-serif;
    width: fit-content;

    :hover{
        i{
            margin-left: 9px;
            transition: 0.2s all ease-in-out;
        }
    }
`

export default News;