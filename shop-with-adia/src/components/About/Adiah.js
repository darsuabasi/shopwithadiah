import React from 'react';
import styled from 'styled-components';
import InfoSection from '../InfoSection/InfoSection';
import { InfoData } from './../Data/InfoData';



const Adiah = () => {
    return (
        <div style={{paddingTop:'0vh'}}>
            {/* <div>
                <h1> about adiah</h1>
            </div> */}

            <div>
                <InfoSection {...InfoData}/>
            </div>
            

        </div>
    )
}

export default Adiah
