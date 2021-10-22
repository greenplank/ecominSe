import React, { Component } from 'react';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';


class ReactDetailsContent extends Component {


    render() {

        return (
            <>


                <section className="portfolio-details ptb-100 ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="services-details-image">
                                    <img src="/images/services/ecomin-development-process-diagram.png" alt="image" />

                                    {/* <div className="video-box">
                                        <div
                                            onClick={e => {e.preventDefault(); this.openModal()}}
                                            className="video-btn"
                                        > 
                                            <i className="pe-7s-play"></i>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="portfolio-desc">
                                    {/* <h2>Du måste erbjuda en unik användarupplevelse. Våra React.js -utvecklare gör dina idéer till verklighet.
                                    </h2> */}
                                    <p>We Deliver Successful Web Solutions.Websites need to look great in order to attract audiences - 38% of people say that they’ll stop engaging with websites if the content or layout is unattractive. And when it comes to having a user-friendly website, 95% of internet users state that it’s the most important feature. According to the research every €1 spent on customer experience can provide up to €100 of ROI over the time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className=" bg-fcfbfb">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="services-details-info section-title">
                                    <h2>Development Platforms</h2>
                                    {/* <p>Google AdWords Management </p> */}
                                </div>
                                <div className="container pb-100">
                                    <div className="row justify-content-center" style={{ textAlign: "center" }}>
                                        <div className="col-lg-1 col-sm-6">
                                            <div className="funfact-card">
                                                <img src="/images/icon-1.jpg" alt="image" className="rounded-10" width="80" />
                                            </div>
                                        </div>

                                        <div className="col-lg-1 col-sm-6">
                                            <div className="funfact-card">
                                                <img src="/images/icon-2.jpg" alt="image" className="rounded-10" width="80" />
                                            </div>
                                        </div>
                                        <div className="col-lg-1 col-sm-6">
                                            <div className="funfact-card">
                                                <img src="/images/PHP-logo.svg.png" alt="image" className="rounded-10" width="80" />
                                            </div>
                                        </div>
                                        <div className="col-lg-1 col-sm-6">
                                            <div className="funfact-card">
                                                <img src="/images/icon-7.svg" alt="image" className="rounded-10" width="80" />
                                            </div>
                                        </div>
                                        <div className="col-lg-1 col-sm-6">
                                            <div className="funfact-card">
                                                <img src="/images/icon-8.jpg" alt="image" className="rounded-10" width="80" />
                                            </div>
                                        </div>
                                        <div className="col-lg-1 col-sm-6">
                                            <div className="funfact-card">
                                                <img src="/images/icon-10.png" alt="image" className="rounded-10" width="80" />
                                            </div>
                                        </div>
                                        <div className="col-lg-1 col-sm-6">
                                            <div className="funfact-card">
                                                <img src="/images/icon-12.png" alt="image" className="rounded-10" width="80" />
                                            </div>
                                        </div>
                                        <div className="col-lg-1 col-sm-6">
                                            <div className="funfact-card">
                                                <img src="/images/icon-3.png" alt="image" className="rounded-10" width="80" />
                                            </div>
                                        </div>
                                        <div className="col-lg-1 col-sm-6">
                                            <div className="funfact-card">
                                                <img src="/images/icon-4.png" alt="image" className="rounded-10" width="80" />
                                            </div>
                                        </div>
                                        <div className="col-lg-1 col-sm-6">
                                            <div className="funfact-card">
                                                <img src="/images/icon-5.png" alt="image" className="rounded-10" width="80" />
                                            </div>
                                        </div>
                                        <div className="col-lg-1 col-sm-6">
                                            <div className="funfact-card">
                                                <img src="/images/icon-6.png" alt="image" className="rounded-10" width="80" />
                                            </div>
                                        </div>
                                        <div className="col-lg-1 col-sm-6">
                                            <div className="funfact-card">
                                                <img src="/images/icon-9.png" alt="image" className="rounded-10" width="80" />
                                            </div>
                                        </div>
                                      
                                        
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

export default ReactDetailsContent;