import React, { Component } from 'react';


class FoundationWorkDetailsContent extends Component {


    render() {
        return (
            <>
                <section className="services-details-area pt-15">

                    <div className="container">
                        <div className="row">
                            <div className="section-title pt-100">
                                <h2>Foundations of our work
                                </h2>
                            </div>
                         
                            <section className="about-area">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="about-image">
                                                <img src="/images/Foundation-of-works.png" alt="image" className="rounded-10" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-12">
                                            <div className="about-content about-content-two">
                                                <div className="services-details-info">
                                                    <h3>Security</h3>
                                                    <p>Did you know that the White House website is based on WordPress? Your software is creating in mind with the latest security and threat prevention methods. </p>

                                                    <h3>Quality</h3>
                                                    <p>We know how important quality is ... that’s why it’s at the center of everything we do. </p>

                                                    <h3>Scalability</h3>
                                                    <p>Choose a provider that gives you the ability to easily scale and grow with your needs. </p>

                                                    <h3>Flexibility</h3>
                                                    <p>Use our elastic approach to create software that fits all your needs, now and in the future, all in accordance with the Agile software development methodology. </p>

                                                    <h3>Punctuality</h3>
                                                    <p>Time is money – we know, that’s why we make sure to deliver projects in the agreed timelines. In case we run into any challenges, you will be the first one to know.  </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default FoundationWorkDetailsContent;