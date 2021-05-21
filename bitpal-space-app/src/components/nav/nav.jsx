import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../Buttons/Button';
import Child_menu from './components/child_menu/child_menu';

 const arrHome = ["MAIN HOME","APP PRESENTATION","CRYPTO ADVISOR","CRYPTO AGENCY","ICO HOME","BLOCKCHAIN APP","VERTICAL SLIDER","BLOG HOME","LANDING"];
 const arrPages = ["ABOUT US","TEAM MEMBER","CONTACT US","GET IN TOUCH","404 ERROR PAGE"];
 const arrCurentcies = ["ICO COUNTDOWN","ICO SINGLE"];
 const arrportfolio = [
     {
         name:" STANDARD",
         Subchild:0
     },
     {
        name:"GALLEYRY",
        Subchild:0
    },{
        name:"MASONRY",
        Subchild:0
    },{
        name:"LAYOUTS",
        Subchild:1,
        sub:["TWO COLUMNS","THRE COLUMNS","FOUR COLUMNS","FOUR COLUMNS WIDE","FIVE COLUMNS WIDE"]
    },{
        name:"SINGLE",
        Subchild:1,
        sub:["BIG SLIDER","BIG IMAGES","GALLERY"]
    }
 ];
 const arrblog = [
    {
        name:" RIGHT SIDEBAR",
        Subchild:0
    },
    {
       name:"LEFT SIDEBAR",
       Subchild:0
   },{
       name:"THREE COLUMNS",
       Subchild:0
   },{
       name:"POST TYPES",
       Subchild:1,
       sub:["STANDARD","GALLERY","LINK","QUETE","VIDEO","AUDIO"]
   }
];
const arrshop = [
    {
        name:" PRODUCT LIST",
        Subchild:0
    },
    {
       name:"PRODUCT SINGLE",
       Subchild:0
   },{
       name:"SHOP LAYOUTS",
       Subchild:1,
       sub:["THREE COLUMNS","FOUR COLUMNS","FULL WIDTH"]
   },{
       name:"SHOP PAGES",
       Subchild:1,
       sub:["MY ACCOUNT","CART","CHECKOUT"]
   }
]

const arrE =[
    {
        title:"FEATURED",
        arr:["ROADMAP","ICO LIST","CURRENCY LIST & CONVERTER","ICO COUNTDOWN STANDARD","ICO COUNTDOWN BOXED","ICO SHOWCASE","PIE CHART DOUGHNUT","CURRENCY CAROUSEL","FRANE SLIDER"]
    },
    {
        title:"CLASSIC",
        arr:["ACCORDIONS","TABS","BUTTONS","ICON WITH TEXT","ICON LIST ITEM" ,"CONTACT FORM","GOOGLE MAPS","VIDEO BUTTON","PARALLAX SECTION"]
    },
    {
        title:"INFORGRAPPHIC",
        arr:["TESTIMONIALS","TEAM","CLIENTS","PROGRESS BAR","PRICING TABLE","COUNTERS","COUNDTDOWN","PIE CHART","BLOG LIST","SHOP LIST"]
    },
    {
        title:"TYPOGRAPHY",
        arr:["HEADING","ROW BACKGROUND TEXT","COLUMNS","BLOCKQUOTE","DROPCAPS","HIGHLIGHTS","SEPARATORS"]
    }
]



