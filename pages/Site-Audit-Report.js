import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import AuditDetailsContent from '../components/Services/AuditDetailsContent';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class SearchOptimization extends Component {
    render() {
        return (
            <>
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

export default SearchOptimization;