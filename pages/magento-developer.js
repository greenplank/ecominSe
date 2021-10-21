import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import MagentoDetailsContent from '../components/Portfolio/MagentoDetailsContent';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class MagentoDeveloper extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                
                <PageBanner 
                    pageTitle="Magento Developer" 
                    BGImage="bg-two"
                />  
                
                <MagentoDetailsContent />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default MagentoDeveloper;