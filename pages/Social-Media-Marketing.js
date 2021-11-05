import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
import PageBanner from '../components/Common/PageBanner';
import SocialMediaDetailsContent from '../components/Services/SocialMediaDetailsContent';
import SocialMediaDetailsContent1 from '../components/Services/SocialMediaDetailsContent1';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';
import Head from "next/head";


class SocialMediaMarketing extends Component {
    render() {
        return (
            <>
                <Head>
                    <meta name="title" content="Social Media Marketing Services for 2021 - Ecomin" />
                    <meta name="description" content="Social Media Campaigns: Our Social Media Marketing Services We provide ad campaigns that attract your target demographic and bring you more business." />
                </Head>

                <NavbarOne />

                <PageBanner
                    pageTitle="Social Media Marketing"
                    BGImage="bg-one"
                />

                <SocialMediaDetailsContent />

                <SocialMediaDetailsContent1 />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default SocialMediaMarketing;