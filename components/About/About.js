import React, { Component } from 'react';
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
                <section className="about-area bg-fcfbfb ptb-100">
                    <div className="container">
                        <div className="row align-items-center">


                            <div className="col-lg-7 col-md-12">
                                <div className="about-content about-content-two">
                                    <div className="section-title">
                                        <h2>How we work?
                                        </h2>
                                        <p>Team of WordPress developers analysing new project
                                        </p>
                                    </div>


                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="about-text mb-30">
                                                <ul>
                                                    <li>
                                                        <h4>1. Analysis</h4>
                                                        <p>Let’s meet: online or in-person and discuss your ideas and needs.<br /> Deadline marked on a calendar</p>
                                                    </li>
                                                    <li>
                                                    <h4>2. Estimation</h4>
                                                    <p>Based on all the gathered information we will prepare a detailed timeline for the project. You will know the costs right away. <br /> Custom WordPress theme code displayed on a screen</p>
                                                    </li>
                                                    <li>
                                                    <h4>3. Development</h4>
                                                    <p>Our work begins. Our developers turn your designs and vision into quality code. <br/> Testing your website on different devices</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="about-text mb-30">
                                                <ul>
                                                    <li>
                                                        <h4>4. Quality assurance</h4>
                                                        <p>One of the final stages of the process. We make sure your code is completely bug- free. <br /> Race start</p>
                                                    </li>
                                                    <li>
                                                        <h4>5. Implementation</h4>
                                                        <p>We install the product on servers of your choosing. Do you need hosting services? We got you covered. </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12">
                                <div className="about-image">
                                    <img src="/images/about-img5.jpg" alt="image" className="rounded-10" />

                                    <div className="video-box">
                                        <div
                                            onClick={e => { e.preventDefault(); this.openModal() }}
                                            className="video-btn"
                                        >
                                            <i className="pe-7s-play"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* If you want to change the video need to update below videoID */}
                    <ModalVideo
                        channel='youtube'
                        isOpen={this.state.isOpen}
                        videoId='s58osmryoMY'
                        onClose={() => this.setState({ isOpen: false })}
                    />
                </section>
            </>
        );
    }
}

export default About;