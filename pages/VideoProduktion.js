import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import VideoProduktionDetailsContent from '../components/Services/VideoProduktionDetailsContent';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class VideoProduktion extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Video Produktion" 
                    BGImage="bg-one"
                />  

                <VideoProduktionDetailsContent />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default VideoProduktion;