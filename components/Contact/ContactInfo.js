import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-info-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="pe-7s-mail"></i>
                                </div>
                                <h3>Mejla här

                                </h3>
                                {/* <p><a href="mailto:admin@pungent.com">admin@pungent.com</a></p> */}
                                <p><a href="mailto:info@ecomin.se">info@ecomin.se</a></p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="pe-7s-map-2"></i>
                                </div>
                                <h3>Besök här

                                </h3>
                                <p>Klågarupsvägan 361 SE 212 36 Malmö Sweden</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="pe-7s-call"></i>
                                </div>
                                <h3>Ring här

                                </h3>
                                <p><a href="tel:0046-761734777">0046-761734777</a></p>
                                {/* <p><a href="+2414524526">+241 452 4526</a></p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactInfo;