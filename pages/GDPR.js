import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
import PageBanner from '../components/Common/PageBanner';
import GDPRDetailsContent from '../components/Services/GDPRDetailsContent';
// import SEOPackages from '../components/Services/SEOPackages';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';
import Head from "next/head";

class WooCommerce extends Component {
    render() {
        return (
            <>
                <Head>
                    <title>GDPR</title>
                </Head>

                <NavbarOne />

                <PageBanner
                    pageTitle="GDPR"
                    BGImage="bg-one"
                />

                <GDPRDetailsContent />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default WooCommerce;