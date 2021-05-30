import React from 'react';
import '../App.css';
import { Button } from './button';
import './heroSection.css';
import myvid from '../../src/videos/IMG_1786_Trim.mp4';

function HeroSection() {
    return(
        <div className='hero-container'>
            <video src={myvid} autoPlay loop muted>
                FUBAR
            </video>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button 
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    >
                        GET STARTED
                </Button>
                <Button 
                    className='btns' 
                    buttonStyle='btn--primary' 
                    buttonSize='btn--large'
                    onClick={console.log('hello there')}
                >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;