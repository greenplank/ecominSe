import React, { Component } from 'react';
import Link from 'next/link';

class WebPackages extends Component {
    render() {
        return (
            <>
                <section className="pricing-area ptb-100 bg-f9f6f6">
                    <div className="container">
                        <div className="section-title">
                            <h2>Plans & Pricing</h2>
                            <p>Custom Websites</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="pricing-table">
                                    <div className="pricing-header">
                                        <h3>Single-Page Website
                                            + Content Boost
                                        </h3>
                                    </div>

                                    <div className="pricing-features">
                                        <ul>
                                            <li className="active">For beginners who just need an online presence</li>
                                            <li className="active">3 months period contract <span><b> € 149 / month </b></span></li>
                                            <li className="active">6 months period contract <span><b> €  99 / month</b></span></li>
                                            <li className="active">12 months period contract <span><b> € 49 / month</b></span></li>
                                            <li className="active">Monthly Support Time <span><b> 15 Minutes</b></span></li>
                                            <li className="active">Pages Populated For You <span><b> 1 Page</b></span></li>
                                            <li className="active">Professional Stock Images <span><b> 1 image</b></span></li>
                                            <li className="active">File Storage / Bandwidth<span><b> 5 GB / 10 GB</b></span></li>
                                            <li className="active">SEO Optimized Content
                                                <span><b> 1 pages (up to 250 words)
                                                </b></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="pricing-table">
                                    <div className="pricing-header">
                                        <h3>Unlimited-Page Website
                                            + Content Boost
                                        </h3>
                                    </div>

                                    <div className="pricing-features">
                                        <ul>
                                            <li className="active">For professionals who want to grow their business online</li>
                                            <li className="active">3 months period contract <span><b> € 299 / month </b></span></li>
                                            <li className="active">6 months period contract <span><b> €  199 / month</b></span></li>
                                            <li className="active">12 months period contract <span><b> € 99 / month</b></span></li>
                                            <li className="active">Monthly Support Time <span><b> 60 Minutes</b></span></li>
                                            <li className="active">Pages Populated For You <span><b> 15 Pages</b></span></li>
                                            <li className="active">Professional Stock Images <span><b> 5 images</b></span></li>
                                            <li className="active">Plugins <span><b> 5 </b></span></li>
                                            <li className="active">File Storage / Bandwidth<span><b> 15 GB / 30 GB</b></span></li>
                                            <li className="active">SEO Optimized Content
                                                <span><b> 5 pages (up to 250 words per page)
                                                </b></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="pricing-table">
                                    <div className="pricing-header">
                                        <h3>Basic Ecommerce
                                            + Content Boost
                                        </h3>
                                    </div>

                                    <div className="pricing-features">
                                        <ul>
                                            <li className="active">Sell online with your own beautiful online store</li>
                                            <li className="active">3 months period contract <span><b> € 329 / month </b></span></li>
                                            <li className="active">6 months period contract <span><b> € 222 / month</b></span></li>
                                            <li className="active">12 months period contract <span><b>€ 169 / month</b></span></li>
                                            <li className="active">Monthly Support Time <span><b> 60 Minutes</b></span></li>
                                            <li className="active">Pages Populated For You <span><b> 10 Pages</b></span></li>
                                            <li className="active">Professional Stock Images <span><b> 6 images</b></span></li>
                                            <li className="active">Plugins <span><b> 5 </b></span></li>
                                            <li className="active">File Storage / Bandwidth<span><b> 15 GB / 30 GB</b></span></li>
                                            <li className="active">Shipping Providers<span><b> Flat Rate & Table
                                                Rate Shipping
                                            </b></span></li>
                                            <li className="active">Product Population<span><b> 20 Products populated</b></span></li>
                                            <li className="active">Payment Processors<span><b> Klarna, Authorize.net, Stripe,
                                                PayPal
                                            </b></span></li>
                                            <li className="active">SEO Optimized Content
                                                <span><b> 7 pages (up to 250 words per page)
                                                </b></span></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="pricing-table">
                                    <div className="pricing-header">
                                        <h3>Enterprise Ecommerce
                                            + Content Boost
                                        </h3>
                                    </div>

                                    <div className="pricing-features">
                                        <ul>
                                            <li className="active">Scale your growing business with a comprehensive set of features.</li>
                                            <li className="active">3 months period contract <span><b> € 379 / month </b></span></li>
                                            <li className="active">6 months period contract <span><b> € 259 / month</b></span></li>
                                            <li className="active">12 months period contract <span><b>€ 199 / month</b></span></li>
                                            <li className="active">Monthly Support Time <span><b> 90 Minutes</b></span></li>
                                            <li className="active">Pages Populated For You <span><b> 20 Pages</b></span></li>
                                            <li className="active">Professional Stock Images <span><b> 10 images</b></span></li>
                                            <li className="active">Plugins <span><b> 7 </b></span></li>
                                            <li className="active">File Storage / Bandwidth<span><b> 20 GB / 40 GB</b></span></li>
                                            <li className="active">Subscription Functionality<span><b> Subscription (auto renew)
                                            </b></span></li>
                                            <li className="active">Shipping Providers<span><b> Shipping Integration
                                                (Integrate with USPS,
                                                UPS, FedEx and Others)
                                            </b></span></li>
                                            <li className="active">Product Population<span><b> 100 Products Populated</b></span></li>
                                            <li className="active">Payment Processors<span><b> Klarna, Authorize.net, Stripe,
                                                PayPal
                                            </b></span></li>
                                            <li className="active">SEO Optimized Content
                                                <span><b> 10 pages (up to 250 words per page)
                                                </b></span></li>

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

export default WebPackages;