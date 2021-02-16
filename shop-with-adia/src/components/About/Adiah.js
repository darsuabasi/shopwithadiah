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
    margin-bottom: -2000px;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)); 


    @media screen and (max-width: 1300px) {
      margin-top: 20px;
      margin-bottom: -1850px;
    }

    @media screen and (max-width: 1200px) {
      margin-top: 20px;
      margin-bottom: -1700px;
    }

    @media screen and (max-width: 1100px) {
      ${'' /* margin-top: 20px; */}
      margin-bottom: -1550px;
    }

    @media screen and (max-width: 1000px) {
      ${'' /* margin-top: 20px; */}
      margin-bottom: -1400px;
    }

    @media screen and (max-width: 900px) {
        ${'' /* margin-top: 20px; */}
        margin-bottom: -1350px;
    }

    @media screen and (max-width: 850px) {
        ${'' /* margin-top: 20px; */}
        margin-bottom: -1250px;
    }

    @media screen and (max-width: 800px) {
        ${'' /* margin-top: 20px; */}
        margin-bottom: -1180px;
    }

    @media screen and (max-width: 750px) {
        ${'' /* margin-top: 20px; */}
        margin-bottom: -1100px;
    }

    @media screen and (max-width: 700px) {
        margin-bottom: -980px;
    }

    @media screen and (max-width: 650px) {
        margin-bottom: -900px;
    }

    @media screen and (max-width: 600px) {
        margin-bottom: -860px;
    }

    @media screen and (max-width: 550px) {
        margin-bottom: -750px;
    }

    @media screen and (max-width: 500px) {
        margin-bottom: -590px;
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
