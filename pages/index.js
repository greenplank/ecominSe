import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import MainBanner from '../components/Home/MainBanner';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import ChooseEcomin from '../components/Home/ChooseEcomin';
import Feedback from '../components/Home/Feedback';
import WorkProcess from '../components/Home/WorkProcess';
import FunFactsTwo from '../components/Home/FunFactsTwo';
import CtaArea from '../components/Common/CtaArea';
import Partner from '../components/Common/Partner';
import Footer from '../components/Layouts/Footer';

class CreativeAgency extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <MainBanner />
                
                <About />

                <Services />

                <ChooseEcomin/>

                <WorkProcess />

                <Feedback /> 

                <FunFactsTwo />

                <CtaArea />

                <Partner />

                <Footer />
            </>
        );
    }
}

export default CreativeAgency;