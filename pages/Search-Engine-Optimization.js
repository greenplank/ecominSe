import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
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

                <NavbarTwo />

                <PageBanner
                    pageTitle="Search Engine Optimization"
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