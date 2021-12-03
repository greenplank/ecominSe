import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
import PageBanner from '../components/Common/PageBanner';
import PortfolioDetails from '../components/Portfolio/PortfolioDetails';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class Portfolio extends Component {
    render() {
        return (
            <>
                <NavbarOne />

                <PageBanner
                    pageTitle="
                    Vår portfölj"
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