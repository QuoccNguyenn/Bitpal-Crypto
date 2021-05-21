import React from 'react'
import styled from 'styled-components'

const Circle = (props) => {
    let { run_Cir, item, demo, add_active } = props

    return (
        <Box_Circle className={run_Cir ? "run" : ""}>
            {item.map((it, idx) => (
                <Item key={idx} className={demo == idx ? "active show" : "show"} onMouseOver={() => add_active(idx)}>
                    <Item_cir className={`item-circle ${it.class_it}`}>
                        <Item_img className="img"><I_img src={`images/${it.img}`} alt="" /></Item_img>
                        <Item_img_hv className="img-hv"><I_img src={`images/${it.img_hv}`} alt="" /></Item_img_hv>
                    </Item_cir>

                    <Text_cir className={run_Cir ? "text-circle run" : "text-circle"}>
                        <span>{it.name}</span>
                        <h4>{it.title}</h4>
                        <p>{it.content}</p>
                    </Text_cir>
                </Item>
            ))}
        </Box_Circle>
    );
}

const Box_Circle = styled.div`
    width:500px;
    height:500px;
    border: 2px dashed #828282;
    border-radius:50%;
    position:relative;
    display:none;
    &.run{
        animation: run_cir 5s;
        display:block;

        @keyframes run_cir {
            from {
                width:350px;
                height:350px
            }
            
          }
    }

    .active .text-circle{
        visibility: visible;
        opacity:1;
    }


    @media screen and (max-width: 600px){

        width:400px;
        height:400px;
    }
    
    @media screen and (max-width: 415px){
    
        width:300px;
        height:300px;
    }
    
    @media screen and (max-width: 350px){
        width:250px;
        height:250px;
    }
`

const Item = styled.div`

/* active */
    &.active{
        .item-circle{
            background:#aceb2f!important;
            .img{
                display:none;
            }
            .img-hv{
                display:block;
            } 
        }

    }

   

    /* end active */

    /* show */

    
    `


const Item_cir = styled.div`
    /* item_cir */

        width:120px;
        height:120px;
        border-radius:50%;
        background:#333;
        line-height:120px;
        text-align: center;
        /* transform: translate(155%,-55%); */
        display: inline-block;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity:1;

        @media screen and (max-width: 600px){
    
            width:100px;
            height:100px;
            line-height:100px;
        }
    
        @media screen and (max-width: 415px){
    
            width:50px;
            height:50px;
            line-height:50px;
        }

    /* end */

    :hover {
        background:#aceb2f!important;
        .img{
            display:none;
        }
        .img-hv{
            display:block;
        }
    }

    &.item-circle.it2 {
        top: 14.6%;
        left: 85.4%;
    }
    
    &.item-circle.it3 {
        top: 50%;
        left: 100%;
    }
    
    &.item-circle.it4 {
        top: 85.4%;
        left: 85.4%;
    }
    
    &.item-circle.it5 {
        top: 100%;
        left: 50%;
    }
    
    &.item-circle.it6 {
        top: 85.4%;
        left: 14.6%;
    }
    
    &.item-circle.it7 {
        top: 50%;
        left: 0;
    }
    
    &.item-circle.it8 {
        top: 14.6%;
        left: 14.6%;
    } 
`
const Item_img = styled.span`
    &.img{
        display:block;
    }
`

const Item_img_hv = styled.span`
    &.img-hv{
        display: none;
    }
`

const I_img = styled.img`
    max-width: 50px;
    width: 100%;
    object-fit: cover;
    @media screen and (max-width:415px){
        max-width: 25px;
    }
`

const Text_cir = styled.div`
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    // display:none;
    visibility: hidden;
    opacity: 0;
    font-family: 'Roboto', sans-serif;


    span{
        color:#aceb2f;
    }


    p{
        font-size:16px;
        color: #888;
        text-align: center;
        margin: 0;
        width: 100%;

        @media screen and (max-width:600px){
            display:none;

        }
    }

    @media screen and (max-width:415px){
        h4{
            font-size:18px;
        }
    }
   

    @media screen and (max-width:600px){
        p{
            margin:0;
        }
    }
`




export default Circle