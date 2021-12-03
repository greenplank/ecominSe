import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
import PageBanner from '../components/Common/PageBanner';
import BigCommerceDetailsContent from '../components/Services/BigCommerceDetailsContent';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';
import Head from "next/head";

class BigCommerce extends Component {
    render() {
        return (
            <>
                <Head>
                    <meta name="title" content="Advanced Bigcommerce development services - EcomIN" />
                    <meta name="description" content="Take your store growth to the next level with our advanced BigCommerce Development Service. EcomIN is a certified BigCommerce development company. Our Certified developers customize e-store and multi-store platforms through redevelopment, API integrations, and complete customization." />
                </Head>

                <NavbarOne />

                <PageBanner
                    pageTitle="BigCommerce utveckling
                    "
                    BGImage="bg-one"
                />

                <BigCommerceDetailsContent />


                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default BigCommerce;