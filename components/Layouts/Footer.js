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
                                                <img src="/images/ECommerceIN.png" alt="image" />
                                            </a>
                                        </Link>
                                    </div>

                                    <p>Ecomin is a software development organization that offers first-class services to companies of all kinds.
                                    </p>

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

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-footer-widget ml-4 pl-5">
                                    <h3>Explore
                                    </h3>

                                    <ul className="list">
                                        <li>
                                            <Link href="/">
                                                <a>Home</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/portfolio">
                                                <a>Portfolio</a>
                                            </Link>
                                        </li>
                                        {/* <li>
                                            <Link href="/team">
                                                <a>Team</a>
                                            </Link>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget ml-4">
                                    <h3>Quick links
                                    </h3>

                                    <ul className="list">
                                        <li>
                                            <Link href="/about">
                                                <a>About Us</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>Contact Us
                                                </a>
                                            </Link>
                                        </li>
                                       
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>Get in touch
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
                            <p>Copyright &copy; {currentYear} Ecomin. All Rights Reserved By <a href="https://ecomin.se" target="_blank">Ecomin</a></p>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;