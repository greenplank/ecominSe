import React, { Component } from 'react';
import Link from 'next/link';

class Services extends Component {
    render() {
        return (
            <>
                <div className="bg-fcfbfb ptb-100 pb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2>Vi skapar engagerande innovativa digitala upplevelser
                            </h2>
                            <p>EcomIN hjälper företag att avancera och inspirera, skapa positiv transformation och kämpa för digital innovation. Se över det digitala landskapets horisont – det är dit vi kan ta dig.
                            </p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg text-center">
                                    <i className="pe-7s-vector bg-13c4a1"></i>
                                    <h3>
                                        <Link href="/ux-ui-design">
                                            <a>Gränssnittsdesign
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>Vi är ett av de ledande webbdesignföretagen i Europa och vi bygger innovativa användargränssnitt som ger bra resultat i tid och inom budget
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg text-center">
                                    <i className="pe-7s-global bg-6610f2"></i>
                                    <h3>
                                        <Link href="/webbutveckling">
                                            <a>webbutveckling
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>Vårt webbutvecklingsföretag arbetar med kunder baserade över hela Europa och över hela världen.
                                    </p>
                                    <br />
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg text-center">
                                    <i className="pe-7s-graph1 bg-ffb700"></i>
                                    <h3>
                                        <Link href="/Social-Media-Marknadsforing">
                                            <a>Digital marknadsföring
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>Vi gör digital marknadsföring för ditt varumärke och företag eller dina produkter och tjänster. Världen är för närvarande online
                                    </p>
                                    <br />
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg text-center">
                                    <i className="pe-7s-phone bg-fc3549"></i>
                                    <h3>
                                        <Link href="/App-utveckling">
                                            <a>Utveckling av mobilappar
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>Mobilapplikationsmarknaden växer otroligt snabbt. Enligt Gartners förutsägelser kommer efterfrågan på tjänster för utveckling av mobilappar att växa snabbare
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg text-center">
                                    <i className="pe-7s-cart bg-00d280"></i>
                                    <h3>
                                        <Link href="/Magento-utveckling">
                                            <a>E-handelsutveckling

                                            </a>
                                        </Link>
                                    </h3>
                                    <p>Vi svarar på olika utvecklingsbehov med expertis som sträcker sig från högpresterande infrastrukturinstallation till användarcentrerad webbdesign och ekosystemimplementering.

                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg text-center">
                                    <i className="pe-7s-target bg-ff612f"></i>
                                    <h3>
                                        <Link href="/Sokmotoroptimering">
                                            <a>SEO-optimering
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>Vi analyserar och definierar de sökord som söks i Google relativt sett och är avgörande för din affärsutveckling
                                    </p>
                                    <br />
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