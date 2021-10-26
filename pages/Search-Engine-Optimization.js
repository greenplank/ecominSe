import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import SEODetailsContent from '../components/Services/SEODetailsContent';
import SEOPackages from '../components/Services/SEOPackages';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class SearchOptimization extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Search Engine Optimization" 
                    BGImage="bg-one"
                />  

                <SEODetailsContent />
                
                <SEOPackages/>

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default SearchOptimization;