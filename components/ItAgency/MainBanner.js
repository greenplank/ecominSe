import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class MainBanner extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <>
                <div className="hero-banner it-banner overly hero-bg4">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="main-banner-content">
                                            <p style={{ fontSize: "20px" }}><b>IT design and consulting
                                            </b></p>

                                            <h1 style={{ fontSize: "30px" }}>Our intelligent
                                                technology solutions and services</h1>

                                            <p >We work together with our customers to build a convincing product that provides lasting excitement and value for our customers. We have passionate, creative and experienced developers
                                            </p>

                                            <Link href="/web-development" >
                                                <a className="btn btn-primary">Our Services
                                                </a>
                                            </Link>

                                            <Link href="/#play-video">
                                                <a
                                                    onClick={e => { e.preventDefault(); this.openModal() }}
                                                    className="btn btn-secondary"
                                                >
                                                    <i className="icofont-ui-play"></i>Watch the video
                                                </a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="animate-banner-image">
                                            <img src="/images/illustration1.png" alt="Animate image" width="80%" />
                                        </div>
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
            </>
        );
    }
}

export default MainBanner;