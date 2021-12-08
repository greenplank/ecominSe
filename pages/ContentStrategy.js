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
                    <title>Tjänster för innehållsskrivning | Bloggar, webbplatser och försäljningsmålsidor
                    </title>
                    <meta name="title" content="Tjänster för innehållsskrivning | Bloggar, webbplatser och försäljningsmålsidor
" />
                    <meta name="description" content="Vi är ett fullserviceföretag för digital marknadsföring som förstår värdet av högkvalitativt innehåll i din marknadsföringsplan.
" />
                </Head>

                <NavbarOne />

                <PageBanner
                    pageTitle="Content Strategy & Writing"
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