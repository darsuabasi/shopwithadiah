import React from 'react';
import styled from 'styled-components';
import InfoSection from '../InfoSection/InfoSection';
import { InfoData } from './../Data/InfoData';
// import eyespye from './assets/eyespy.jpg';
// import illmuse from './assets/illmuse.png';
import saweetie from './assets/saweetie.jpg';
// import montree from './assets/montree.jpg';
// import kisses from './assets/kisses.heic';



const AboutHome = styled.div`
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 1400px;
    background: #f8d7c4;
`;

const AboutImage = styled.img`
    width: 100%;
    z-index: -1;
    margin-bottom: -1800px;
    ${'' /* mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));  */}
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)); 


    ${'' /* @media screen and (min-width: 4000px) {
      margin-top: 68px;
      margin-bottom: -4800px;
    } */}

    @media screen and (max-width: 1300px) {
      margin-top: 68px;
      margin-bottom: -1600px;
    }

    @media screen and (max-width: 1100px) {
      margin-top: 68px;
      margin-bottom: -1400px;
    }

    @media screen and (max-width: 900px) {
        margin-bottom: -1120px;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: -870px;
    }

    @media screen and (max-width: 600px) {
        margin-bottom: -700px;
    }

    @media screen and (max-width: 500px) {
        margin-bottom: -500px;
    }

    @media screen and (max-width: 350px) {
        margin-bottom: -400px;
    }

    @media screen and (max-width: 250px) {
        margin-bottom: -300px;
    }
`;

const Adiah = () => {
    return (
        <AboutHome style={{paddingTop:'0vh'}}>

            <div>
                <AboutImage src={saweetie} alt="" />
                <InfoSection {...InfoData}/>
            </div>
        
        </AboutHome>
    )
}

export default Adiah
