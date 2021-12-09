import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
import PageBanner from '../components/Common/PageBanner';
import UXUIDetailsContent from '../components/Services/UXUIDetailsContent';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';
import Head from "next/head";

class UXUIDesign extends Component {
    render() {
        return (
            <>
                 <Head>
                    <title>UI/UX-designtjänster | Designlösningar för webbgränssnitt</title>
                    <meta name="title" content="UI/UX-designtjänster | Designlösningar för webbgränssnitt" />
                    <meta name="description" content="UX-design är mer analytisk och teknisk än standardstil. Det kräver omfattande forskning för att bedöma och förbättra klientupplevelsen." />
                </Head>

                <NavbarOne />
                
                <PageBanner 
                    pageTitle="UX/UI-design
                    " 
                    BGImage="bg-two"
                />  
                
                <UXUIDetailsContent />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default UXUIDesign;