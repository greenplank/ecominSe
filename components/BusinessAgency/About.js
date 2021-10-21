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
                                        <h2>Vi arbetar med mer än 2 års erfarenhet</h2>
                                        <p>Vi gör vardagen enklare för människor och företag genom webb- och mobil utvecklingsteknik, samtidigt som vi marknadsför dem med digital marknadsföring.</p>
                                    </div>


                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="about-text mb-30">
                                                <ul>
                                                    <li>
                                                        <i className="pe-7s-check"></i>

                                                        Webbdesign och utveckling
                                                    </li>
                                                    <li>
                                                        <i className="pe-7s-check"></i>
                                                        Gränssnittsdesign
                                                    </li>
                                                    <li>
                                                        <i className="pe-7s-check"></i>
                                                        Expertteam
                                                    </li>
                                                    <li>
                                                        <i className="pe-7s-check"></i>
                                                        Kreativitet och tydlighet.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="about-text mb-30">
                                                <ul>
                                                    <li>
                                                        <i className="pe-7s-check"></i>
                                                        Digital marknadsföring
                                                    </li>
                                                    <li>
                                                        <i className="pe-7s-check"></i>
                                                        Online support
                                                    </li>
                                                    <li>
                                                        <i className="pe-7s-check"></i>
                                                        Snabb åtkomst
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