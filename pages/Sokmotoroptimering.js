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
                    <title>SEO-tjänster från Ecomin: Förvandla trafikökningar till intäkter
                    </title>
                    <meta name="title" content="SEO-tjänster från Ecomin: Förvandla trafikökningar till intäkter
" />
                    <meta name="description" content="SEO, eller sökmotoroptimering, är metoden att förbättra sökmotorernas resultat och locka fler besökare till en webbplats med målet att öka försäljning.
" />
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