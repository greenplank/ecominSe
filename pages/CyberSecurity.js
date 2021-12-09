import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
import PageBanner from '../components/Common/PageBanner';
import CyberSecurityDetailsContent from '../components/Services/CyberSecurityDetailsContent';
import Footer from '../components/Layouts/Footer';
import Head from "next/head";

class CyberSecurity extends Component {
    render() {
        return (
            <>

                <Head>
                    <title>Cybersäkerhetstjänster | Ecomin IT-lösning</title>
                    <meta name="title" content="Cybersäkerhetstjänster | Ecomin IT-lösning" />
                    <meta name="description" content="Ecomin IT Solution cybersäkerhetstjänster ger en ny nivå av cyberimmunitet för din organisation genom att kombinera intelligens och kunskap.
" />
                </Head>

                <NavbarOne />

                <PageBanner
                    pageTitle="Cybersäkerhet"
                    BGImage="bg-one"
                />

                <CyberSecurityDetailsContent />

                <Footer />
            </>
        );
    }
}

export default CyberSecurity;