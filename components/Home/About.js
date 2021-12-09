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
                            <div className="col-lg-6 col-md-12">
                                <div className="about-image">
                                    \
                                    <img src="/images/spl-image-main.webp" alt="image" className="rounded-10" />

                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-content about-content-two">
                                    <div className="section-title">

                                        <div className="services-details-info">
                                            <h2>Om EcomIN AB
                                            </h2>
                                            <ul>
                                                <li>Experter med den senaste trenden och know-how kunskap
                                                </li>
                                                <li>30+ experter redo att arbeta med dig idag
                                                </li>
                                                <li>Fullt engagemang och fokus på ditt projekt
                                                </li>
                                                <li>Kundreferenser och 12 månaders garanti på alla projekt
                                                </li>
                                                <li>Ansvar byggt genom långsiktigt samarbete
                                                </li>
                                                <li>Dedikerade verktyg och tillgång till ett pålitligt partnernätverk
                                                </li>
                                                {/* <li>Trusted by: (give logos of clients)</li> */}
                                            </ul>
                                        </div>
                                        <Link href="/OmOss">
                                            <a className="btn btn-primary">Läs mer
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