const NavBar=(props)=>{
    const[child_home,Setchild_home]= useState(arrHome);
    const[child_pages,Setchild_pages]= useState(arrPages);
    const[child_Curent,Setchild_Curent]= useState(arrCurentcies);
    const[child_pf,Setchild_pf]= useState(arrportfolio);
    const[child_blog,Setchild_blog]= useState(arrblog);
    const[child_shop,Setchild_shop]= useState(arrshop);
    const[child_E,Setchild_E]= useState(arrE);

    let {changedBackground} =props;
   
   return(
        <Box_nav className={changedBackground?"nav_pc fixed" :"nav_pc"}>
            <Nav className="container">
                <Menu>
                    <Logo_nav>
                        <img src="images/logo.png" alt="" />
                    </Logo_nav>
                    <Contents_nav>

                        <ul>
                            <li className="active"><a href="">HOME</a><Child_menu child_arr ={child_home} Clname  ></Child_menu></li>

                            <li ><a href="">PAGES</a><Child_menu child_arr ={child_pages} Clname ></Child_menu></li>

                            <li ><a href="">CURRENCIES</a><Child_menu child_arr ={child_Curent} Clname ></Child_menu></li>

                            <li><a href="">PORTFOLIO</a><Child_menu child_arr ={child_pf} Clname ></Child_menu></li>

                            <li><a href="">BLOG</a><Child_menu child_arr ={child_blog} Clname></Child_menu></li>

                            <li><a href="">SHOP</a><Child_menu child_arr ={child_shop} Clname={false}></Child_menu></li>
                            
                            <li className="hv_e"><a href="">ELEMENTS</a>
                                <Nav_e className="child_e">
                                    <div className="container">
                                        <div className="box_e">
                                           
                                            {child_E.map((chl,idx)=>(
                                                <div key={idx} className="item">
                                                    <li className="title" ><a href="">{chl.title}</a></li>
                                                    {chl.arr.map((chl,idx)=>(
                                                        <li className="text" clas><a href="">{chl}</a></li>
                                                    ))}
                                                </div>

                                                
                                            ))}
                                            
                                        </div>
                                    </div>
                                </Nav_e>
                            </li>
                        </ul>

                        <Btn_menu>
                            <div style={{width: '55%'}}>
                                <Button name='LOGIN'/>
                            </div>
                        </Btn_menu>
                    </Contents_nav>
                </Menu>
            </Nav>
        </Box_nav>
   );
}

const Box_nav= styled.nav`
    padding:0;
    position:absolute;
    left:0;
    right:0;
    z-index:9999999;
    &.nav_pc{
        @media screen and (max-width:1200px){
          display:none !important;
        }
      }

    &.fixed {
        position: fixed;
        background: black;
        top: 0;
    }
`

const Nav = styled.div`
    display:block;
    with:100%;
    padding:0;
`
const Menu = styled.div`
    width:100%;
    height:100px;
    line-height:90px;
    display:flex;
    flex-direction:row;
    flex-grow:1;
`

const Logo_nav = styled.div`
    height: 100%;
    flex-grow:1;

    img{
        width:91px;
        height:27px;
    }
`

const Contents_nav = styled.div`
    height: 100%;
    flex-grow:3;
    display:flex;
    flex-direction:row;

    ul{
        height: 100%;
        flex-grow:4;
        padding: 0;
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;   
    }

    .hv_e:hover .child_e{
        display:block;
    }
   

    li{
        cursor: pointer;
        :hover {
            a{
                color:#aceb2f;
            }

            .child{
                display: block !important;
            }

        }
        position:relative;
    }
    

    li a{
        color:white;
        text-decoration:none;
        font-weight:bold;
        font-family: 'Roboto', sans-serif;
        letter-spacing: 2px;
        transition:all .5s;
    }

    li.active{
        a{
            color:#aceb2f;
        }

        .child{
            a{
                color:#989898;
                display:inline-block;
            }
        }

    }

   
`
const Btn_menu = styled.div`
    height: 100%;
    flex-grow:2;
    div{
        a{
            margin: 1.6rem auto;
            padding: 10px 25px;
        }
    }
`


const Nav_e = styled.div`

    position: absolute;
    background: #151515;
    border: 1px #303030;
    border-top: 2px solid #aceb2f;
    border-radius: 3px;
    box-sizing: border-box;
    padding: 0;
    top: 100%;
    /* right: -527%; */
    left: 50%;
    width: 100vw;
    display: none;
    transform: translateX(-69%);

    .box_e{
        width: 100%;
        display: flex;
        flex-direction: row;

        padding:1.5rem 0;

        .item {
            width: 100%;
            position: relative;
            padding-left: 20px;

            ::before{
                content: "";
                width: 1px;
                background: white;
                position: absolute;
                top: 0%;
                left: 0;
                bottom: 0%;
            }
             li {
                font-size: 14px;
                line-height: 40px;

                a{
                    color:#989898;
                    display:inline-block;
                }
            }

                li.title {
                    line-height: 20px;
                    font-size: 18px;
                    padding-bottom: 20px;

                    a{
                        color:#fff;
                    }
            }

            li.text{
                cursor: pointer;
                position: relative;
                font-size: 14px;
                line-height: 40px;
                position:relative;

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

                :hover{
           
                    ::before{
                        display:block;
                    }
                        a{
                            transform: translateX(40px);
                            color:white;
                        }
                    }
            }
            }
        }
    }
`

export default NavBar