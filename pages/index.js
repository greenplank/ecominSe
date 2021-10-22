import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import MainBanner from '../components/ItAgency/MainBanner';
import About from '../components/CreativeAgency/About';
import Services from '../components/CreativeAgency/Services';
import Feedback from '../components/Common/Feedback';
import WorkProcess from '../components/CreativeAgency/WorkProcess';
import FunFactsTwo from '../components/Common/FunFactsTwo';
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

                <WorkProcess />

                {/* <OurWorks /> */}

                <Feedback /> 

                {/* <PricingStyleOne />  */}

                {/* <Team /> */}

                <FunFactsTwo />

                {/* <LatestNewsSlider /> */}

                <CtaArea />

                <Partner />

                <Footer />
            </>
        );
    }
}

export default CreativeAgency;