import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
import PageBanner from '../components/Common/PageBanner';
import ShopifyDetailsContent from '../components/Services/ShopifyDetailsContent';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';
import Head from "next/head";

class Shopify extends Component {
    render() {
        return (
            <>
                <Head>
                    <title>Shopify-utveckling och anpassade butiksinställningar - EcomIN</title>
                    <meta name="title" content="Shopify-utveckling och anpassade butiksinställningar - EcomIN" />
                    <meta name="description" content="EcomIN erbjuder ett komplett utbud av tjänster för Shopify, inklusive konfigurering av din butik, temaanpassningar och helt unika anpassade designs. Ett specialbyggt Shopify-tema låter dig ställa in din marknadsnisch." />
                </Head>

                <NavbarOne />

                <PageBanner
                    pageTitle="Shopify utveckling
                    "
                    BGImage="bg-one"
                />

                <ShopifyDetailsContent />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default Shopify;