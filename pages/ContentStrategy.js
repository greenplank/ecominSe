import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
import PageBanner from '../components/Common/PageBanner';
import ContentWritingDetailsContent from '../components/Services/ContentWritingDetailsContent';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';
import Head from "next/head";

class ContentStrategy extends Component {
    render() {
        return (
            <>
                <Head>
                    <meta name="title" content="Services for Content Writing | Blogs, Websites, and Sales Landing Pages" />
                    <meta name="description" content="We're a full-service digital marketing firm that understands the value of high-quality content in your marketing plan." />
                </Head>

                <NavbarOne />

                <PageBanner
                    pageTitle="Innehållsstrategi och skrivande
                    "
                    BGImage="bg-one"
                />

                <ContentWritingDetailsContent />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default ContentStrategy;