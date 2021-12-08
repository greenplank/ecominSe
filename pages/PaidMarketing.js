import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
import PageBanner from '../components/Common/PageBanner';
import PaidMarketingDetailsContent from '../components/Services/PaidMarketingDetailsContent';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';
import Head from "next/head";

class PaidMarketing extends Component {
    render() {
        return (
            <>

                <Head>
                    <title>PPC Marknadsföringstjänster | PPC-tjänster driver försäljningen</title>
                    <meta name="title" content="PPC Marknadsföringstjänster | PPC-tjänster driver försäljningen" />
                    <meta name="description" content="PPC (pay-per-click) är en modell för marknadsföring på internet där annonsörer betalar en avgift när en av deras annonser klickas på av användare/besökare." />
                </Head>

                <NavbarOne />

                <PageBanner
                    pageTitle="Paid Marketing"
                    BGImage="bg-one"
                />

                <PaidMarketingDetailsContent />


                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default PaidMarketing;