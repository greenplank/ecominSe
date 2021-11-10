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
                                        <h2>Our Story
                                        </h2>
                                        <p>30+
                                            size of our team
                                        </p>
                                        <ul>
                                            <li><b>5 years+ </b>
                                                average developer experience
                                            </li>
                                            <li><b>300+ </b>
                                                WordPress projects completed
                                            </li>
                                            <li><b>380 000+  </b>
                                            hours spent on projects 
                                            </li>
                                            <li><b>15+ </b>
                                            strategic partnerships with digital agencies 
                                            </li>
                                            <li><b>90% </b>
                                            clients recommend working with us 
                                            </li>
                                            <li><b>95% </b>
                                            projects finished on time 
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