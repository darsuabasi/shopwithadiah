import React, { useState, useRef, useEffect} from 'react';
import styled, { css } from 'styled-components/macro';
import { exploreData } from '../Data/ExploreData';
import Button from '../Button/Button';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack} from 'react-icons/io5';


const ExploreMain = styled.section`
    height: 100vh;
    max-height: 11000px;
    position: relative;
    overflow: hidden;
`;

const ExploreSliderWrapper =  styled.div `
    width: 50%;
    ${'' /* height: 100%; */}
    display: flex;
    justify-content: center;
    align-items: center; 
    overflow: hidden;
    ${'' /* float: left; */}
    ${'' /* position: relative */}
`;

const SliderSlide = styled.div`
    z-index: 1;
    width: 50%;
    height: 100%;
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
    width: 50vw;
    height: 100vh;
    object-fit: cover;
`;

const SliderContent = styled.div`
    ${'' /* position: relative; */}
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
    width: 50%;
    height: 100%;
    top: 0;
    left: 0;
    background: #000;
`



const Explore = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    // for slider autoplay
    // useEffect(() => {
    //     const nextSlide = () => {
    //         setCurrent(current => (current === length - 1 ? 0 : current + 1));
    //     }
    //     timeout.current = setTimeout(nextSlide, 3000);

    //     return function() {
    //         if(timeout.current) {
    //             clearTimeout(timeout.current)
    //         }
    //     }
    // }, [current, length])


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
                                        {/* <h1> {slide.title} </h1> */}
                                        {/* <p> {slide.price} </p> */}
                                        {/* <Button css={`max-width: 160px`} to={slide.path} primary="true"> 
                                            {slide.label} 
                                            <Arrow/>
                                        </Button> */}
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
                <h1> Hello left div</h1>
            </ExploreLeftDiv>

        </ExploreMain>
    )

}


export default Explore;