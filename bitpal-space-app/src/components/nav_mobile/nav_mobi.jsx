import react, { useState } from 'react'
import styled from 'styled-components'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';



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



const Nav_Mobi =()=>{

    const[child_home,Setchild_home]= useState(arrHome);
    const[child_pages,Setchild_pages]= useState(arrPages);
    const[child_Curent,Setchild_Curent]= useState(arrCurentcies);
    const[child_pf,Setchild_pf]= useState(arrportfolio);
    const[child_blog,Setchild_blog]= useState(arrblog);
    const[child_shop,Setchild_shop]= useState(arrshop);
    const[child_E,Setchild_E]= useState(arrE);

    const[hiden,SetHiden] = useState(false);
    const[hidenSub,SetHidenSub] = useState(false);

    const HandleClickMenu=() =>{
        if(hiden){
            SetHiden(false);
        }else{
            SetHiden(true);
        }
    }

    const HandleClickSub=() =>{
        if(hidenSub){
            SetHidenSub(false);
        }else{
            SetHidenSub(true);
        }
    }

 return(
    <Box_nav className="nav_mb">
        <Nav>
           <div className="logo">
           <a href="#"><img src="images/logo_mb.png" alt="" /></a>
           </div>

           <div className="btn_menu" onClick={() => {HandleClickMenu()}}>
               <span></span>
               <span></span>
               <span></span>
           </div>

        </Nav>
        <Nav_menu className={hiden?"show":""}> 
            <Box_menu>
                <div className="Box_logo">
                    <a href="#"><img src="images/logo.png" alt="" /></a>
                </div>

                <ProSidebar>
                <Menu iconShape="square">
                    <MenuItem >Dashboard</MenuItem>

                    <SubMenu title="HOME">
                    {child_home.map((chl,idx)=>(
                        <MenuItem key={idx}>{chl}</MenuItem>
                    ))}
                    </SubMenu>

                    <SubMenu title="PAGES">
                    {child_pages.map((chl,idx)=>(
                        <MenuItem key={idx}>{chl}</MenuItem>
                    ))}
                    </SubMenu>

                    <SubMenu title="CURRENCIES">
                        {child_Curent.map((chl,idx)=>(
                            <MenuItem key={idx}>{chl}</MenuItem>
                        ))}
                    </SubMenu>

                     <SubMenu title="PORTFOLIO">
                         
                        {child_pf.filter(chl=>chl.Subchild==0).map((chl,idx)=>(
                            <MenuItem>{chl.name}</MenuItem>
                        ))}

                        {child_pf.filter(chl=>chl.Subchild==1).map((chl,idx)=>(
                            <SubMenu  title={`${chl.name}`}>
                                {chl.sub.map((chl,idx)=>(
                                    <MenuItem key={idx}>{chl}</MenuItem>
                                ))}
                            </SubMenu>
                        ))}
                    </SubMenu>

                    <SubMenu title="BLOG">
                      
                        {child_blog.filter(chl=>chl.Subchild==0).map((chl,idx)=>(
                                <MenuItem>{chl.name}</MenuItem>
                            ))}

                            {child_blog.filter(chl=>chl.Subchild==1).map((chl,idx)=>(
                                <SubMenu  title={`${chl.name}`}>
                                    {chl.sub.map((chl,idx)=>(
                                        <MenuItem key={idx}>{chl}</MenuItem>
                                    ))}
                                </SubMenu>
                            ))}

                    </SubMenu>   

                    <SubMenu title="SHOP">
                      
                        {child_shop.filter(chl=>chl.Subchild==0).map((chl,idx)=>(
                                <MenuItem>{chl.name}</MenuItem>
                            ))}

                            {child_shop.filter(chl=>chl.Subchild==1).map((chl,idx)=>(
                                <SubMenu  title={`${chl.name}`}>
                                    {chl.sub.map((chl,idx)=>(
                                        <MenuItem key={idx}>{chl}</MenuItem>
                                    ))}
                                </SubMenu>
                            ))}
                            
                    </SubMenu>   

                    <SubMenu title="ELEMENT">
                      
                          {child_E.map((chl,idx)=>(
                              <SubMenu  title={`${chl.title}`}>
                                  {chl.arr.map((chl,idx)=>(
                                      <MenuItem key={idx}>{chl}</MenuItem>
                                  ))}
                              </SubMenu>
                          ))}
                          
                  </SubMenu>  
                </Menu>
            </ProSidebar>;

            </Box_menu>
            <Bg_out onClick={() => SetHiden(false)}></Bg_out>
        </Nav_menu>
        
    </Box_nav>
 );
}

const Box_nav= styled.nav`
    padding:0;
    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index:9999999;
    display:block;
    &.nav_mb{
        @media screen and (min-width:1200px){
          display:none !important;
        }
      }
`

const Nav = styled.div`
    display:block;
    with:100%;
    height:80px;
    line-height:80px;
    text-align: center;
    padding:0;
    position:relative;
    background:#ffffff;
    
    .logo{
        width:100px;
        display: inline-block;
        a{
            img{
                width:100%;
                height:100%;
                object-fix: cover;
            }
        }
    }

    .btn_menu{
        width:40px;
        height:40px;
        position: absolute;
        top:50%;
        left:20px;
        transform:translateY(-50%);
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        :hover{

            span{
               
                ::before{
                    background:black;

                }
                
                :nth-child(2n-1)::before{
                    width:50%;
                }
            }
            
        }

        span{
            display:block;
            width:100%;
            position:relative;
            ::before{
                content: "";
                position:absolute;
                width:100%;
                height:1px;
                background:#888;
                top:0;
                left:0;
                transition:all .5s;
            }

            
        }
    }
`

const Nav_menu = styled.div`
    padding:0;
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    display:none;

    &.show{
        display:flex;

        animation: Show 1s;

                @keyframes Show{
                    from{
                        opacity:.4;
                    }
                    to{
                        opacity:1;
                    }
                }
    }

    .pro-sidebar{
        width: 100%;
        height:590px;

        .pro-sidebar .pro-menu .pro-menu-item {
            font-size: 15px;
            line-height: 40px;
        }

        .pro-sidebar-inner{
            background:transparent;
        }

        li.pro-menu-item.pro-sub-menu.open {
            border-top: 2px solid #aceb2f;
            border-radius: 3px;
            box-sizing: border-box;
        }

        .pro-menu .pro-menu-item > .pro-inner-item{
            :hover{
                :before {
                    content: '';
                    display: inline-block;
                    width: 6px;
                    min-width: 4px;
                    height: 6px;
                    border: 1px solid #aceb2f;
                    background: #aceb2f;
                    border-radius: 50%;
                    margin-right: 15px;
                    position: relative;
                    box-shadow: 1px 0px 0px #adadad, 0px -1px 0px #adadad, 0px 1px 0px #adadad, -1px 0px 0px #adadad;
                }
            }
        }

        .pro-sidebar-inner > .pro-sidebar-layout{
            /* width */
            ::-webkit-scrollbar {
            width: 5px;
            }
        
            /* Track */
            ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px grey; 
            border-radius: 10px;
            }
            
            /* Handle */
            ::-webkit-scrollbar-thumb {
            background:#aceb2f ; 
            border-radius: 10px;
            }
        }
    }
`

const Box_menu = styled.div`
    flex-grow: 1;
    background: #151515;

    .Box_logo{
        width:100%;
        text-align:center;
        padding:1.5rem 0;
        a {
            display: inline-block;
            width: 100px;
        }
    }
`
const Bg_out = styled.div`
    flex-grow: 3;
    background: gray;
    opacity: .7;
`

export default Nav_Mobi