import React, { Component } from 'react';
import Link from 'next/link';

class PricingStyleOne extends Component {
    render() {
        return (
            <>
                <section className="pricing-area ptb-100 bg-f9f6f6">
                    <div className="container">
                        <div className="section-title">
                            <h2>Web Development Packages</h2>
                            <p>That Meet Your Needs</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="pricing-table">
                                    <div className="pricing-header">
                                        <h3>Great for Individuals & Startups!</h3>
                                    </div>

                                    <div className="price">
                                        <span>
                                            <sup>€</sup>599
                                            <span>50% Off!</span>
                                        </span>
                                    </div>

                                    <div className="pricing-features">
                                        <ul>
                                            <li className="active">2 Page Website</li>
                                            <li className="active">Theme Based Design</li>
                                            <li className="active">Stock Photography</li>
                                            <li className="active">Responsive Design</li>
                                            <li className="active">Turnaround 3 Days</li>
                                            <li className="active">Social Media Integration</li>
                                            <li className="active">Contact Forms Included</li>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
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
                                        <h3>STANDARD</h3>
                                    </div>

                                    <div className="price">
                                        <span>
                                            <sup>€</sup>999
                                            <span>50% Off!</span>
                                        </span>
                                    </div>

                                    <div className="pricing-features">
                                        <ul>
                                            <li className="active">Most Popular by New Businesses!</li>
                                            <li className="active">3 Page Website</li>
                                            <li className="active">Theme Based Design</li>
                                            <li className="active">Stock Photography</li>
                                            <li className="active">Original Content</li>
                                            <li className="active">Turnaround 4 Days</li>
                                            <li className="active">Responsive Design</li>
                                            <li className="active">Content Management System</li>
                                            <li className="active">Social Media Integration</li>
                                            <li className="active">Blog Setup</li>
                                            <li className="active">Contact Forms Included</li>
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
                                        <h3>PROFESSIONAL</h3>
                                    </div>

                                    <div className="price">
                                        <span>
                                            <sup>€</sup>1999
                                            <span>50% Off!</span>
                                        </span>
                                    </div>

                                    <div className="pricing-features">
                                        <ul>
                                            <li className="active">6 Page Website</li>
                                            <li className="active">Custom Design</li>
                                            <li className="active">Stock Photography</li>
                                            <li className="active">Original Content</li>
                                            <li className="active">Turnaround 7 Days</li>
                                            <li className="active">Responsive Design</li>
                                            <li className="active">Content Management System</li>
                                            <li className="active">Sliders</li>
                                            <li className="active">Social Media Integration</li>
                                            <li className="active">SEO Features</li>
                                            <li className="active">Blog Setup & Contact Forms Included</li>

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