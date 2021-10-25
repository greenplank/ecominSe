import React, { Component } from 'react';
import Link from 'next/link';

class CtaAreaTwo extends Component {
    render() {
        return (
            <div className="cta-area-two ptb-100">
                <div className="container">
                    <div className="cta-content">
                        <span>SO WHAT'S NEXT?
                        </span>
                        <h3>Are you ready? Let's start working!
                        </h3>
                    </div>

                    <div className="cta-btn-box">
                        <Link href="/contact">
                            <a className="custom-btn">Contact Us
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default CtaAreaTwo;