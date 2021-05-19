import React from 'react';
import styled from 'styled-components';

function HeaderTitle(props) {
    return(
        <HeaderContainer className='row'>
            <HeaderContent>{props.header}</HeaderContent>
            <Line/>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    margin-bottom: 5%;
`

const HeaderContent = styled.div`
    width: 100%;
    color: #fff;
    font-size: 40px;
    font-family: sans-serif;

    text-align: center;
    z-index: 1;
`
const Line = styled.div`
    width: 40px;
    height: 2px;
    background: #aceb2f;

    margin: auto;
    z-index: 1;
`

export default HeaderTitle;