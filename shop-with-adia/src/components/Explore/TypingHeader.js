import React, {useEffect, useRef, useState} from 'react';
import Typewriter from 't-writer.js';
import { typingData } from '../Data/TypingData';
import styled, { css } from 'styled-components/macro';
// import { bounce, hinge, rotateInDownLeft, rubberBand, slideInRight } from "react-animations";


const WrapperDiv = styled.div `
  width: 28rem;
`;

const TypingSlide = styled.div `
`;
const Slide = styled.div `
  color: #fff;
  font-size: 40px
`;

const TypingHeader = ({changingHeaders}) => {

  const [current, setCurrent] = useState(0);
    const length = changingHeaders.length;
    const timeout = useRef(null);

    // useEffect(() => {
    //     const nextHeading = () => {
    //         setCurrent(current => (current === length - 1 ? 0 : current + 1));
    //     }
    //     timeout.current = setTimeout(nextHeading, 5000);

    //     return function() {
    //         if(timeout.current) {
    //             clearTimeout(timeout.current)
    //         }
    //     }
    // }, [current, length])

    const nextHeading = () => {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevHeading = () => {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(changingHeaders) || changingHeaders.length <= 0) {
        return null 
    }
  

// writer2
  // .type("create complex effects")
  // .rest(500)
  // .clear()
  // .changeTypeColor('red')
  // .type("defy user expectations")
  // .rest(500)
  // .clear()
  // .changeTypeColor('blue')
  // .type("generate a custom loop")
  // .rest(500)
  // .clear()
  // .changeTypeColor('black')
  // .then(writer1.start.bind(writer1))

        

    return (
        <div class="tw">
          <WrapperDiv>
            {typingData.map((newhead, index) => {
                    return (
                        <TypingSlide key={index}>
                            {index === current && (
                                <Slide>
                                  <h1> {newhead.phrase} </h1>     
                                </Slide>
                            )} 
                        </TypingSlide>
                    )
                })} 
          
          </WrapperDiv>
        </div>
    )
}




export default TypingHeader;