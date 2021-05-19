import React from 'react';
import styled from 'styled-components';
import Submenu from '../child_sub_menu/sub_menu';


const Child_menu= (props) => {
    let{child_arr,Clname} = props;
    return(
        <Box_child className={Clname ?"child":"child right"}>

             {child_arr.filter(chl => typeof(chl) =="string").map((chl,idx)=>(
                 <li key={idx}><a href="" className="a_child">{chl}</a></li>    
            ))}

            {child_arr.filter(chl => typeof(chl) =="object").map((chl,idx)=>(
                <li key={idx} ><a href="" className="a_child">{chl.name}</a> {chl.sub?<i class="fas fa-arrow-right"></i>:""}
                    {chl.sub? 
                        <Submenu sub={chl.sub} Clname={Clname}>
                            
                        </Submenu>
                    :    
                    ""
                }
                </li> 
            ))}

        </Box_child>
    );
}

               


const Box_child = styled.ul`
    position: absolute;
    background: #151515;
    border: 1px #303030;
    border-top: 2px solid #aceb2f;
    border-radius: 3px;
    box-sizing: border-box;
    padding: 0;
    text-aglin: left;
    top: 100%;
    width: 235px;
    padding: 20px 0 0 20px  !important;
    height:auto !important;
    display:none !important;

    &.right{
        padding: 0 20px 0 0   !important;

        li{
            text-align: right;
            padding: 0 20px 0 0;

            :hover{

                ::before{
                    left:85%;
                }
           
                a.a_child{
                    transform: translateX(-30px);
                }

                i{
                    right: 90%;
                }
            }

            @keyframes run_left{
                from{
                    transform: translateX(20px);
                }
            }
            i{
                right: 80%;
                transform: translateY(-50%)rotate(180deg);
            }
    }
        }

        
    }

    li{
        cursor: pointer;
        position: relative;
        font-size: 14px;
        line-height: 40px;
        position:relative;

        i{
            position: absolute;
            right: 25px;
            top: 50%;
            transform: translateY(-50%);
            transition: all .5s;
        }

        ::before{
            content: "";
            width: 7px;
            height: 7px;
            background: #aceb2f;
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 50%;
            animation: run_left .5s;
            display:none;
        }

        @keyframes run_left{
            from{
                transform: translateX(-20px);
            }
        }

        a.a_child{
            color:#989898 !important;
            display:inline-block;
        }
        
        &.active::before{
                display:block;
        }

        &.active a.a_child{
            transform: translateX(40px);
            color:white;
        }
    

        :hover{
           
            ::before{
                display:block;
            }
                a.a_child{
                    transform: translateX(40px);
                    color:white;
                }

                i{
                    right: 0;
                    color:white;
                }
                .sub{
                    display: block !important;
                }
            }
    }
     
`


export default Child_menu;