import React from 'react';
import { useHistory } from 'react-router-dom';
import Typing from 'react-typing-animation';
import { motion } from "framer-motion";
import { pageTransition, pageVariants } from '../../util/framerStyles';
import './landing.css'


const Landing = ({ Component, pageProps, router }) => {
    const history = useHistory();
    return (
        <div className="landing_main">
            {/* <div className="landing_sub">
            </div> */}
            <div className="landing_content">
                <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    transition={pageTransition}
                    variants={pageVariants}
                    >
                    <div {...pageProps} className="landingMain"> 
                        <div className="landingBio">
                            <Typing className="typeingAni">
                                <h1 className="landingInfoSub info-sub-one"> With Love,</h1>
                                <h3 className="landingInfoSub info-sub-two"> Adiah</h3>
                            </Typing>

                            <div className="btn-div">
                                <button className="enterWorldBtn" onClick={() => history.push(`/adiah${history.location.pathname}`)}>Enter </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
                
            </div>
        </div>
    )
}

export default Landing;