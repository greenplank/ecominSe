import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
import PageBanner from '../components/Common/PageBanner';
import WooCommerceDetailsContent from '../components/Services/WooCommerceDetailsContent';
import Footer from '../components/Layouts/Footer';
import Head from "next/head";

class WooCommerce extends Component {
    render() {
        return (
            <>

                <Head>
                    <title>Anpassade Woocommerce utvecklingstjänster - EcomIN</title>
                    <meta name="title" content="Custom Woocommerce development services - EcomIN" />
                    <meta name="description" content="EcomIN is a custom WooCommerce website development agency. We design and build user-friendly online stores with many powerful features." />
                </Head>

                <NavbarOne />

                <PageBanner
                    pageTitle="WooCommerce utveckling
                    "
                    BGImage="bg-one"
                />

                <WooCommerceDetailsContent />

                <Footer />
            </>
        );
    }
}

export default WooCommerce;