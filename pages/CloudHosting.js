import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
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
                    <meta name="title" content="Cloud Hosting | 4X More Speed | Limited Time Offer - Ecomin IT Solution" />
                    <meta name="description" content="We used a data-driven review approach to select the top cloud hosting providers for personal, business, and enterprise requirements in 2021." />
                </Head>

                <NavbarTwo />

                <PageBanner
                    pageTitle="Cloud Hosting"
                    BGImage="bg-one"
                />

                <CloudHostingDetailsContent />

                <Footer />
            </>
        );
    }
}

export default CloudHosting;