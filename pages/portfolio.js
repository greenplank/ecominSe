import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import CaseStudies from '../components/Portfolio/CaseStudies';
import CaseStudies from '../components/Portfolio/CaseStudies';
import CaseStudies from '../components/Portfolio/CaseStudies';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class Portfolio extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner
                    pageTitle="Our portfolio"
                    BGImage="bg-three"
                />

                <CaseStudies />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default Portfolio;