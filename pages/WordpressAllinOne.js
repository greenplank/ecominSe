import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
import PageBanner from '../components/Common/PageBanner';
import WordpressDetailsContent from '../components/Services/WordpressDetailsContent';
import WordpressPackages from '../components/Services/WordpressPackages';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';


class WordpressAllinOne extends Component {
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
                    pageTitle="Wordpress allt i ett"
                    BGImage="bg-two"
                />

                <WordpressDetailsContent />

                <WordpressPackages />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default WordpressAllinOne;