import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
import PageBanner from '../components/Common/PageBanner';
import WordpressDetailsContent from '../components/Services/WordpressDetailsContent';
import WordpressPackages from '../components/Services/WordpressPackages';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';


class WordpressAllinOne extends Component {
    render() {
        return (
            <>
                {/* <Head>
                    <meta name="title" content="Website Design & Development Services | Ecomin IT Solution" />
                    <meta name="description" content="With quality and professional web development services, you can take your business online and generate more sales and leads." />
                </Head> */}

                <NavbarOne />

                <PageBanner
                    pageTitle="Wordpress allt i ett"
                    BGImage="bg-two"
                />

                <WordpressDetailsContent />

                <WordpressPackages />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default WordpressAllinOne;