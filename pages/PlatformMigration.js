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
                    <title>Plattformsmigreringstjänster | Ecomin IT-lösning
                    </title>
                    <meta name="title" content="Plattformsmigreringstjänster | Ecomin IT-lösning" />
                    <meta name="description" content="Ecomin IT Solution gör det enkelt och flexibelt att migrera från föråldrade tjänster, samt erbjuder utbildning och resurser efter migrering." />
                </Head>

                <NavbarOne />

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