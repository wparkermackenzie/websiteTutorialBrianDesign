import React from 'react';
import '../../App.css';
import HeroSection from '../heroSection.js';
import Cards from '../cards';
import Footer from '../footer.js';

function Home() {
    return(
        <>
            <HeroSection />
            <Cards />
            <Footer/>
        </>
    );
}

export default Home;