import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {

        let currentYear = new Date().getFullYear();

        return (
            <>
                <footer className="footer-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="logo">
                                        <Link href="/">
                                            <a>
                                                {/* <img src="/images/ECommerceIN-06.png" alt="image" /> */}
                                                <img src="/images/ECommerceIN copy-01.png" alt="image" />
                                            </a>
                                        </Link>
                                    </div>

                                    <p>Ecomin är en mjukvaruutvecklingsorganisation som erbjuder förstklassiga tjänster till företag av alla slag.
                                    </p>
                                    <ul className="list">
                                        <li>
                                            <Link href="/GDPR">
                                                <a>GDPR
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul className="social-links">
                                        <li>
                                            <a href="https://www.facebook.com/ecominse/" target="_blank">
                                                <i className="icofont-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://pk.linkedin.com/company/ecominse" target="_blank">
                                                <i className="icofont-linkedin"></i>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6 col-sm-6">
                                <div className="single-footer-widget ml-4 pl-5">
                                    <h3>Utforska
                                    </h3>

                                    <ul className="list">


                                        <li>
                                            <Link href="/web-development">
                                                <a>Webbutveckling
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/ux-ui-design">
                                                <a>UX/UI-design
                                                </a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="/Search-Engine-Optimization">
                                                <a>SEO-tjänster
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/Social-Media-Marketing">
                                                <a>Marknadsföring i sociala medier
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/PaidMarketing">
                                                <a>Betald marknadsföring-PPC
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/Site-Audit-Report">
                                                <a>Rapportering av webbplatsrevision
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6 col-sm-6">
                                <div className="single-footer-widget ml-4">
                                    <h3>Snabblänkar
                                    </h3>

                                    <ul className="list">
                                        <li>
                                            <Link href="/">
                                                <a>Hem
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/portfolio">
                                                <a>Portfölj
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/Faqs">
                                                <a>Vanliga frågor
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <a>Om oss
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>Kontakta oss
                                                </a>
                                            </Link>
                                        </li>



                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>Komma i kontakt
                                    </h3>

                                    <ul className="get-in-touch">
                                        <li><i className="icofont-home"></i> Klågarupsvägan 361 SE 212 36 Malmö Sweden</li>
                                        <li>
                                            <i className="icofont-live-support"></i>
                                            <a href="tel:0046-761734777">
                                                0046-761734777</a>
                                        </li>
                                        <li>
                                            <i className="icofont-envelope"></i>
                                            <a href="mailto:info@ecomin.se">
                                                info@ecomin.se</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <div className="container">
                            <p>upphovsrätt
                                &copy; {currentYear} Ecomin. Alla rättigheter reserverade av <a href="https://ecomin.se" target="_blank"> Ecomin</a></p>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;