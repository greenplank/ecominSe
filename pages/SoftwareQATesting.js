import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
import PageBanner from '../components/Common/PageBanner';
import SoftwareQADetailsContent from '../components/Services/SoftwareQADetailsContent';
import Footer from '../components/Layouts/Footer';
import Head from "next/head";

class CyberSecurity extends Component {
    render() {
        return (
            <>
                <Head>
                    <title>Mjukvarutestning och QA-tjänster - Ecomin IT Solution
</title>
                    <meta name="title" content="Mjukvarutestning och QA-tjänster - Ecomin IT Solution" />
                    <meta name="description" content="QA och mjukvarutesttjänster är utformade för att verifiera att programvaran uppfyller alla kriterier och förväntningar hos användarna." />
                </Head>

                <NavbarOne />

                <PageBanner
                    pageTitle="Software QA & Testing"
                    BGImage="bg-one"
                />

                <SoftwareQADetailsContent />

                <Footer />
            </>
        );
    }
}

export default CyberSecurity;