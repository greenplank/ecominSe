import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import AuditDetailsContent from '../components/Services/AuditDetailsContent';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';
import Head from "next/head";

class SiteAudit extends Component {
    render() {
        return (
            <>
                <Head>
                    <meta name="title" content="Website Audit Services - SEO Website Audit Agency | Ecomin" />
                    <meta name="description" content="1-on-1 sessions with our SEO professionals; a complete SEO audit for on-site and off-site SEO; A completed report that includes all findings and recommendations." />
                </Head>

                <NavbarTwo />

                <PageBanner
                    pageTitle="Site Audit Report"
                    BGImage="bg-one"
                />

                <AuditDetailsContent />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default SiteAudit;