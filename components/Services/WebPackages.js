import React, { Component } from 'react';
import Link from 'next/link';

class WebPackages extends Component {
    render() {
        return (
            <>
                <section className="pricing-area ptb-100 bg-f9f6f6">
                    <div className="container">
                        <div className="section-title">
                            <h2>Webbutvecklingspaket
                            </h2>
                            <p>Som uppfyller dina behov
                            </p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="pricing-table">
                                    <div className="pricing-header">
                                        <h3>Perfekt för privatpersoner och nystartade företag!
                                        </h3>
                                    </div>

                                    <div className="price">
                                        <span>
                                            <sup>€</sup>599
                                            <span>50% rabatt!
                                            </span>
                                        </span>
                                    </div>

                                    <div className="pricing-features">
                                        <ul>
                                            <li className="active">2-sidig webbplats
                                            </li>
                                            <li className="active">Temabaserad design
                                            </li>
                                            <li className="active">Arkivbild</li>
                                            <li className="active">Responsiv design
                                            </li>
                                            <li className="active">Omgång 3 dagar
                                            </li>
                                            <li className="active">Integration av sociala medier
                                            </li>
                                            <li className="active">Kontaktformulär ingår
                                            </li>
                                            <br />
                                            <br />
                                            <br />
                                            <br />
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
                                            <span>50% rabatt!
                                            </span>
                                        </span>
                                    </div>

                                    <div className="pricing-features">
                                        <ul>
                                            <li className="active">Mest populär av nya företag!
                                            </li>
                                            <li className="active">3 sidors webbplats
                                            </li>
                                            <li className="active">Temabaserad design
                                            </li>
                                            <li className="active">Arkivbild
                                            </li>
                                            <li className="active">Originalinnehåll
                                            </li>
                                            <li className="active">Omgång 4 dagar
                                            </li>
                                            <li className="active">Responsiv design
                                            </li>
                                            <li className="active">Content Management System
                                            </li>
                                            <li className="active">Integration av sociala medier
                                            </li>
                                            <li className="active">Blogginställningar
                                            </li>
                                            <li className="active">Kontaktformulär ingår
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

                            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                                <div className="pricing-table">
                                    <div className="pricing-header">
                                        <h3>PROFESSIONELL</h3>
                                    </div>

                                    <div className="price">
                                        <span>
                                            <sup>€</sup>1999
                                            <span>50% rabatt!
                                            </span>
                                        </span>
                                    </div>

                                    <div className="pricing-features">
                                        <ul>
                                            <li className="active">Webbplats på 6 sidor
                                            </li>
                                            <li className="active">Specialdesignad
                                            </li>
                                            <li className="active">Arkivbild</li>
                                            <li className="active">Originalinnehåll
                                            </li>
                                            <li className="active">Omgång 7 dagar
                                            </li>
                                            <li className="active">Responsiv design
                                            </li>
                                            <li className="active">Content Management System
                                            </li>
                                            <li className="active">Reglage</li>
                                            <li className="active">Integration av sociala medier
                                            </li>
                                            <li className="active">SEO-funktioner
                                            </li>
                                            <li className="active">Blogginställningar och kontaktformulär ingår
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

export default WebPackages;