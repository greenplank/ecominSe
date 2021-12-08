import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
import PageBanner from '../components/Common/PageBanner';
import MagentoDetailsContent from '../components/Services/MagentoDetailsContent';
// import SEOPackages from '../components/Services/SEOPackages';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';
import Head from "next/head";

class MagentoDevelopment extends Component {
    render() {
        return (
            <>
                <Head>
                    <title>Magento utvecklingstjänster - EcomIN
                    </title>
                    <meta name="title" content="Magento utvecklingstjänster - EcomIN" />
                    <meta name="description" content="EcomIn tillhandahåller en komplett uppsättning av Magento-utvecklingstjänster. Vi har ett certifierat team av Magento-utvecklare. Experter på att designa skräddarsydda webbplatser, e-handelsbutiker med full funktionalitet, programmering, strategi och migrationer." />
                </Head>

                <NavbarOne />

                <PageBanner
                    pageTitle="Magento Development"
                    BGImage="bg-one"
                />

                <MagentoDetailsContent />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default MagentoDevelopment;