import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import { InfoData, InfoDataTwo, InfoDataThree, InfoDataFour, InfoDataFive, InfoDataSix } from '../Data/InfoData';

const Section = styled.section `
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;
    background:#f8d7c4;
`;

// const Container = styled.div `
//     padding: 3rem calc((100vw-1300px) /2 );
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     grid-template-rows: 800px;

//     @media screen and (max-width: 760px) {
//         grid-template-columns: 1fr;
//     }
// `;

const Container = styled.div `
    padding: 3rem calc((100vw-1300px) /2 );
    display: flex;
    flex-basis: 100%;
    flex: 1;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    ${'' /* grid-template-rows: 800px; */}

    @media screen and (max-width: 760px) {
        grid-template-columns: 1fr;
    }
`;

const ColumnLeft = styled.div `
    ${'' /* display: flex;
    flex-direction: column;
    order: ${({reverse}) => (reverse ? '2' : '1')} */}


    justify-content: center;
    align-itms: center;
    line-height: 1.4;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    background:#f8d7c4;

    h1 {
        font-size: clamp(1.5rem, 6vw, 2rem);
        margin-bottom: 1rem
    }

    p {
        margin-bottom: 2rem; 
        font-size: clamp(1rem, 4vw, 22px)
    }
`;



const ColumnRight = styled.div `
    ${'' /* display: flex;
    order: ${({reverse}) => (reverse ? '1' : '2')}; */}

    justify-content: center;
    align-itms: center;
    padding: 1rem 2rem;
    display: flex;
    float: left;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;

    @media screen and (max-width: 768px) {
        order: ${({reverse}) => (reverse ? '2' : '1')}
    }

    img {
        width: 100%;
        height: 622px;
        object-fit: cover;
        border: dotted 8px #ffffff;
    }

    @media screen and (max-width: 768px) {
        width: 90%;
        height: 90%;
    }
`;



// -----------

const ContainerTwo = styled.div `
    padding: 3rem calc((100vw-1300px) /2 );
    display: flex;
    flex-basis: 100%;
    flex: 1;

    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    width: 100%;
    ${'' /* grid-template-rows: 800px; */}

    @media screen and (max-width: 760px) {
        grid-template-columns: 1fr;
    }
`;


const InfoSection = ({heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image}) => {
    return (
        <Section>

            <Container>
                {InfoDataFive.map((item, index) => (
                    <>
                        <ColumnLeft reverse={item.reverse}>
                            <h1> {item.heading} </h1>
                            <p> {item.paragraphOne} </p>
                            <p> {item.paragraphTwo} </p>
                            <Button primary="true" to="/adiah/shop"> {item.buttonLabel} </Button>
                        </ColumnLeft>

                        <ColumnRight reverse={item.reverse}>
                            <img src={item.image} alt="faves"/>
                        </ColumnRight>
                    </>
                ))}
            </Container>
            

            <ContainerTwo>
                {InfoDataTwo.map((item, index) => (
                    <>
                        <ColumnLeft>
                            <h1> {item.heading} </h1>
                            <p> {item.paragraphOne} </p>
                            <p> {item.paragraphTwo} </p>
                            <Button primary="true" to="/adiah/shop"> {item.buttonLabel} </Button>
                        </ColumnLeft>

                        <ColumnRight>
                            <img src={item.image} alt="faves"/>
                        </ColumnRight>
                    </>
                ))}
            </ContainerTwo>

            <Container>
                {InfoData.map((item, index) => (
                    <>
                        <ColumnLeft reverse={false}>
                            <h1> {item.heading} </h1>
                            <p> {item.paragraphOne} </p>
                            <p> {item.paragraphTwo} </p>
                            <Button primary="true" to="/adiah/shop"> {item.buttonLabel} </Button>
                        </ColumnLeft>

                        <ColumnRight reverse={item.reverse}>
                            <img src={item.image} alt="faves"/>
                        </ColumnRight>
                    </>
                ))}
            </Container>

            <ContainerTwo>
                {InfoDataFour.map((item, index) => (
                    <>
                        <ColumnLeft reverse={item.reverse}>
                            <h1> {item.heading} </h1>
                            <p> {item.paragraphOne} </p>
                            <p> {item.paragraphTwo} </p>
                            <Button primary="true" to="/adiah/shop"> {item.buttonLabel} </Button>
                        </ColumnLeft>

                        <ColumnRight reverse={item.reverse}>
                            <img src={item.image} alt="faves"/>
                        </ColumnRight>
                    </>
                ))}
            </ContainerTwo>

            <Container>
                {InfoDataThree.map((item, index) => (
                    <>
                        <ColumnLeft reverse={item.reverse}>
                            <h1> {item.heading} </h1>
                            <p> {item.paragraphOne} </p>
                            <p> {item.paragraphTwo} </p>
                            <Button primary="true" to="/adiah/shop"> {item.buttonLabel} </Button>
                        </ColumnLeft>

                        <ColumnRight reverse={item.reverse}>
                            <img src={item.image} alt="faves"/>
                        </ColumnRight>
                    </>
                ))}
            </Container>

            <ContainerTwo>
                {InfoDataSix.map((item, index) => (
                    <>
                        <ColumnLeft reverse={item.reverse}>
                            <h1> {item.heading} </h1>
                            <p> {item.paragraphOne} </p>
                            <p> {item.paragraphTwo} </p>
                            <Button primary="true" to="/adiah/shop"> {item.buttonLabel} </Button>
                        </ColumnLeft>

                        <ColumnRight reverse={item.reverse}>
                            <img src={item.image} alt="faves"/>
                        </ColumnRight>
                    </>
                ))}
            </ContainerTwo>

        </Section>
    )
}



export default InfoSection;