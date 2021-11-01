import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import CyberSecurityDetailsContent from '../components/Services/CyberSecurityDetailsContent';
// import SEOPackages from '../components/Services/SEOPackages';
// import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';
import Head from "next/head";

class CyberSecurity extends Component {
    render() {
        return (
            <>

                <Head>
                    <meta name="title" content="Cyber Security Services | Ecomin IT Solution" />
                    <meta name="description" content="Ecomin IT Solution cybersecurity services provide a new level of cyber-immunity for your organisation by combining intelligence and knowledge." />
                </Head>

                <NavbarTwo />

                <PageBanner
                    pageTitle="Cyber Security"
                    BGImage="bg-one"
                />

                <CyberSecurityDetailsContent />

                <Footer />
            </>
        );
    }
}

export default CyberSecurity;