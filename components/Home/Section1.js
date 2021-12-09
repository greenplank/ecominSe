import React, { Component } from 'react';

class Section1 extends Component {
    render() {
        return (
            <section className="funfacts-area ptb-100 bg-fcfbfb">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12">
                            <img src="/images/boostImage.webp" alt="image" className="rounded-10" />
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="section-title">
                                <h2>Öka din digitala närvaro
                                </h2>
                                <h3>Att växa ditt företag
                                </h3>
                                <span></span>
                                <p>Skaffa skräddarsydda digitala lösningar för ditt företag och din målgrupp för att göra högre vinster.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="section-title">
                                <h2>Prisvärt, innovativt, lägligt.

                                </h2>
                                <h3>Anpassad webbapplikationsutveckling
                                </h3>
                                <span></span>
                                <p>Oavsett om du behöver en nyutvecklad webbplats för att öka kundernas engagemang, en webbportal för att förbättra synlighet och organisation, eller en robust och funktionsrik webbapplikation för att automatisera affärsprocesser, har EcomIN lösningen.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <img src="/images/affordable.webp" alt="image" className="rounded-10" />
                        </div>

                        <br />
                    </div>
                </div>

            </section>
        );
    }
}

export default Section1;