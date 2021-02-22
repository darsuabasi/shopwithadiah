import React, { useState, useRef, useEffect} from 'react';
import styled, { css } from 'styled-components/macro';
import { keyframes } from "styled-components";
import { exploreData } from '../Data/ExploreData';
import Button from '../Button/Button';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack} from 'react-icons/io5';
import TypingHeader from './TypingHeader.js';
import { typingData } from '../Data/TypingData';
import { shake, bounce, hinge, rotateInDownLeft, rubberBand, slideInRight, slideInLeft } from "react-animations";


const ExploreMain = styled.section`
    height: 100vh;
    max-height: 11000px;
    position: relative;
    overflow: hidden;
    padding-top: 4.8rem;
    display: grid;
    grid-template-column: 1fr 1fr;
    background: #f8d7c4;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
        overflow-y: scroll !important;
    }
`;

const ExploreSliderWrapper =  styled.div `
    width: 40%;
    height: 100%;
    display: flex;
    float: right;
    justify-content: center;
    align-items: center; 
    overflow: hidden;

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

const SliderSlide = styled.div`
    z-index: 1;
    width: 40%;
    height: 100%;

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

const Slider = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        content: ''; 
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        right: 0;
        overflow: hidden; 
        opacity: 0.4;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.6) 100%)
    }

`;

const SliderImages = styled.img`
    position: absolute; 
    top: 0;
    right: 0;
    width: 40vw;
    height: 100vh;
    object-fit: stretch;

    @media screen and (max-width: 1000px) {
        width: 100vw;
    }
`;

const SliderContent = styled.div`
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(50%-100px);
    color: #000;

    h1 {
        font-size: clamp(1rem, 8vw, 5rem);
        font-weight: 500;
        text-transform: uppercase;
        text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
        text-align: right;
        margin-bottom: 0.8rem
    }

    p {
        margin-bottom: 1.2rem;
        text-shadow: 0px 0px 20px rgba(0,0,0,0.4); 

    }
`;

const Arrow = styled(IoMdArrowRoundForward)`
    magrin-left: 0.3rem
`;

const ExploreButtons = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 10;
`;

const arrowButtons = css `
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right : 1rem;
    user-select: none;
    transition: 0.4s;

    &:hover {
        background: #cd853f;
        transform: scale(1.05)
    }
`;

const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
    ${arrowButtons}
`;

const ExploreLeftDiv = styled.div `
    width: 60%;
    background: #f8d7c4;
    height: 100vh;
    float: left;

    @media screen and (max-width: 1000px) {
        width: 100%;
        display: none;
    }
`
const LeftDivSub = styled.div `
    width: 100%;
    height: 100%;
    justify-content: center;
    color: #000;
    padding: 10%;
    padding-top: 25%;
    background: #f8d7c4;
    text-align: center;
    border: dotted 8px #ffffff;
`




const Explore = ({slides}) => {

    const Bounce = styled.div`animation: 10s ${keyframes `${bounce}`} infinite`;
    // const Flip = styled.div`animation: 5s ${keyframes `${flip}`} infinite`;
    const RotateInDownLeft = styled.div`animation: 5s ${keyframes `${rotateInDownLeft}`} infinite`;
    const RubberBand = styled.div`animation: 5s ${keyframes `${rubberBand}`} infinite`;
    // const Tada = styled.div`animation: 5s ${keyframes `${tada}`} infinite`;
    const Hinge = styled.div`animation: 8s ${keyframes `${hinge}`} infinite`;
    // const Jello = styled.div`animation: 5s ${keyframes `${jello}`} infinite`;
    const SlideInRight = styled.div`animation: 15s ${keyframes `${slideInRight}`} infinite`;
    const SlideInLeft = styled.div`animation: 15s ${keyframes `${slideInLeft}`} infinite`;
    const Shake = styled.div`animation: 5s ${keyframes `${shake}`} infinite`;

    
    // const tadaFlip = merge(tada, flip);

    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    // for slider autoplay
    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1));
        }
        timeout.current = setTimeout(nextSlide, 4000);

        return function() {
            if(timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    }, [current, length])


    const nextSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null 
    }


    return (
        <ExploreMain className="explore_main">
            <ExploreSliderWrapper>
                {exploreData.map((slide, index) => {
                    return (
                        <SliderSlide key={index}>
                            {index === current && (
                                <Slider>
                                    <SliderImages src={slide.image} alt={slide.alt} />
                                    <SliderContent>
                                    
                                    </SliderContent>   
                                </Slider>
                            )} 
                        </SliderSlide>
                    )
                })}
                <ExploreButtons>
                    <PrevArrow onClick={prevSlide} />
                    <NextArrow onClick={nextSlide } />
                </ExploreButtons>
            </ExploreSliderWrapper>
            {/* <div className="explore_header_div">
                <h1 className="explore_header_content"> From me to you, with love</h1>
            </div> */}

            <ExploreLeftDiv> 
                <LeftDivSub>
                    {/* <Bounce>  */}
                        <h1 style={{fontSize: '55px'}}> I took some of my favorite</h1>
                    {/* </Bounce> */}
                    {/* <SlideInLeft>  */}
                        <h3 style={{fontSize: '42px'}}> products and turned </h3>
                        {/* <h3 style={{fontSize: '45px', color: '#fff'}}> skin care products</h3> */}
                    {/* </SlideInLeft> */}
                    {/* <SlideInRight>  */}
                        <h1 style={{fontSize: '38px'}}> them into ads</h1>
                        {/* <h1 style={{fontSize: '40px', color: '#fff'}}> fashion pieces</h1> */}
                    {/* </SlideInRight> */}
                    {/* <SlideInLeft>  */}
                        {/* <h3 style={{fontSize: '34px'}}> into ads</h3> */}
                    {/* </SlideInLeft> */}
                    {/* <SlideInRight>  */}
                        {/* <h1 style={{fontSize: '30px'}}> ads </h1> */}
                    {/* </SlideInRight> */}


                    {/* <Shake> 
                        <h3 style={{fontSize: '65px', color: '#fff'}}> fragrances. </h3>
                    </Shake> */}

                    {/* <TypingHeader changingHeaders={typingData}/> */}
                </LeftDivSub>
            </ExploreLeftDiv>

            

        </ExploreMain>
    )

}


export default Explore;