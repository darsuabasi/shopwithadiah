import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const Section = styled.section `
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;
`;
const Container = styled.div `
    padding: 3rem calc((100vw-1300px) /2 );
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media screen and (max-width: 760px) {
        grid-template-columns: 1fr;
    }
`;

const ColumnLeft = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-itms: center;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? '2' : '1')}

    h1 {
        font-size: clamp(1.5rem, 6vw, 2rem);
        margin-bottom: 1rem
    }

    p {
        margin-bottom: 2rem; 
    }
`;


const ColumnRight = styled.div `
    display: flex;
    padding: 1rem 2rem;
    justify-content: center;
    align-itms: center;
    order: ${({reverse}) => (reverse ? '1' : '2')};

    @media screen and (max-width: 760px) {
        order: ${({reverse}) => (reverse ? '2' : '1')}
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover
    }

    @media screen and (max-width: 760px) {
        width: 90%;
        height: 90%;
    }

`;


const InfoSection = ({heading, paragraphOne, paragraphTwo, buttonLabel, image}) => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1> {heading} </h1>
                    <p> {paragraphOne} </p>
                    <p> {paragraphTwo} </p>
                    <Button primary="true" to="/adiah/shop"> {buttonLabel} </Button>
                </ColumnLeft>
                <ColumnRight reverse={buttonLabel}>
                    <img src={image} alt="Favorites" />
                </ColumnRight>
            </Container>

        </Section>
    )
}



export default InfoSection;