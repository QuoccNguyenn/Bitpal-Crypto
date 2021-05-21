import React, { useState } from 'react'
import styled from 'styled-components'

    const arr_sl = [
        {
            img:"it1.png",
            name:"Bitcoin",
            price:"$55632.435002775",
            change:"3.58%"
        },{
            img:"it2.png",
            name:"Ethereum ",
            price:"$2318.6394678113",
            change:"11.92%"
        },{
            img:"it3.png",
            name:"Binance Coin",
            price:"$608.35717729277 ",
            change:"27.77%"
        },{
            img:"it4.png",
            name:"XRP",
            price:"$1.4246159741532",
            change:"16.28%"
        },{
            img:"it5.png",
            name:"Tether",
            price:"$1.0001068110163",
            change:"-0.01%"
        },{
            img:"it6.png",
            name:"Dogecoin",
            price:"$0.32894173351455",
            change:"-18.2%"
        },{
            img:"it7.png",
            name:"Cardano",
            price:"$1.2709588212979",
            change:"11.54%"
        },{
            img:"it8.png",
            name:"Polkadot",
            price:"$34.881774881819",
            change:"8.96%"
        },{
            img:"it9.png",
            name:"Bitcoin Cash",
            price:"$962.31401632457",
            change:"12.35%"
        },{
            img:"it10.png",
            name:"Litecoin",
            price:"$264.84288009173",
            change:"10.75%"
        },
    ]

const Slide_T=() =>{

    let[it_sl,Setit_sl]= useState(arr_sl);

    return(
        <Box_slide>
            {it_sl.map((it,idx)=>(
                <div key={idx} className="item">
                    <div className="img_item">
                        <img src={`images/${it.img}`} alt="" />
                    </div>

                    <div className="name_item">
                        {it.name}
                    </div>

                    <div className="price_item">
                        {it.price}
                    </div>

                    <div className="change_24_item">
                        {it.change}
                    </div>

                </div>
            ))}
        </Box_slide>
    );

}

const Box_slide = styled.div`
    height:100%;
    display:flex;
    flex-direction:row;
    justify-content: center;
    font-size:13px;

    .item{
        display:flex;
        flex-direction:row;
        align-items:center;
        font-family: 'Roboto', sans-serif;
        color: #c1c1c1;
        padding: 0 25px;
        box-sizing: border-box;

        .img_item {
            max-width: 16px;
        }

        .name_item{
            padding: 0 12px;
        }

        .price_item{
            padding-right:9px;
        }
    }
`

export default Slide_T