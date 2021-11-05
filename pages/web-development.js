import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
import PageBanner from '../components/Common/PageBanner';
import WebDetailsContent from '../components/Services/WebDetailsContent';
import WebPackages from '../components/Services/WebPackages';
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
                    pageTitle="Web Development"
                    BGImage="bg-two"
                />

                <WebDetailsContent />

                <WebPackages />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default WebDevelopment;