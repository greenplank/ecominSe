import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
import PageBanner from '../components/Common/PageBanner';
import ReactNextDetailsContent from '../components/Services/ReactNextDetailsContent';
// import SEOPackages from '../components/Services/SEOPackages';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';
import Head from "next/head";

class ReactNext extends Component {
    render() {
        return (
            <>
                   <Head>
                    <title>Tjänster Företag | Anställ Best React & Next.js-utvecklare - Ecomin IT Solution</title>
                    <meta name="title" content="Tjänster Företag | Anställ Best React & Next.js-utvecklare - Ecomin IT Solution" />
                    <meta name="description" content="React.js låter dig skapa visuellt tilltalande och snabba användargränssnitt för onlineappar. Du kan dra nytta av React.js snabba prestanda, enastående gränssnittsdesign och anpassningsförmåga." />
                </Head>

                <NavbarOne />

                <PageBanner
                    pageTitle="React&NextJs utveckling"
                    BGImage="bg-one"
                />

                <ReactNextDetailsContent />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default ReactNext;