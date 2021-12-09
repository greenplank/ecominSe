import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
import PageBanner from '../components/Common/PageBanner';
import CloudHostingDetailsContent from '../components/Services/CloudHostingDetailsContent';
// import SEOPackages from '../components/Services/SEOPackages';
// import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';
import Head from "next/head";

class CloudHosting extends Component {
    render() {
        return (
            <>

                <Head>
                    <title>Cloud Hosting | 4X mer hastighet | Tidsbegränsat erbjudande - Ecomin IT-lösning</title>
                    <meta name="title" content="Cloud Hosting | 4X mer hastighet | Tidsbegränsat erbjudande - Ecomin IT-lösning" />
                    <meta name="description" content="Vi använde en datadriven granskningsmetod för att välja de bästa moln leverantörerna för personliga, affärs- och företagskrav 2021." />
                </Head>

                <NavbarOne />

                <PageBanner
                    pageTitle="Cloud Hosting
                    "
                    BGImage="bg-one"
                />

                <CloudHostingDetailsContent />

                <Footer />
            </>
        );
    }
}

export default CloudHosting;