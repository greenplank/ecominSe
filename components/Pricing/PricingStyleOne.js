import React, { Component } from 'react';
import Link from 'next/link';

class PricingStyleOne extends Component {
    render() {
        return (
            <>
                <section className="pricing-area ptb-100 bg-f9f6f6">
                    <div className="container">
                        <div className="section-title">
                            <h2>SEO Packages</h2>
                            <p>SEO Package Pricing so you can add real value to the parts of your digital marketing that you need most today.  You can implement your search engine optimization piece by piece.</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="pricing-table">
                                    <div className="pricing-header">
                                        <h3>Current Specials</h3>
                                    </div>

                                    <div className="price">
                                        <span>
                                            <sup>€</sup>300
                                            <span>/monthly</span>
                                        </span>
                                    </div>

                                    <div className="pricing-features">
                                        <ul>
                                            <li className="active">€FREE September</li>
                                            <li className="active">FREE Google PPC Management</li>
                                            <li className="active">With Local SEO Package</li>
                                            {/* <li className="active">Unlimited Website</li>
                                            <li className="active">Unlimited Users</li>
                                            <li className="active">24x7 Great Support</li>
                                            <li>Data Security and Backups</li>
                                            <li>Monthly Reports and Analytics</li> */}
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
                                        <h3>Schema Package</h3>
                                    </div>

                                    <div className="price">
                                        <span>
                                            <sup>€</sup>300+100
                                            <span>/per Page</span>
                                        </span>
                                    </div>

                                    <div className="pricing-features">
                                        <ul>
                                            <li className="active">Research Business Tag Options</li>
                                            <li className="active">Implement Advanced On Page Schema</li>
                                            <li className="active">Testing of Every Page</li>
                                            {/* <li className="active">Unlimited Website</li>
                                            <li className="active">Unlimited Users</li>
                                            <li className="active">24x7 Great Support</li>
                                            <li className="active">Data Security and Backups</li>
                                            <li>Monthly Reports and Analytics</li> */}
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
                                        <h3>On Page SEO Package</h3>
                                    </div>

                                    <div className="price">
                                        <span>
                                            <sup>€</sup>300+100
                                            <span>/per Page</span>
                                        </span>
                                    </div>

                                    <div className="pricing-features">
                                        <ul>
                                            <li className="active">Full Site Audit</li>
                                            <li className="active">Rework URL Structure - Silo</li>
                                            <li className="active">Internal & External Linking</li>
                                            <li className="active">General Layout</li>

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
                                        <h3>Content Marketing SEO Package</h3>
                                    </div>

                                    <div className="price">
                                        <span>
                                            <sup>€</sup>499
                                            <span>/monthly</span>
                                        </span>
                                    </div>

                                    <div className="pricing-features">
                                        <ul>
                                            <li className="active">Two 800+ Word, Blogs Professionally Written</li>
                                            <li className="active">Blogs Posted to Your Website</li>
                                            <li className="active">Licensed High Quality Photo</li>
                                            <li className="active">Photo Customized With Overlay</li>
                                            <li className="active">Blogs Social Shared to Your Accounts</li>
                                            <li className="active">Blogs Socially Syndicated via Out Networks</li>
                                            <li className="active">Money Page, Internal Linking</li>
                                            <li className="active">Authority, Outbound Links</li>
                                            <li className="active">On Page SEO</li>
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
                                        <h3>Map Pack - Local SEO Package</h3>
                                    </div>

                                    <div className="price">
                                        <span>
                                            <sup>€</sup>900
                                            <span>/9 month</span>  /
                                            <sup>€</sup>300
                                            <span>/monthly</span>
                                        </span>
                                    </div>

                                    <div className="pricing-features">
                                        <ul>
                                            <li className="active">Creation and Optimization of GMB</li>
                                            <li className="active">Account</li>
                                            <li className="active">Multiple Full Citation Audits</li>
                                            <li className="active">Creation of 40+ Primary Citations</li>
                                            <li className="active">Creation of 60+ Secondary Citations</li>
                                            <li className="active">Minimum 50 Google Map Embeds</li>
                                            <li className="active">1 Press Release</li>
                                            <li className="active">10-20 Google Posts</li>
                                            <li className="active">Local Authority Links</li>
                                            <li className="active">Claim Apple Maps</li>

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
                                        <h3>WordPress Maintenance Package</h3>
                                    </div>

                                    <div className="price">
                                        <span>
                                            <sup>€</sup>99
                                            <span>/month</span>
                                        </span>
                                    </div>

                                    <div className="pricing-features">
                                        <ul>
                                            <li className="active">Implementation of Daily/Weekly Backups</li>
                                            <li className="active">Ongoing Updates of the WordPress </li>
                                            <li className="active">Infrastructure</li>
                                            <li className="active">Ongoing Updates of WordPress Plugins</li>
                                            <li className="active">Insuring the site is up and working properly at all times.</li>
                                            <li className="active">1/2 hour of development time per month (not cumulative) which is enough time for small cosmetic updates without incurring any additional charges.
                                            </li>


                                        </ul>
                                    </div>

                                    {/* <div className="pricing-footer">
                                        <Link href="#">
                                            <a className="btn btn-primary">Select Plan</a>
                                        </Link>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        {/* <div className="section-title ptb-100">
                            <h2>Digital Marketing Add-Ons</h2>
                            <p>Google AdWords Management </p>
                        </div> */}
                    </div>
                </section>
            </>
        );
    }
}

export default PricingStyleOne;