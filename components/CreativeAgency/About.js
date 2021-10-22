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
                                        <h2>Om ECOMIN</h2>
                                        <p style={{ fontSize: "20px",marginBottom:"20px" }}>Vi erbjuder flera tjänster inom webbplatsutveckling, grafisk design, digital marknadsföring och mobilapputveckling. Vi tillverkar CMS, CRM och erbjuder ERP -lösningar. Ecomin är ett dataföretag i Pakistan och även ett registrerat företag i Pakistan. Ytterligare tjänster vi tillhandahåller inkluderar webbdesign, API -utveckling, SEO Company Pakistan och iOS -apputveckling. Vi har mycket erfarna webbutvecklare som framgångsrikt har startat olika stora projekt och bevisat sin kompetens i många projekt. Vi är ansvariga för arbetet och vi försöker upprätthålla den bästa relationen med våra kunder. Som ett ledande programvaruhus i Pakistan har vi designat hundratals webbplatser, mobilappar, logotyper och ikoner för våra kunder med en unik forskningsbaserad process. Vårt mjukvaruhus sprider de bästa tjänsterna inom IT -branschen från de senaste fyra åren.</p>
                                        <Link href="/contact">
                                            <a className="btn btn-primary">Läs mer</a>
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