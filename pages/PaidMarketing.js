import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import PaidMarketingDetailsContent from '../components/Services/PaidMarketingDetailsContent';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class PaidMarketing extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Paid Marketing" 
                    BGImage="bg-one"
                />  

                <PaidMarketingDetailsContent />
                

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default PaidMarketing;