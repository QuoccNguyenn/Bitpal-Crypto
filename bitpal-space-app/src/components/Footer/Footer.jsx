import React from 'react';
import styled from 'styled-components';

function Footer() {
    return(
        <FooterSection>
            <FooterContainer>
                <Column>
                    <Image src='../../images/logo.png'/>
                    <Description className='mb-70'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo. 
                        Aenean massa. Cum sociis natoque penatibus et magnis dis
                    </Description>
                    <Social>
                        <SocialUl>
                            <li><i className='fa fa-facebook'></i></li>
                            <li><i className='fa fa-twitter'></i></li>
                            <li><i className='fa fa-github'></i></li>
                            <li><i className='fa fa-vimeo'></i></li>
                            <li><i className='fa fa-instagram'></i></li>
                        </SocialUl>
                    </Social>
                </Column>

                <Column>
                    <Title>Additional Links</Title>
                    <DescriptionUl>
                        <li>Tokens Sale</li>
                        <li>Roadmap</li>
                        <li>What is Edge Token?</li>
                        <li>Why / How?</li>
                        <li>Edge Wallet</li>
                    </DescriptionUl>
                </Column>

                <Column>
                    <Title>Contact us</Title>
                    <Description className='mb-70'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean
                    </Description>
                    <Description>
                        Enean vulputate eleifend tellus. Aenean leo ligula, porttitor eu.
                    </Description>
                </Column>

                <Column>
                    <Title>Subscribe</Title>
                    <Description className='mb-70'>
                        Enean vulputate eleifend tellus. Aenean leo ligula, porttitor eu.
                    </Description>
                    <Description>
                        <InputForm>
                            <input type='email' placeholder='Your email...'/>
                            <i className='fas fa-arrow-right'></i>
                        </InputForm>
                    </Description>
                </Column>
            </FooterContainer>
            <FooterBottom>
                <FooterBody>
                    <FooterInner>
                        <CopyRight>© 2018 <span>Qode Interactive</span>, All Rights Reserved</CopyRight>
                        <Privacy>Privacy Policy Terms & Conditions</Privacy>
                    </FooterInner>
                </FooterBody>
            </FooterBottom>
        </FooterSection>
    );
}

const FooterSection = styled.section`
    position: relative;
    background: #141515;
    padding: 10% 2% 5%;
    z-index: 2;
`

const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    padding: 0 5%;

    @media screen and (max-width: 1024px){
        flex-wrap: wrap;
    }
`

const Column = styled.div`
    width: 25%;
    padding: 0 2%;
    z-index: 2;

    .mb-70{
        margin-bottom: 70px;
    }

    @media screen and (max-width: 1024px){
        width: 50%;
    }

    @media screen and (max-width: 415px){
        width: 100%;
    }
`

const Image = styled.img`
    max-width: 35%;
    margin: 10px 0 45px;
`

const Social = styled.div``

const SocialUl = styled.ul`
    color :#888888;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 15% 0 0;

    li:hover{
        color: #aceb2f;
    }

    @media screen and (max-width: 415px){
        padding: 0 40% 0 0;
    }
`

const Description = styled.div`
    font-size: 14px;
    font-weight: 100;
    color: #ababab;
    font-family: sans-serif;

`

const Title =  styled.div`
    font-size: 24px;
    font-family: sans-serif;
    color: #fff;
`

const DescriptionUl = styled.ul`
    list-style: none;
    padding: 0;

    li{
        color: #ababab;
        line-height: 35px;
        font-size: 14px;
        font-family: sans-serif;
        font-weight: 100;
        :hover{ 
            color: #aceb2f;
        }
    }
`

const InputForm = styled.div`
    position: relative;
    input{
        width: 100%;
        color: #888;
        background: #171819;
        padding: 11px;
        border-radius: 8px;
        border: solid 1px #333435;
    }
    i{
        position: absolute;
        top: 33%;
        right: 20px;
    }

    i:hover{
        right: 17px;
        transition: 0.2s all ease-in-out;
    }
`

const FooterBottom = styled.div``

const FooterBody = styled.div`
    margin: 5% 5% 0;
    border-top: 1px solid #333435;
`

const FooterInner = styled.div`
    display: flex;
    flex-direction: row;
    line-height: 5;
    z-index: 2;
    @media screen and (max-width: 415px){
        flex-wrap: wrap;
    }
`

const CopyRight = styled.div`
    width: 50%;
    font-size: 14px;
    font-weight: 100;
    color: #ababab;
    font-family: sans-serif;

    padding: 0 2%;

    span{
        color: #aceb2f;
    }
    @media screen and (max-width: 415px){
        width: 100%;
    }
`

const Privacy = styled.div`
    width: 50%; 
    font-size: 14px;
    font-weight: 100;
    color: #ababab;
    font-family: sans-serif;
    text-align: right;

    padding: 0 2%;
    @media screen and (max-width: 415px){
        width: 100%;
        text-align: left;
    }
`

export default Footer;