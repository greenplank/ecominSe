import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
import PageBanner from '../components/Common/PageBanner';
import FaqContent from '../components/Faq/FaqContent';
import FaqForm from '../components/Faq/FaqForm';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';
import Head from "next/head";


class Faqs extends Component {
    render() {
        return (
            <>

            <Head>
                <title>FAQs</title>
            </Head>
                <NavbarOne />

                <PageBanner 
                    pageTitle="Frequently Asked Questions" 
                    BGImage="bg-one"
                />  

                <FaqContent />
                
                <CtaAreaTwo />
                
                <Footer />
            </>
        );
    }
}

export default Faqs;