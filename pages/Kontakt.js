import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
import PageBanner from '../components/Common/PageBanner';
import ContactInfo from '../components/Contact/ContactInfo';
// import ContactForm from '../components/Contact/ContactForm';
import ContactFormOne from '../components/Contact/ContactFormOne';
import Newsletter from '../components/Common/Newsletter';
import Footer from '../components/Layouts/Footer';
import Head from "next/head";

class Contact extends Component {
    render() {
        return (
            <>

                <Head>
                    <title>Kontakta oss
                    </title>
                </Head>

                <NavbarOne />

                <PageBanner
                    pageTitle="Kontakta oss
                    "
                    BGImage="bg-one"
                />

                <ContactInfo />

                <div className="ptb-100">
                    <ContactFormOne />
                </div>

                <Footer />
            </>
        );
    }
}

export default Contact;