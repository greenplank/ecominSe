import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
import PageBanner from '../components/Common/PageBanner';
import SEODetailsContent from '../components/Services/SEODetailsContent';
import SEOPackages from '../components/Services/SEOPackages';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';
import Head from "next/head";

class SearchOptimization extends Component {
    render() {
        return (
            <>
                <Head>
                    <meta name="title" content="SEO Services from Ecomin: Turn Traffic Increases Into Revenue" />
                    <meta name="description" content="SEO, or search engine optimization, is the practise of improving search engine results and driving more visitors to a website with the ultimate objective of increasing sales." />
                </Head>

                <NavbarOne />

                <PageBanner
                    pageTitle="sökmotoroptimering
                    "
                    BGImage="bg-one"
                />

                <SEODetailsContent />

                <SEOPackages />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default SearchOptimization;