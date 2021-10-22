import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import CaseStudies from '../components/StartupAgency/CaseStudies';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class Portfolio extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner
                    pageTitle="Vår portfölj"
                    BGImage="bg-three"
                />

                <CaseStudies />

                {/* <WorksStyleOne />

                <WorksStyleTwo /> */}

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default Portfolio;