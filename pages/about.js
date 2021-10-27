import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import AboutContent from '../components/About/AboutContent';
import FoundationWorkDetailsContent from '../components/Services/FoundationWorkDetailsContent';
import Partner from '../components/Common/Partner';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import CtaAreaThree from '../components/Common/CtaAreaThree';
import About from '../components/About/About';
import Footer from '../components/Layouts/Footer';

class Aabout extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner
                    pageTitle="About Us"
                    BGImage="bg-one"
                />

                <AboutContent />

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