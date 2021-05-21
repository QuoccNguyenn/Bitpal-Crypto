        import React, { useEffect, useState } from 'react'
        import styled from 'styled-components'
        import Button from '../Buttons/Button';
        import Content_box from '../content_box/content_box';
        import Circle from './circle/circle';


        const arr = [
            {
                img:"ic-1.png",
                img_hv:"ic-hv-1.png",
                name:"Development",
                title:"Trust your intuition",
                content:"Lorem ipsum dolor sit amet, consec tet uer adipis cing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et",
                class_it:"",
                a:"active"
            },{
                img:"ic-1.png",
                img_hv:"ic-hv-1.png",
                name:"Development",
                title:"Trust your intuition",
                content:"Lorem ipsum dolor sit amet, consec tet uer adipis cing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et",
                class_it:"it2"
            },{
                img:"ic-3.png",
                img_hv:"ic-hv-3.png",
                name:"Selling & Buying",
                title:"Fast Growing",
                content:"Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet etiam ",
                class_it:"it3"
            },{
                img:"ic-4.png",
                img_hv:"ic-hv-4.png",
                name:"Development",
                title:"Innovative Method",
                content:"Lorem ipsum dolor sit amet, consec tet uer adipis cing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et ",
                class_it:"it4"
            },{
                img:"ic-5.png",
                img_hv:"ic-hv-5.png",
                name:"Selling & Buying",
                title:"High Security",
                content:"Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet etiam ",
                class_it:"it5"
            },{
                img:"ic-6.png",
                img_hv:"ic-hv-6.png",
                name:"Development",
                title:"Encrypted Payment",
                content:"Lorem ipsum dolor sit amet, consec tet uer adipis cing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et ",
                class_it:"it6"
            },{
                img:"ic-7.png",
                img_hv:"ic-hv-7.png",
                name:"Selling & Buying",
                title:"National Security",
                content:"Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet etiam",
                class_it:"it7"
            },{
                img:"ic-8.png",
                img_hv:"ic-hv-8.png",
                name:"Development",
                title:"Mobile Payments",
                content:"Lorem ipsum dolor sit amet, consec tet uer adipis cing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et",
                class_it:"it8"
            },
        ]

        const arr_content={
            h1:"Token Distribution",
            h5:"Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
            p:`Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
            Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullam corper ultricies nisi. Nam eget dui.
            Etiam rhoncus.Maecenas tem pus, tellus eget condimentum rhoncus, sem quam semper fabul`
        }

        const Token=(props) => {

            const[item,Setitem] = useState(arr);
            const[demo,Setdemo] = useState(0);
            const[content_box,SetContent] = useState(arr_content)
            let {run_Cir} = props;
            var dem = demo;
            const add_active = (idx) => {
                Setdemo(idx);
                dem=idx;
            }
            useEffect(() => {
                
                    const interval = setInterval(() => {
                        console.log(` slide: ${dem}`);
                        if(dem>7){
                            Setdemo(0);
                        }else{
                            Setdemo(dem++);
                        }
                    }, 1500);
                    return () => clearInterval(interval);

            }, [demo]);

            return(
                <Box_tk>
                    <Content_tk className="container">
                        <Box_left_tk>
                            <Circle run_Cir={run_Cir} item={item} demo={demo} add_active={add_active}></Circle>
                        </Box_left_tk>
                        <Box_right_tk>
                            <div className="text_right">
                                <Content_box content={content_box}></Content_box>
                                <div className="btn">
                                    <Button name='PURCHASE'/>
                                </div>
                            </div>

                        </Box_right_tk>
                    </Content_tk>
                </Box_tk>
            );
        }

        const Box_tk = styled.section`
            width:100%;
            padding:7.5rem 0;

            @media screen and (max-width:600px){
                padding:1.5rem 0 ;
            }
        `

        const Content_tk = styled.div`
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0;

            @media screen and (max-width: 1024px){
                flex-direction:column;
            }
        `
        const Box_left_tk = styled.div`
            width:100%;
            height:500px;
            display:flex;
            flex-direction:row;
            justify-content:center;
            align-items: center;
        `


        const Box_right_tk = styled.div`
            width:100%;
            position:relative;

            @media screen and (max-width:1024px){
                padding: 7.5rem 0;
            } 
            
            @media screen and (max-width:600px){
                padding: 4.5rem 0;
            }

            .text_right{
                width:100%;
                text-align:left;    
                padding-bottom:28px;
                padding-left:20%;

                @media screen and (max-width: 1024px){
                    width: 80%;
                    padding-left:0;
                    margin: 0 auto;
                }


                    .btn{
                        padding:0;
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

            }

        `

        export default Token