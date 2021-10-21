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
        this.setState({isOpen: true})
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

                                    {/* <div className="video-box">
                                        <div
                                            onClick={e => {e.preventDefault(); this.openModal()}}
                                            className="video-btn"
                                        > 
                                            <i className="pe-7s-play"></i>
                                        </div>
                                    </div> */}
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="about-content about-content-two">
                                    <div className="section-title">
                                        <h2>Exklusiv byrå för teknik som ger en lösning</h2>
                                        <p>Vi har ett team av proffs inom IT -tjänster och managementkonsult med stor erfarenhet inom diversifierade branscher. Vi kan kunskapen om kravanalys för implementering av lösningar. Utveckling av smarta och effektiva lösningar som inte bara möter våra kunders behov utan också motiverar deras budgetar. Att bygga sådana lösningar som ger kunderna en differentierad och konkurrensfördel. Fokus för vår verksamhet bygger på kärnfilosofin "Att tillhandahålla smarta lösningar" för IT -tjänster och managementkonsult. Kundorientering, byggnad som är enkel att installera och använda, effektiva och effektiva smarta lösningar är vår högsta prioritet som ger våra kunder en konkurrensfördel för att uppnå företagstillväxt.</p>
                                    </div>

                              

                                    {/* <div className="about-text">
                                        <h4>Our Mission</h4>
                                        <ul>
                                            <li>
                                                <i className="pe-7s-check"></i> 
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            </li>
                                            <li>
                                                <i className="pe-7s-check"></i> 
                                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                            </li>
                                            <li>
                                                <i className="pe-7s-check"></i> 
                                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.
                                            </li>
                                        </ul>
                                    </div> */}

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