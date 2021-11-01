import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
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
                    <meta name="title" content="PPC Management Services | PPC Services Drive Sales" />
                    <meta name="description" content="PPC (pay-per-click) is a model for marketing on internet in which advertisers pay a fee when one of their ads is clicked by user/visitor." />
                </Head>

                <NavbarTwo />

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