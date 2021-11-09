import React, { Component } from 'react';
import Link from 'next/link';


class SEODetailsContent extends Component {


    render() {
        return (
            <>
                <section className="services-details-area ptb-100">

                    <div className="container">
                        <div className="row">

                            <div className="col-lg-8 col-md-12">
                                <div className="services-details-desc">
                                    <h2>MOBILE APP DEVELOPMENT SERVICES</h2>
                                    <p>We offer a full cycle of application design, integration and management services. Whether it is a consumer oriented app or a transformative enterprise-class solution, the company leads the entire mobile app development process from ideation and concept to delivery, and to ongoing ongoing support.
                                    </p>
                                </div>
                                <div className="about-image pb-100">
                                    <img src="/images/AppDev.png" alt="image" width="300px" className="rounded-10" />
                                </div>
                                <div className="services-details-desc">
                                    <h3>Developing Cutting-Edge Mobile First Apps</h3>
                                    <p>Modern mobile apps thrive upon adaptable platforms. eComIN utilises fully automated processes to benefit every app’s lifecycle from design to eventual deployment. Simultaneously, it relies upon hand-created designs to ensure all mobile apps feature cutting-edge technology while also being personable. </p>
                                    <p>More than ever, security and feasibility are vital. Many users require a high degree of digital protection as their apps are used. eComIN has expanded the use of each user’s private data—constructing long-lasting designs while benefiting the user’s protection via the modern mobile device’s best features. SMS codes, voice recognition, cameras, phone call verification and internal security architecture are all noted, and each is implemented in a mobile app’s design. </p>
                                </div>

                                <div className="services-details-info">
                                    <h3>Call Us Today</h3>
                                    <p>If you need app design and/or development services, contact us today! </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div className="services-details-info">
                                    <h3>Android Development</h3>
                                    <p>Android has recently become a priority platform for many providers. Google Play is currently a major app access point. The Android ecosystem thrives due to its incredible flexibility within business object frameworks. Useful as part of larger projects, conducive to unique app uses and a highly viable entertainment platform, Android is a fantastic avenue for any app developer. eComIN maintains a tight grip on the quickly growing Android Development world. For this reason, all Android app development approaches harness flexibility as a major resource. </p>
                                </div>
                                <div className="services-details-info">
                                    <h3>iOS iPhone Development</h3>
                                    <p>Many iOS app development solutions evade the use of Objective-C, Java or Swift. eComIN also uses .NET and similar resources to assure effective, multi-faceted iOS phone apps. All iOS phone app development projects put the user’s accessibility first. The iPhone benefits from a variety of cross-platform design options, making it an excellent base platform for a mobile app’s launch. By utilising push notifications, virtual reality capabilities and space-saving features, the eComIN agency assure a highly organised, but flexible, access point for users and operators alike. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default SEODetailsContent;