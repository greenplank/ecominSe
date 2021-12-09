import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
import PageBanner from '../components/Common/PageBanner';
import WebDetailsContent from '../components/Services/WebDetailsContent';
import WebPackages from '../components/Services/WebPackages';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';
import Head from "next/head";

class WebDevelopment extends Component {
    render() {
        return (
            <>
              <Head>
                    <title>Webbplatsdesign och utvecklingstjänster | Ecomin IT-lösning</title>
                    <meta name="title" content="Webbplatsdesign och utvecklingstjänster | Ecomin IT-lösning" />
                    <meta name="description" content="Med kvalitativa och professionella webbutvecklingstjänster kan du ta ditt företag online och generera fler försäljningar och potentiella kunder." />
                </Head>

                <NavbarOne />

                <PageBanner
                    pageTitle="Webbutveckling"
                    BGImage="bg-two"
                />

                <WebDetailsContent />

                <WebPackages />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default WebDevelopment;