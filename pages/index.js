import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import MainBanner from '../components/Home/MainBanner';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import ChooseEcomin from '../components/Home/ChooseEcomin';
import Feedback from '../components/Home/Feedback';
import WorkProcess from '../components/Home/WorkProcess';
import FunFactsTwo from '../components/Home/FunFactsTwo';
import Section1 from '../components/Home/Section1';
import CtaArea from '../components/Common/CtaArea';
import Partner from '../components/Common/Partner';
import Head from "next/head";
import Footer from '../components/Layouts/Footer';

class CreativeAgency extends Component {
    render() {
        return (
            <>
                <Head>
                    <meta name="google-site-verification" content="A_wzV5qMXCsTb1vFJKSlCRfMspRIrcbz0jdONJhxwLw" />
                    <meta name="robots" content="INDEX,FOLLOW" />
                    <meta name="title" content="Ecomin – Ecomerce & IT Services | Consulting | Business Solutions" />
                    <meta name="description" content="Ecomin is the best Ecommerce Solution Provider that offers the best eCommerce Development Services and Solutions to small businesses & companies." />
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-211768101-1"></script>

                </Head>

                <NavbarTwo />

                <MainBanner />

                <Section1 />

                <About />

                <Services />

                <ChooseEcomin />


                <WorkProcess />


                <Feedback />

                <FunFactsTwo />


                <CtaArea />

                <Partner />

                <Footer />
            </>
        );
    }
}

export default CreativeAgency;