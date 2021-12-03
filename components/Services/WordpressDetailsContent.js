import React, { Component } from 'react';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';


class WebDetailsContent extends Component {


    render() {

        return (
            <>


                <section className="portfolio-details ptb-100 ">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-12 col-md-12">
                                <div className="portfolio-desc">
                                    {/* <h2>Du måste erbjuda en unik användarupplevelse. Våra React.js -utvecklare gör dina idéer till verklighet.
                                    </h2> */}
                                    <p>Är du webbplatsägare? Du förtjänar sinnesro! Jämför vår betrodda och kontrollerade Wordpress allt-i-ett-lösning*
                                    </p>
                                </div>
                                <div className="portfolio-desc">
                                    <h5>Allt-i-ett-lösning för WordPress-webbplatser*
                                    </h5>
                                    <h2>Världens ledande webbplatsplattform
                                    </h2>
                                    <p>Lansera din webbplats på plattformen som över 60 miljoner litar på, WordPress, på den robusta Google Cloud-infrastrukturen med handplockade plugins för att få ditt företag att växa online.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className=" bg-fcfbfb">


                </section>





            </>
        );
    }
}

export default WebDetailsContent;