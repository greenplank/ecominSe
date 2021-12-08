import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
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
                    <title>Webbplatsrevisionstjänster - SEO Webbplatsrevisionsbyrå | Ecomin</title>
                    <meta name="title" content="Webbplatsrevisionstjänster - SEO Webbplatsrevisionsbyrå | Ecomin" />
                    <meta name="description" content="1-mot-1-sessioner med våra SEO-proffs; en komplett SEO-revision för SEO på och utanför platsen; En färdig rapport som innehåller alla resultat och rekommendationer." />
                </Head>

                <NavbarOne />

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