import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
import PageBanner from '../components/Common/PageBanner';
import FaqContent from '../components/Faq/FaqContent';
import FaqForm from '../components/Faq/FaqForm';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class Faqs extends Component {
    render() {
        return (
            <>
                <NavbarOne />

                <PageBanner 
                    pageTitle="Frequently Asked Questions" 
                    BGImage="bg-one"
                />  

                <FaqContent />

                {/* <div className="pb-100">
                    <FaqForm />
                </div> */}
                
                <CtaAreaTwo />
                
                <Footer />
            </>
        );
    }
}

export default Faqs;