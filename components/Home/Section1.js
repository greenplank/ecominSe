import React, { Component } from 'react';
import Link from 'next/link';

class Section1 extends Component {
    render() {
        return (
            <section className="funfacts-area ptb-100 bg-fcfbfb">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12">
                            <img src="/images/boostImage.webp" alt="image" className="rounded-10" />
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="section-title">
                                <h2>Boost Your Digital Presence
                                </h2>
                                <h3>To Grow Your Business</h3>
                                <span></span>
                                <p>Get tailor-made digital solutions for your business and target audiences to make higher profits.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                            <div className="section-title">
                                <h2>Affordable, innovative, timely.
                                </h2>
                                <h3>Custom Web Application Development</h3>
                                <span></span>
                                <p>Whether you require a newly developed website to enhance customer engagement, a web portal to improve visibility and organization, or a robust and feature-rich web application to automate business processes, EcomIN has the solution.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <img src="/images/affordable.png" alt="image" className="rounded-10" />
                        </div>
                        
                        <br />
                    </div>
                </div>

            </section>
        );
    }
}

export default Section1;