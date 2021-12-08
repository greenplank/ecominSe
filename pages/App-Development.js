import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
import PageBanner from '../components/Common/PageBanner';
import AppDevelopmentDetailsContent from '../components/Services/AppDevelopmentDetailsContent';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';
import Head from "next/head";


class AppDev extends Component {
    render() {
        return (
            <>
                <Head>
                    <title>Utvecklingstjänster för mobilappar | Ecomin IT-lösning</title>
                    <meta name="title" content="Utvecklingstjänster för mobilappar | Ecomin IT-lösning" />
                    <meta name="description" content="Mobila applikationsutvecklingstjänster från Ecomin IT Solution tillhandahåller anpassade mobila upplevelser för mobila enheter, bärbara enheter, IoT och augmented reality-enheter." />
                </Head>

                <NavbarOne />

                <PageBanner
                    pageTitle="App Development"
                    BGImage="bg-one"
                />

                <AppDevelopmentDetailsContent />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default AppDev;