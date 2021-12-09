import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
import PageBanner from '../components/Common/PageBanner';
import SoftwareQADetailsContent from '../components/Services/SoftwareQADetailsContent';
import Footer from '../components/Layouts/Footer';
import Head from "next/head";

class CyberSecurity extends Component {
    render() {
        return (
            <>
                <Head>
                    <meta name="title" content="Software testing and QA services - Ecomin IT Solution" />
                    <meta name="description" content="QA and software testing services are designed to verify that software satisfies all of the criteria and expectations of its users." />
                </Head>

                <NavbarOne />

                <PageBanner
                    pageTitle="QA och testning av programvara"
                    BGImage="bg-one"
                />

                <SoftwareQADetailsContent />

                <Footer />
            </>
        );
    }
}

export default CyberSecurity;