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
                                        <h2>About EcomIN AB
                                        </h2>
                                        <p style={{ fontSize: "20px", marginBottom: "20px" }}>We offer several services in website development, graphic design, digital marketing and mobile app development. We manufacture CMS, CRM and offer ERP solutions. EcomIN AB is a computer company in Sweden and also a registered company in Sweden. Additional services we provide include web design, API development, SEO Company Pakistan and iOS app development. We have very experienced web developers who have successfully started various large projects and proven their competence in many projects. We are responsible for the work and we try to maintain the best relationship with our customers. As a leading software house in Sweden, we have designed hundreds of websites, mobile apps, logos and icons for our customers with a unique research-based process. Our software house spreads the best services in the IT industry from the last four years.
                                        </p>
                                        <Link href="/contact">
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