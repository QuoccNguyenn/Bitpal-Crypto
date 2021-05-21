import React, { useState } from 'react';
import styled from 'styled-components';

function ScrollButton() {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true);
        }
        else if(scrolled <= 300){
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return(
        <BtnScroll style = {{display: visible ? 'inline' : 'none'}} onClick={scrollToTop}>
            <FaArrowUp>
                <i className='fas fa-angle-down'></i>
                <div></div>
            </FaArrowUp>
        </BtnScroll>
    );
}

const BtnScroll = styled.div`
    position: fixed;
    width: 40px;
    height: 40px;

    right: 15px;
    bottom: 25px;

    font-size: 1rem;
    text-align: center;
    cursor: pointer;

    color: #fff;
    background: #aceb2f;
    z-index: 7;

    div{
        width: 2px;
        height: 0px;
        background: #fff;
        margin: auto;
        position: absolute;
        left: 19px;
        bottom: 12px;
    }

    :hover {
        background: #000;

        div{
            height: 13px;
            transition: 0.2s all ease-in-out;
        }

        a{
            margin-top: 2px;
        }
    }
`

const FaArrowUp = styled.a`
    display: block;
    margin-top: 6px;

    transform: rotate(180deg);
`

export default ScrollButton;