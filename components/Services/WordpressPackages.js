import React, { Component } from 'react';
import Link from 'next/link';

class WordpressPackages extends Component {
    render() {
        return (
            <>
                <section className="pricing-area ptb-100 bg-f9f6f6">
                    <div className="container">
                        <div className="section-title">
                            <h2>Development Packages</h2>
                            <p>That Meet Your Needs</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="pricing-table">
                                    <div className="pricing-header">
                                        <h3>ENTHUSIAST</h3>
                                        <p>ENTHUSIAST
                                            Supercharge your Wordpress site with lightning fast Google Cloud powered hosting.
                                        </p>
                                    </div>

                                    <div className="price">
                                        <span>
                                            <sup>€</sup>6999
                                            <span>/per year</span>
                                        </span>
                                    </div>

                                    <div className="pricing-features">
                                        <ul>
                                            <li className="active">Move your WordPress website</li>
                                            <li className="active">Full daily back-up</li>
                                            <li className="active">Proactive hacker blocking</li>
                                            <li className="active">24/7 Security and up-time monitoring Automatic removal of malicious code</li>
                                            <li className="active">Also included:
                                                <ul>
                                                    <li className="active">Kinsta WordPress Managed Hosting</li>
                                                    <li className="active">Hosting Dashboard</li>
                                                    <li className="active">CloudFlare Content Delivery Network (CDN) Google Cloud Platform</li>
                                                    <li className="active">PHP 8.0 support</li>
                                                    <li className="active">Staging Environment</li>
                                                    <li className="active">24/7 Up-Time Monitoring</li>
                                                    <li className="active">25 global locations </li>
                                                </ul></li>

                                        </ul>
                                    </div>

                                    {/* <div className="pricing-footer">
                                        <Link href="#">
                                            <a className="btn btn-primary">Select Plan</a>
                                        </Link>
                                    </div> */}
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="pricing-table">
                                    <div className="pricing-header">
                                        <h3>BUSINESS</h3>
                                        <p>Fast & Secure WP Hosting with Google Cloud Platform for growing businesses.</p>
                                    </div>

                                    <div className="price">
                                        <span>
                                            <sup>€</sup>14999
                                            <span>/per year</span>
                                        </span>
                                    </div>

                                    <div className="pricing-features">
                                        <ul>
                                            <li className="active">Everything that is included in ENTHUSIAST Premium security</li>
                                            <li className="active">Premium image compression</li>
                                            <li className="active">Premium spam protection</li>
                                            <li className="active">WordPress, theme and plug-in update every week Verify Your Local Business with GOOGLE </li>
                                            <li className="active">Also included:
                                                <ul>
                                                    <li className="active">Kinsta WordPress Managed Hosting</li>
                                                    <li className="active">Hosting Dashboard</li>
                                                    <li className="active">CloudFlare Content Delivery Network (CDN) Google Cloud Platform</li>
                                                    <li className="active">PHP 8.0 support</li>
                                                    <li className="active">Staging Environment</li>
                                                    <li className="active">24/7 Up-Time Monitoring</li>
                                                    <li className="active">25 global locations</li>
                                                </ul></li>
                                        </ul>
                                    </div>

                                    {/* <div className="pricing-footer">
                                        <Link href="#">
                                            <a className="btn btn-primary">Select Plan</a>
                                        </Link>
                                    </div> */}
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                                <div className="pricing-table">
                                    <div className="pricing-header">
                                        <h3>BUSINESS PLUS</h3>
                                        <p>Speed, Scalability, and World-Class Support for Mission-Critical Websites. </p>
                                    </div>

                                    <div className="price">
                                        <span>
                                            <sup>€</sup>24999
                                            <span>/per year</span>
                                        </span>
                                    </div>

                                    <div className="pricing-features">
                                        <ul>
                                            <li className="active">Everything included in BUSINESS</li>
                                            <li className="active">Premium Plug-ins pack</li>
                                            <li className="active">Advanced website optimisation</li>
                                            <li className="active">Search Engine Optimisation</li>
                                            <li className="active">Verify Your Local Business with GOOGLE Social Media Pages Creation</li>
                                            <li className="active">Sitemap Submission in Google, Bing Monthly performance report from SEM Rush Monthly report technology Screaming Frog </li>
                                            <li className="active">Also included:
                                                <ul>
                                                    <li className="active">Kinsta WordPress Managed Hosting</li>
                                                    <li className="active">Hosting Dashboard</li>
                                                    <li className="active">CloudFlare Content Delivery Network (CDN) Google Cloud Platform</li>
                                                    <li className="active">PHP 8.0 support</li>
                                                    <li className="active">Staging Environment</li>
                                                    <li className="active">24/7 Up-Time Monitoring</li>
                                                    <li className="active">25 global locations </li>
                                                </ul></li>
                                        </ul>
                                    </div>

                                   
                                </div>
                            </div>



                        </div>
                        
                    </div>
                </section>
            </>
        );
    }
}

export default WordpressPackages;