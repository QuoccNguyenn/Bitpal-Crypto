import React from 'react'
import styled from 'styled-components'


const Content_box=(props)=>{
    let {content} = props;
    return(
        <Box_content>
            <h1>{content.h1}</h1>
            <h5>{content.h5}</h5>
            <p>{content.p}</p>
        </Box_content>
    );
}

const Box_content = styled.div`
h1{
    color:white;
    font-weight:600;
    font-family: 'Montserrat', sans-serif;
}

h5{
    color: #ffffff;
    font-size: 18px;
    font-style: italic;
    font-weight: 400;
    line-height: 35px;
    margin: 11px 0 0 0;
    font-family: 'Roboto', sans-serif;
}

p{
    text-align: left;
    display: block;
    margin: 14px 0 0;
    font-family: "Open Sans",sans-serif;
    line-height: 26px;
    font-weight: 400;
    margin-top: 28px;
    color: #888;

    span{
        color: #d4d4d4;
    }
}
`
export default Content_box