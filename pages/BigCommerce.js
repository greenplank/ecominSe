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
                    <title>Avancerade utvecklingstjänster för Bigcommerce - EcomIN</title>
                    <meta name="title" content="Avancerade utvecklingstjänster för Bigcommerce - EcomIN" />
                    <meta name="description" content="Ta din butikstillväxt till nästa nivå med vår avancerade BigCommerce Development Service. EcomIN är ett certifierat BigCommerce-utvecklingsföretag. Våra certifierade utvecklare anpassar plattformar för e-butiker och flera butiker genom omutveckling, API-integrationer och fullständig anpassning." />
                </Head>

                <NavbarOne />

                <PageBanner
                    pageTitle="BigCommerce Development"
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