import React, { Component } from 'react';
import Link from 'next/link';

class Partner extends Component {
    render() {
        return (
            <section className="partner-area pt-100 pb-60">
                <div className="container">
                    <div className="section-title">
                        <h2>Trusted By</h2>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                    </div>

                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-2 col-6 col-sm-4">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner-11.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        {/* <div className="col-lg-2 col-6 col-sm-4">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner-2.png" alt="image" />
                                </a>
                            </div>
                        </div> */}

                        <div className="col-lg-2 col-6 col-sm-4">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner-12.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 col-sm-4">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner-13.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 col-sm-4">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner-14.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 col-sm-4">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner-15.png" alt="image" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Partner;