import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ReactNextDetailsContent from '../components/Services/ReactNextDetailsContent';
// import SEOPackages from '../components/Services/SEOPackages';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';
import Head from "next/head";

class ReactNext extends Component {
    render() {
        return (
            <>
                <Head>
                    <meta name="title" content="Services Company | Hire Best React & Next.js Developers - Ecomin IT Solution" />
                    <meta name="description" content="React.js allows you to create visually appealing and quick user interfaces for online apps. You may take advantage of React.js's fast performance, outstanding interface design, and adaptability by using it." />
                </Head>

                <NavbarTwo />

                <PageBanner
                    pageTitle="React&NextJs Development"
                    BGImage="bg-one"
                />

                <ReactNextDetailsContent />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default ReactNext;