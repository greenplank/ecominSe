import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
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
                    <meta name="title" content="Shopify Development and Custom Store Setup - EcomIN" />
                    <meta name="description" content="EcomIN offer a full range of services for Shopify, including setting up your store, theme customizations, and fully unique custom designs. A custom-built Shopify theme allows you to set up your market niche." />
                </Head>

                <NavbarTwo />

                <PageBanner
                    pageTitle="Shopify Development"
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