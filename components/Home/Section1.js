import React, { Component } from 'react';
import Link from 'next/link';

class Section1 extends Component {
    render() {
        return (
            <section className="funfacts-area ptb-100 bg-fcfbfb">
                <div className="container">
                    <div className="section-title">
                        <h2>Boost Your Digital Presence
                        </h2>
                        <h3>To Grow Your Business</h3>
                        <span></span>
                        <p>Get tailor-made digital solutions for your business and target audiences to make higher profits.</p>
                    </div>
                    <br />
                    <div className="section-title">
                        <h2>Affordable, innovative, timely.
                        </h2>
                        <h3>Custom Web Application Development</h3>
                        <span></span>
                        <p>Whether you require a newly developed website to enhance customer engagement, a web portal to improve visibility and organization, or a robust and feature-rich web application to automate business processes, EcomIN has the solution.</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Section1;