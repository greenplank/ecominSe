import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import SocialMediaDetailsContent from '../components/Services/SocialMediaDetailsContent';
// import PricingStyleOne from '../components/Pricing/PricingStyleOne';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class SocialMediaMarketing extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Social Media Marketing" 
                    BGImage="bg-one"
                />  

                <SocialMediaDetailsContent />

                {/* <PricingStyleOne/> */}

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default SocialMediaMarketing;