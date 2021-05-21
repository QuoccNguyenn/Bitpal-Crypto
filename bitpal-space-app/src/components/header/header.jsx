import react from 'react'
import styled from 'styled-components'
import { Progress } from 'reactstrap';
import Button from '../Buttons/Button';

const Header=() =>{
    return(
        <Box_hd>

            <BannerTeam>
                <BannerLetter>c</BannerLetter>
                <BannerLetter>r</BannerLetter>
                <BannerLetter>y</BannerLetter>
                <BannerLetter>p</BannerLetter>
                <BannerLetter>t</BannerLetter>
                <BannerLetter>o</BannerLetter>
            </BannerTeam>
            <Content_hd>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <Left_content>
                                <Text_content> First Mining ICO Token StartUp</Text_content>
                                <Content_p>Regarded as a synonym to cryptocurrency, blockchain is much more than a payment option.</Content_p>
                               
                                <div className="box_btn">
                                    <div className="btn">
                                        <Button name='WHITE PAPER'/>
                                    </div>

                                    <div className="btn">
                                        <Button name='FIND OUT MORE'/>
                                    </div>
                                </div>
                                
                            </Left_content>

                        </div>
                        <div className="col-xl-6">
                            <Right_content>
                                <Box_right>
                                    <Title_box>Edge ICO Ends in</Title_box>
                                    <Box_time>
                                        <Item_Time>
                                            <Num_time>00</Num_time>
                                            <Text_time>Days</Text_time>
                                        </Item_Time>

                                        <Item_Time>
                                            <Num_time>00</Num_time>
                                            <Text_time>Hours</Text_time>
                                        </Item_Time>

                                        <Item_Time>
                                            <Num_time>00</Num_time>
                                            <Text_time>Minutes</Text_time>
                                        </Item_Time>

                                        <Item_Time>
                                            <Num_time>00</Num_time>
                                            <Text_time>Seconds</Text_time>
                                        </Item_Time>
                                    </Box_time>
                                    <div className="btn">
                                        <Button  name='Buy Edge Tokens'/>
                                    </div>


                                    <Box_pro>
                                        <Text_pro>
                                            <span className="tl">Reached: $19,550,000</span>
                                            <span className="tr">$70,000,000</span>
                                        </Text_pro>
                                        <Progress className="clear" value={30}>
                                            <Colorpr className="demo"></Colorpr>
                                        </Progress>

                                        <Text_pro>
                                            <span className="tl">Softcap</span>
                                            <span className="tr">Hardcap</span>
                                        </Text_pro>
                                    </Box_pro>

                                </Box_right>
                            </Right_content>
                        </div>
                    </div>
                </div>
            </Content_hd>
        </Box_hd>
    );
}


const Box_hd = styled.section`
    background:url('images/bg_header.png');
    width:100%;
    min-height:1000px;
    position:relative;
`

const BannerTeam = styled.div`
    position: absolute;
    top: 17%;
    left: 5%;
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
const Content_hd = styled.div`
    padding:10.5rem 0;
    @media screen and (max-width: 415px){
        padding:5.5rem 0;

    }
`

const Left_content = styled.div`
    width:100%;
    padding 2.5rem 0;
    @media screen and (max-width:1024px){
        width: 70%;
        margin: 0 auto;
    }

    @media screen and (max-width:415px){
        padding: 1.5rem 0;
    }


`

const Text_content = styled.div`
    max-width:100%;
    font-size:75px;
    font-family: 'Roboto', sans-serif;
    font-weight:bold;
    letter-spacing:3px;
    color:white;
    padding:15px 0;

    @media screen and (max-width:768px){
        font-size: 55px;
    }

    @media screen and (max-width:415px){
        font-size: 35px;
    }

    @media screen and (max-width:380px){
        font-size: 25px;
    }
`

const Content_p = styled.p`
    max-width:100%;
    color: #ffffff;
    font-size: 22px;
    font-weight: 400;
    line-height: 35px;
    margin: 19px 0 40px 0;
    font-family: 'Montserrat', sans-serif;

    @media screen and (max-width:768px){
        font-size: 18px;
    }

    @media screen and (max-width:415px){
        font-size: 12px;
        margin: 10px 0;
    }
`

const Right_content = styled.div`
    width:100%;
    padding: 2.5rem 0;

    @media screen and (max-width: 1024px){
        width: 80%;
        margin: 0 auto;
    }

    @media screen and (max-width:768px){
        width:100%;
    }
`

const Box_right = styled.div`
    width:85%;
    height:100%;
    background:#232323;
    margin:0 auto;
    padding:45px 40px;
    border-radius: 10px;

    .btn{
        width:100%;
        a{
            display:block;
            text-decoration:none;
            color:white;
            font-family: 'Montserrat', sans-serif;
            font-weight:600;
            padding:15px 25px;
            border-radius:50px;
            border:2px solid #aceb2f;
            font-size:14px;

            
        }
    }
`

const Title_box = styled.div`
    color:#aceb2f;
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
    font-weight:600;
    margin-bottom:40px;

    @media screen and (max-width:415px){
        font-size: 14px;
        margin-bottom: 20px;
    }

`

const Box_time= styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom:40px;
    flex-wrap: wrap;
    justify-content: center;
    @media screen and (max-width:415px){
        margin-bottom: 20px;
    }
`

const Item_Time = styled.div`
    width: 20%;
    margin: 0 7px;

    @media screen and (max-width: 768px){
        width:40%;

    }
`

const Num_time = styled.div`
    width:100%;
    text-align:center;
    font-size:55px;
    font-weight:600;
    font-family: 'Montserrat', sans-serif;
    border-radius: 10px;
    background: white;

    @media screen and (max-width: 415px){
        font-size: 25px;
    }
`

const Text_time = styled.div`
    width:100%;
    text-align: center;
    margin-top:7px;
    color:white;
    font-family: 'Roboto', sans-serif;

    @media screen and (max-width: 415px){
        font-size: 14px;
    }
`

const Box_pro = styled. div`
    margin:40px 0;

    .clear{
        clear:both;
    }

    .progress{
        margin-bottom:10px;
        background:black;
        height:13px;
        border-radius:20px;

        @media screen and (max-width:600px){
            height: 7px;
        }

        .progress-bar{
            position:relative;
            background:transparent;
        }
    }
`

const Text_pro = styled.div`
    width:100%;
    color:white;

    span{
        width:50%;
        float:left;
        margin-bottom:10px;
        &.tl{
            text-align:left;
        }

        &.tr{
            text-align:right;
        }

        @media screen and (max-width:600px){
            font-size: 12px;
        }

        @media screen and (max-width:415px){
            font-size: 10px;
        }
    }
`

const Colorpr = styled.div`

    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #aceb2f;
    &.demo{
        animation: run  5s;
    }

@keyframes run {
    from {width:0;}
    to {width: 100%;}
  }
`



export default Header
