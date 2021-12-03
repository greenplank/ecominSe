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
                <div className="main-banner item-bg1">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="main-banner-content">
                                            <span>Vi designar, utvecklar och stöttar
                                            </span>
                                            <h1>Tekniken ditt företag litar på
                                            </h1>
                                            <h3>Mycket erfaret mjukvaru- och IT-team, till din tjänst
                                            </h3>
                                            <p>EcomIN är en internationell mjukvaruutvecklingsbyrå med säte i Sverige. Från mjukvaruutveckling till digital marknadsföring och design – vi hjälper företag att omvandla sina idéer till verklighet och öka tillväxten.
                                            </p>

                                            <Link href="/web-development" >
                                                <a className="btn btn-primary">Våra tjänster

                                                </a>
                                            </Link>

                                            <Link href="/#play-video">
                                                <a
                                                    onClick={e => { e.preventDefault(); this.openModal() }}
                                                    className="btn btn-secondary"
                                                >
                                                    <i className="icofont-ui-play"></i>Titta på videon

                                                </a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">

                                        <img
                                            src="/images/illustration1.webp"
                                            className="main-pic"
                                            alt="image"
                                        />

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
                    videoId='me7dYtTsbMc'
                    onClose={() => this.setState({ isOpen: false })}
                />
            </>
        );
    }
}

export default MainBanner;
