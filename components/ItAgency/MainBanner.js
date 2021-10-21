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
                                        <p style={{fontSize:"30px"}}><b>IT -design och rådgivning</b></p>
                                           
                                            <h1 style={{fontSize:"50px"}}>Våra intelligenta
                                                teknologilösningar och tjänster</h1>

                                            <p >Vi arbetar tillsammans med våra kunder för att bygga en övertygande produkt som ger varaktig spänning och värde för våra kunder. Vi har passionerade, kreativa och erfarna utvecklare</p>

                                            <Link href="/contact" >
                                                <a className="btn btn-primary">Våra tjänster</a>
                                            </Link>

                                            <Link href="/#play-video">
                                                <a
                                                    onClick={e => { e.preventDefault(); this.openModal() }}
                                                    className="btn btn-secondary"
                                                >
                                                    <i className="icofont-ui-play"></i>Kolla på video
                                                </a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="animate-banner-image">
                                            <img src="/images/illustration1.png" alt="Animate image" />
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