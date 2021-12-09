import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
import PageBanner from '../components/Common/PageBanner';
import CustomContentDetailsContent from '../components/Services/CustomContentDetailsContent';
import CustomContentPackages from '../components/Services/CustomContentPackages';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';
import Head from "next/head";

class WebDevelopment extends Component {
    render() {
        return (
            <>
                <Head>
                    <meta name="title" content="Website Design & Development Services | Ecomin IT Solution" />
                    <meta name="description" content="With quality and professional web development services, you can take your business online and generate more sales and leads." />
                </Head>

                <NavbarOne />

                <PageBanner
                    pageTitle="Custom Content Boost Allt i ett"
                    BGImage="bg-two"
                />
                <CustomContentPackages />

                <CustomContentDetailsContent />

                

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default WebDevelopment;