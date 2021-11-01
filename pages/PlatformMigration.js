import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import MigrationDetailsContent from '../components/Services/MigrationDetailsContent';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';
import Head from "next/head";

class PlatformMigration extends Component {
    render() {
        return (
            <>
                <Head>
                    <meta name="title" content="Platform Migration Services | Ecomin IT Solution" />
                    <meta name="description" content="Ecomin IT Solution makes it simple and flexible to migrate from outmoded technological tools, as well as offering post-migration training and resources." />
                </Head>

                <NavbarTwo />

                <PageBanner
                    pageTitle="Platform Migration"
                    BGImage="bg-one"
                />

                <MigrationDetailsContent />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default PlatformMigration;