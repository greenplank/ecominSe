import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import MigrationDetailsContent from '../components/Services/MigrationDetailsContent';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class PlatformMigration extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Platform Migration" 
                    BGImage="bg-one"
                />  

                <MigrationDetailsContent />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default PlatformMigration;