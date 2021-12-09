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
                    <title>Social Media Marknadsföring Services för 2021 - Ecomin
</title>
                    <meta name="title" content="Social Media Marknadsföring Services för 2021 - Ecomin" />
                    <meta name="description" content="Sociala mediekampanjer: Våra marknadsföringstjänster för sociala medier. Vi tillhandahåller annonskampanjer som är anpassad för din målgrupp och ger dig fler affärer." />
                </Head>

                <NavbarOne />

                <PageBanner
                    pageTitle="Marknadsföring i sociala medier
                    "
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