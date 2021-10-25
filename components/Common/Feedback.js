import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    items: 1,
    navText: [
        "<i class='pe-7s-angle-left'></i>",
        "<i class='pe-7s-angle-right'></i>"
    ],
}

class Feedback extends Component {

    _isMounted = false;
    state = {
        display: false
    }
    componentDidMount() {
        this._isMounted = true;
        this.setState({ display: true })
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <section className="feedback-area ptb-100">
                <div className="container">
                    <div className="feedback-list">
                        <div className="quotes-icon">
                            <img src="/images/left-quote-white.png" alt="icon" />
                        </div>

                        {this.state.display ? <OwlCarousel
                            className="feedback-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="single-feedback">
                                <p>Overall, I had a great experience. The communication was spotty a few times, but I realize that a lot was due to it
                                </p>

                                <div className="bar"></div>

                                <h3>eritsuno</h3>
                            </div>

                            <div className="single-feedback">
                                <p>Excellent work for our social media. Creative and professional.
                                </p>

                                <div className="bar"></div>

                                <h3>vongee</h3>
                            </div>

                            <div className="single-feedback">
                                <p>Excellent job and a real professional. She delivered better value than we agreed on and before the deadline. I understand
                                </p>

                                <div className="bar"></div>

                                <h3>danielnst</h3>
                                {/* <span>Angular JS Specialist</span> */}
                            </div>
                            <div className="single-feedback">
                                <p>excellent service, very valuable and helpful audit. I expect that the recommendations will give a positive result. I would
                                </p>

                                <div className="bar"></div>

                                <h3>jimhall</h3>
                                {/* <span>Angular JS Specialist</span> */}
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>

            </section>
        );
    }
}

export default Feedback;