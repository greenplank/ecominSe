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
                <section className="about-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <div className="about-image">
                                    <img src="/images/about21.png" alt="image" className="rounded-10" />
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="about-content about-content-two">
                                    <div className="section-title">
                                        <h2>Exclusive agency for technology that provides a solution
                                        </h2>
                                        <p>We have a team of professionals in IT services and management consultant with extensive experience in diversified industries. We know the knowledge of requirements analysis for implementing solutions. Development of smart and efficient solutions that not only meet our customers' needs but also motivate their budgets. To build such solutions that give customers a differentiated and competitive advantage. The focus of our business is based on the core philosophy "Providing smart solutions" for IT services and management consultant. Customer orientation, building that is easy to install and use, efficient and effective smart solutions are our highest priority that gives our customers a competitive advantage to achieve business growth.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* If you want to change the video need to update below videoID */}

                </section>
            </>
        );
    }
}

export default About;