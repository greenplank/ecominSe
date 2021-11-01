import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import MagentoDetailsContent from '../components/Services/MagentoDetailsContent';
// import SEOPackages from '../components/Services/SEOPackages';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';
import Head from "next/head";

class MagentoDevelopment extends Component {
    render() {
        return (
            <>
              <Head>
                    <meta name="title" content="Magento Development Serivces - EcomIN" />
                    <meta name="description" content="EcomIn provides a full suite of Magento development services. We have a certified team of Magento developers. Experts in designing customised websites, E-commerece stores with full functionality, programming, strategy, migrations." />
                </Head>

                <NavbarTwo />

                <PageBanner 
                    pageTitle="Magento Development" 
                    BGImage="bg-one"
                />  

                <MagentoDetailsContent/>

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default MagentoDevelopment;