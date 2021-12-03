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
                    <meta name="title" content="UI/UX Design Services | Web Interface Design Solutions" />
                    <meta name="description" content="UX design is more analytical and technological than standard style. It necessitates extensive research in order to assess and improve the client experience." />
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