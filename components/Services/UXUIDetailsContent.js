import React, { Component } from 'react';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';
import UXUIFeatures from './UXUIFeatures';

class UXUIDetailsContent extends Component {

    render() {

        return (
            <>

                <section className="pt-100 pb-70 bg-fcfbfb">
                    <div className="container">
                        <div className="row justify-content-center" style={{ textAlign: "center" }}>
                            <h2>Utformningen av UI / UX arbetsflöde

                            </h2>
                            <p>Vi levererar en effektiv och enkel användarupplevelse med programmets rena och vackra grafiska layout.

                            </p>

                            <div className="col-lg-1 col-4 col-sm-6">
                                <div className="funfact-card">
                                    <img src="/images/knowledge.svg" alt="image" className="rounded-10" width="80" />
                                    <h6>Inlärning
                                    </h6>

                                </div>
                            </div>

                            <div className="col-lg-1 col-4 col-sm-6">
                                <div className="funfact-card">
                                    <img src="/images/loupe.svg" alt="image" className="rounded-10" width="80" />
                                    <h6>Forskning</h6>

                                </div>
                            </div>

                            <div className="col-lg-1 col-4 col-sm-6">
                                <div className="funfact-card">
                                    <img src="/images/wireframe.svg" alt="image" className="rounded-10" width="80" />
                                    <h6>Trådram
                                    </h6>

                                </div>
                            </div>
                            <div className="col-lg-1 col-4 col-sm-6">
                                <div className="funfact-card">
                                    <img src="/images/illustration.svg" alt="image" className="rounded-10" width="80" />
                                    <h6>Design</h6>

                                </div>
                            </div>
                            <div className="col-lg-1 col-4 col-sm-6">
                                <div className="funfact-card">
                                    <img src="/images/prototyping.svg" alt="image" className="rounded-10" width="80" />
                                    <h6>Prototyp</h6>

                                </div>
                            </div>
                            <div className="col-lg-1 col-4 col-sm-6">
                                <div className="funfact-card">
                                    <img src="/images/3d-movie.svg" alt="image" className="rounded-10" width="80" />
                                    <h6>Animationer
</h6>

                                </div>
                            </div>
                            <div className="col-lg-1 col-4 col-sm-6">
                                <div className="funfact-card">
                                    <img src="/images/copyright.svg" alt="image" className="rounded-10" width="80" />
                                    <h6>Riktlinjer för UI
                                    </h6>

                                </div>
                            </div>
                            <div className="col-lg-1 col-4 col-sm-6">
                                <div className="funfact-card">
                                    <img src="/images/review.svg" alt="image" className="rounded-10" width="80" />
                                    <h6>Recensioner</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <UXUIFeatures />

                <section className="portfolio-details ptb-110 ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-desc" style={{ textAlign: "center", fontSize: "500em" }}>
                                    <h2 style={{ fontSize: "48px" }}>Våra UI/UX-tjänster

                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-100 pb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-6 col-sm-6">
                                <div className="funfact-card">
                                    <img src="/images/web-design.svg" alt="image" className="rounded-10" width="80" />
                                    <h4>UI / UX design
                                    </h4>
                                    <p>Vi är mycket skickliga på att utveckla billiga PWA för att skapa pålitliga, snabba och engagerande webbappar.

                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6 col-sm-6">
                                <div className="funfact-card">
                                    <img src="/images/brainstorming.svg" alt="image" className="rounded-10" width="80" />
                                    <h4>UX konsultation
                                    </h4>
                                    <p>Genom att anta en kundstrategi tillhandahåller vi lösningar som förbättrar användbarheten av din produkt.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6 col-sm-6">
                                <div className="funfact-card">
                                    <img src="/images/computer.svg" alt="image" className="rounded-10" width="80" />
                                    <h4>Webb- och mobildesign
                                    </h4>
                                    <p>Vi skapar innovativa och aktuella mönster som hjälper dig att forma din varumärkesidentitet oavsett skärmstorlek eller plattform.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6 col-sm-6">
                                <div className="funfact-card">
                                    <img src="/images/web-programming-1.svg" alt="image" className="rounded-10" width="80" />
                                    <h4>UI / UX varumärkesidentitet
                                    </h4>
                                    <p>Vår kreativa och engagerande design ger dina varor en känsla av syfte, stärker deras varumärke och ökar medvetenheten.
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