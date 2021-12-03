import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
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

                <NavbarOne />

                <PageBanner
                    pageTitle="Plattformsmigrering"
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