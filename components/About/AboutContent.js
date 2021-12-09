import React, { Component } from 'react';
import dynamic from 'next/dynamic';


class About extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <>
                <section className="about-area pt-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-image">
                                    <img src="/images/our-story.png" alt="image" className="rounded-10" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-content about-content-two">
                                    <div className="services-details-info">
                                        <h2>Vår historia

                                        </h2>
                                        <p>30+
                                        storleken på vårt team

                                        </p>
                                        <ul>
                                            <li><b>5 år+ </b>
                                            genomsnittlig utvecklarupplevelse

                                            </li>
                                            <li><b>300+ </b>
                                            WordPress-projekt avslutade

                                            </li>
                                            <li><b>380 000+  </b>
                                            timmar spenderade på projekt
 
                                            </li>
                                            <li><b>15+ </b>
                                            strategiska partnerskap med digitala byråer
 
                                            </li>
                                            <li><b>90% </b>
                                            kunder rekommenderar att du arbetar med oss
 
                                            </li>
                                            <li><b>95% </b>
                                            projekt avslutade i tid
 
                                            </li>
                                        </ul>
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

export default About;