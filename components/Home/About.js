import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

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
                                    <img src="/images/about2.png" alt="image" className="rounded-10" />
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="about-content about-content-two">
                                    <div className="section-title">

                                        <div className="services-details-info">
                                            <h2>About EcomIN AB
                                            </h2>
                                            <ul>
                                                <li>Experts with the latest trend and know-how knowledge</li>
                                                <li>30+ experts ready to work with you today</li>
                                                <li>Full commitment and focus on your project</li>
                                                <li>Client references and a 12-month warranty on all projects</li>
                                                <li>Responsibility built through long-term cooperation</li>
                                                <li>Dedicated tools and access to a trusted partner network</li>
                                                {/* <li>Trusted by: (give logos of clients)</li> */}
                                            </ul>
                                        </div>
                                        <Link href="/about">
                                            <a className="btn btn-primary">Read more
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* If you want to change the video need to update below videoID */}
                    <ModalVideo
                        channel='youtube'
                        isOpen={this.state.isOpen}
                        videoId='_ysd-zHamjk'
                        onClose={() => this.setState({ isOpen: false })}
                    />
                </section>
            </>
        );
    }
}

export default About;