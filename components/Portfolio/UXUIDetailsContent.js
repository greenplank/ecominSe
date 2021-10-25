import React, { Component } from 'react';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';
import BestServices from '../../components/StartupAgency/BestServices';

class UXUIDetailsContent extends Component {

    render() {

        return (
            <>

                <section className="pt-100 pb-70 bg-fcfbfb">
                    <div className="container">
                        <div className="row justify-content-center" style={{ textAlign: "center" }}>
                            <h2>The design of UI / UX workflow
                            </h2>
                            <p>We deliver an efficient and simple user experience with the program's clean and beautiful graphic layout.
                            </p>

                            <div className="col-lg-1 col-sm-6">
                                <div className="funfact-card">
                                    <img src="/images/knowledge.svg" alt="image" className="rounded-10" width="80" />
                                    <h6>Learning
                                    </h6>

                                </div>
                            </div>

                            <div className="col-lg-1 col-sm-6">
                                <div className="funfact-card">
                                    <img src="/images/loupe.svg" alt="image" className="rounded-10" width="80" />
                                    <h6>Research</h6>

                                </div>
                            </div>

                            <div className="col-lg-1 col-sm-6">
                                <div className="funfact-card">
                                    <img src="/images/wireframe.svg" alt="image" className="rounded-10" width="80" />
                                    <h6>Wire frame
                                    </h6>

                                </div>
                            </div>
                            <div className="col-lg-1 col-sm-6">
                                <div className="funfact-card">
                                    <img src="/images/illustration.svg" alt="image" className="rounded-10" width="80" />
                                    <h6>Design</h6>

                                </div>
                            </div>
                            <div className="col-lg-1 col-sm-6">
                                <div className="funfact-card">
                                    <img src="/images/prototyping.svg" alt="image" className="rounded-10" width="80" />
                                    <h6>Prototype</h6>

                                </div>
                            </div>
                            <div className="col-lg-1 col-sm-6">
                                <div className="funfact-card">
                                    <img src="/images/3d-movie.svg" alt="image" className="rounded-10" width="80" />
                                    <h6>Animations</h6>

                                </div>
                            </div>
                            <div className="col-lg-1 col-sm-6">
                                <div className="funfact-card">
                                    <img src="/images/copyright.svg" alt="image" className="rounded-10" width="80" />
                                    <h6>UI Guidelines
                                    </h6>

                                </div>
                            </div>
                            <div className="col-lg-1 col-sm-6">
                                <div className="funfact-card">
                                    <img src="/images/review.svg" alt="image" className="rounded-10" width="80" />
                                    <h6>Reviews</h6>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <BestServices />

                <section className="portfolio-details ptb-110 ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-desc" style={{ textAlign: "center", fontSize: "500em" }}>
                                    <h2 style={{ fontSize: "48px" }}>Our UI / UX services
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-100 pb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-sm-6">
                                <div className="funfact-card">
                                    <img src="/images/web-design.svg" alt="image" className="rounded-10" width="80" />
                                    <h4>UI / UX design
                                    </h4>
                                    <p>We are very skilled at developing cheap PWA to create reliable, fast and engaging web apps.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="funfact-card">
                                    <img src="/images/brainstorming.svg" alt="image" className="rounded-10" width="80" />
                                    <h4>UX Consulting
                                    </h4>
                                    <p>By adopting a customer strategy, we provide solutions that improve the usability of your product.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="funfact-card">
                                    <img src="/images/computer.svg" alt="image" className="rounded-10" width="80" />
                                    <h4>Web and mobile design
                                    </h4>
                                    <p>We create innovative and current patterns that help you shape your brand identity regardless of screen size or platform.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="funfact-card">
                                    <img src="/images/web-programming-1.svg" alt="image" className="rounded-10" width="80" />
                                    <h4>UI / UX brand identity
                                    </h4>
                                    <p>Our creative and engaging designs offer your goods a sense of purpose, strengthen their brand and increase awareness.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </>
        );
    }
}

export default UXUIDetailsContent;