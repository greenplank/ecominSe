import React, { Component } from 'react';
import Link from 'next/link';

class Services extends Component {
    render() {
        return (
            <>
                <div className="bg-fcfbfb ptb-100 pb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2>We Create Engaging Innovative Digital Experiences
                            </h2>
                            <p>EcomIN helps businesses advance and inspire, create positive transformation, and champion digital innovation. Look over the horizon of the digital landscape -- that’s where we can take you.
                            </p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg text-center">
                                    <i className="pe-7s-vector bg-13c4a1"></i>
                                    <h3>
                                        <Link href="/ux-ui-design">
                                            <a>Interface design
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>We are one of the leading web design companies in Europe and we build innovative user interfaces that provide good results on time and on budget
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg text-center">
                                    <i className="pe-7s-global bg-6610f2"></i>
                                    <h3>
                                        <Link href="/web-development">
                                            <a>web development
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>Our web development company works with customers based all over Europe and all over the world.
                                    </p>
                                    <br/>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg text-center">
                                    <i className="pe-7s-graph1 bg-ffb700"></i>
                                    <h3>
                                        <Link href="/Social-Media-Marketing">
                                            <a>Digital marketing
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>We do digital marketing for your brand and company or your products and services. The world is currently online
                                    </p>
                                    <br/>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg text-center">
                                    <i className="pe-7s-phone bg-fc3549"></i>
                                    <h3>
                                        <Link href="/App-Development">
                                            <a>Mobile app development
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>The mobile application market is growing incredibly fast. According to Gartner's predictions, demand for mobile app development services will grow faster
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg text-center">
                                    <i className="pe-7s-cart bg-00d280"></i>
                                    <h3>
                                        <Link href="/Magento-Development">
                                            <a>E-commerce development
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>We respond to various development needs with expertise ranging from high-performance infrastructure installation to user-centric web design and ecosystem implementation.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg text-center">
                                    <i className="pe-7s-target bg-ff612f"></i>
                                    <h3>
                                        <Link href="/Search-Engine-Optimization">
                                            <a>SEO Optimizing</a>
                                        </Link>
                                    </h3>
                                    <p>We analyze and define the keywords that are searched in Google relatively and are crucial for your business development</p>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Services;