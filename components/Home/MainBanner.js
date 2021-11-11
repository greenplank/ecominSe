import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Hidden from '@material-ui/core/Hidden';
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
                <div className="main-banner item-bg1">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="main-banner-content">
                                            <span>We Design, Develop & Support</span>
                                            <h1>The Technology Your Business Relies On</h1>
                                            <h3>Highly experienced Software & IT team, at your service</h3>
                                            <p>EcomIN is an international software development agency based in Sweden. From software development to digital marketing and design — we help companies transform their ideas into reality and boost growth.</p>

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
                                    <Hidden smDown>
                                          {/* Main Image */}
                                          <img
                                                src="/images/illustration1.webp"
                                                className="main-pic"
                                                alt="image"
                                            />
                                            </Hidden>
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