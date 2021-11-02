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
                                    <p>Are you a site owner? You Deserve Peace of Mind! Compare our Trusted & Checked Wordpress All-in-one solution* 
                                    </p>
                                </div>
                                <div className="portfolio-desc">
                                    <h5>WordPress Websites All-In-One Solution*</h5>
                                    <h2>The World's Leading Website Platform
                                    </h2>
                                    <p>Launch your website on the platform that over 60 million rely on, WordPress, on the robust Google Cloud infrastructure with hand-picked plugins to grow your business online. 
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