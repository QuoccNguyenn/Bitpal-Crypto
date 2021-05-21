import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {  Modal,  ModalBody } from 'reactstrap';
import Iframe from 'react-iframe'
import Content_box from '../content_box/content_box';

const arr_content={
    h1:"Edge Token Sale",
    h5:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum",
    p:`Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condi`
}

const Video=() => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const[content_box,SetContent]= useState(arr_content);

    return(
        <Box_tk>
            <Content_tk className="container">
                <Box_left_tk>
                    <Img_video>
                        <img src="https://bitpal.qodeinteractive.com/wp-content/uploads/2018/08/h1-img-8.jpg" alt="" />
                    </Img_video>
                    
                        <Btn_Play_video  onClick={toggle}>
                                <span></span>
                        </Btn_Play_video>

                        <Modal isOpen={modal} fade={false} toggle={toggle} className="as" style={{maxWidth: '100vw', width: '100%',height:"100vh",margin:"0px",display:"flex", justifyContent: "center",alignItems:"center"}}>
                        <ModalBody className="modal-video"  style={{width: '100%' ,height:"60vh" ,padding:"0px"}}>
                        <Iframe url="https://player.vimeo.com/video/254930827?title=0&byline=0&portrait=0&autoplay=1;"
                            width="100%"
                            height="100%"
                            />
                        </ModalBody>
                         </Modal>
                </Box_left_tk>
                <Box_right_tk>
                    <Text_right>
                        <Content_box content={content_box}></Content_box>
                        <Btn_app>
                            <a href="https://play.google.com/store" target="blank"><img src="images/btn_app1.png" alt="" /></a>
                            <a href="https://www.apple.com/itunes/"  target="blank"><img src="images/btn_app2.png" alt="" /></a>
                        </Btn_app>
                    </Text_right>

                </Box_right_tk>
            </Content_tk>
        </Box_tk>
    );
}

const Box_tk = styled.section`
    width:100%;
    padding:7.5rem 0;
    background:url(https://bitpal.qodeinteractive.com/wp-content/uploads/2018/08/h1-background-img-2.png);
    background-size:cover;

    @media screen and (max-width: 600px){
        padding:1.5rem 0;
    }
`

const Content_tk = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;

    @media screen and (max-width: 1024px){
        flex-direction: column;
    }
`
const Box_left_tk = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items: center;
    position: relative;
    
`

const Img_video = styled.div`
    width:100%;

    @media screen and (max-width: 1024px){
        width: 80%;
        margin: 0 auto;
    }
`

const Btn_Play_video = styled.p`

    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items: center;
    cursor: pointer;

    span{
        border-bottom: 35px solid transparent;
        border-top: 35px solid transparent;
        border-left: 50px solid #aceb2f;
        transition: ease all 1s;
    }

    :hover span{
        transform: scale(1.2);
    }
`


const Box_right_tk = styled.div`
    width:100%;
    position: relative;

    @media screen and (max-width: 1024px){
        width:80%;
    }
`

const Text_right = styled.div`
    width:100%;
    text-align:left;    
    padding-bottom:28px;
    padding-left:20%;

    @media screen and (max-width: 1024px){
        width: 100%;
        text-align: center;
        padding: 3.5rem 0;
    }
`

const Btn_app = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    a{
        display: block;
        width: 100%;

        img{
            transition:all .5s;

            @media screen and (max-width: 768px){
                max-width:150px;
            }

            @media screen and (max-width:415px){
                max-width:100px;
            }
        }

        :hover{
            img{ 
            transform: translateY(-10px);
            }
        }
    }
`

export default Video