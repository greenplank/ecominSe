import React, { Component } from 'react';
import Link from 'next/link';

class Services extends Component {
    render() {
        return (
            <>
                <div className="bg-fcfbfb ptb-100 pb-70">
                    <div className="container">
                        <div className="section-title">
                            <h2>Vi tillhandahåller IT -tjänster</h2>
                            <p>Kombinera strategi, innovation, teknik och design för att bygga de mest komplexa affärslösningarna.</p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg">
                                    <i className="pe-7s-comment bg-13c4a1"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Gränssnittsdesign</a>
                                        </Link>
                                    </h3>
                                    <p>Vi är ett av de ledande webbdesignföretagen i Europa och vi bygger innovativa användargränssnitt som ger bra resultat i tid och på budget</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg">
                                    <i className="pe-7s-display2 bg-6610f2"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>webbutveckling</a>
                                        </Link>
                                    </h3>
                                    <p>Vårt webbutvecklingsföretag arbetar med kunder baserade över hela Europe och över hela världen.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg">
                                    <i className="pe-7s-light bg-ffb700"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Digital marknadsföring</a>
                                        </Link>
                                    </h3>
                                    <p>Vi gör digital marknadsföring för ert varumärke och företag eller era produkter och tjänster. Världen är för närvarande online</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg">
                                    <i className="pe-7s-phone bg-fc3549"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Mobilapputveckling</a>
                                        </Link>
                                    </h3>
                                    <p>Mobilapplikationsmarknaden växer otroligt snabbt. Enligt Gartners förutsägelser kommer efterfrågan på mobilappsutvecklingstjänster att växa snabbare
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg">
                                    <i className="pe-7s-cart bg-00d280"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>e -handelsutveckling
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>Vi svarar på olika utvecklingsbehov med expertis som sträcker sig från högpresterande infrastrukturinstallation till användarcentrerad webbdesign och ekosystemimplementering.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one white-bg">
                                    <i className="pe-7s-users bg-ff612f"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>SEO Optimiserande</a>
                                        </Link>
                                    </h3>
                                    <p>Vi analyserar och definierar de sökord som sökes i Google relativt och är avgörande för din affärsutveckling</p>
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