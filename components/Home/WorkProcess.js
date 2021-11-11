import React, { Component } from 'react';

class WorkProcess extends Component {
    render() {
        return (
            <>
                <section className="work-process-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <h2>Our work process
                            </h2>
                        </div>

                        <div className="work-process">
                                <img src="/images/man-with-mobiles.webp" alt="logo" />
                            <div className="work-process-list">
                                <div className="single-work-process">
                                    <div className="icon">
                                        <i className="pe-7s-display1"></i>
                                    </div>
                                    <h3>Plan</h3>
                                    <span>Visual design
                                    </span>
                                </div>

                                <div className="single-work-process">
                                    <div className="icon">
                                        <i className="pe-7s-display2"></i>
                                    </div>
                                    <h3>Define</h3>
                                    <span>Wire frames
                                    </span>
                                </div>

                                <div className="single-work-process">
                                    <div className="icon">
                                        <i className="pe-7s-airplay"></i>
                                    </div>
                                    <h3>Design</h3>
                                    <span>Screen flow
                                    </span>
                                </div>

                                <div className="single-work-process">
                                    <div className="icon">
                                        <i className="pe-7s-note2"></i>
                                    </div>
                                    <h3>Building</h3>
                                    <span>implementation
                                    </span>
                                </div>

                                <div className="single-work-process">
                                    <div className="icon">
                                        <i className="pe-7s-light"></i>
                                    </div>
                                    <h3>Testing
                                    </h3>
                                    <span>User research</span>
                                </div>

                                <div className="single-work-process">
                                    <div className="icon">
                                        <i className="pe-7s-sun"></i>
                                    </div>
                                    <h3>Delpoyment
                                    </h3>
                                    <span>Lunch / analyze
                                    </span>
                                </div>
                            </div>

                            <img src="/images/circle.png" className="rotateme circle-image" alt="image" />
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default WorkProcess;