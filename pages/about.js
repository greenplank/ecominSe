import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
import PageBanner from '../components/Common/PageBanner';
import AboutContent from '../components/About/AboutContent';
import FoundationWorkDetailsContent from '../components/Services/FoundationWorkDetailsContent';
import Partner from '../components/Common/Partner';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import CtaAreaThree from '../components/Common/CtaAreaThree';
import EcomVsFrelancer from '../components/Services/EcomVsFrelancer';
import About from '../components/About/About';
import Footer from '../components/Layouts/Footer';

class Aabout extends Component {
    render() {
        return (
            <>
                <NavbarOne />

                <PageBanner
                    pageTitle="About Us"
                    BGImage="bg-one"
                />


                <AboutContent />
                
                <EcomVsFrelancer />

                <CtaAreaThree />

                <About />

                <FoundationWorkDetailsContent />

                <Partner />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default Aabout;