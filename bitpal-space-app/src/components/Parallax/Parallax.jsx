import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';

function Parallaxie (props) {
    return(
        <Parallax className="custom-class" y={[-40, 0]} tagOuter="figure">
            <Image src={props.src}/>
        </Parallax>
    );
}


const Image = styled.img`
    z-index: -1;
    max-width: 125%;

    @media screen and (max-width: 768px){
        max-width: 270%;
        margin-left: -70%;
    }
`

export default Parallaxie;