import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import PortfolioDetails from '../components/Portfolio/PortfolioDetails';
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

                <PortfolioDetails />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default Portfolio;