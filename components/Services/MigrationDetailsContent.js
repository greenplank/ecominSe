import React, { Component } from 'react';


class MigrationDetailsContent extends Component {


    render() {
        return (
            <>
                <section className="services-details-area ptb-100">

                    <div className="container">
                        <div className="row">
                            {/* <div className="col-lg-12 col-md-12">
                                <div className="services-details-image">
                                    <img src="/images/seo.png" alt="image" />

                                </div>
                            </div> */}

                            <div className="col-lg-12 col-md-12">
                                <div className="services-details-desc">
                                    <h3>Protect against the risk of data loss during your system migration. </h3>
                                    <p>Moving to a new platform requires a thorough approach and a knowledge of your current and new platform components, including data models, restrictions and conversion formats. Our extensive HR systems migration experience can be handy when you migrate from your older provider to a new one. 
                                    </p>
                                    <h3>When your current solution doesn't meet your business objectives, it's time to migrate.</h3>
                                    <p>If your organisation is ready migrate to a new cloud platform, you must be prepared with a strategy to minimise the risk and protect your data. Whether it's due to a breakdown in the relationship with your vendor, or the complete failure of your cloud provider, you should be asking these three key questions: 
                                    </p>
                                    <ul>
                                        <li><em>Is the data stuck in a proprietary format, preventing me from using it outside of my current provider's cloud?</em></li>
                                        <li><em>What are the formats and methods available for moving data out of the current provider? </em></li>
                                        <li><em>How can we be sure that all of our data has been permanently deleted to protect our data privacy and security requirements? </em></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="services-details-info">
                                    <h3>How it works: </h3>
                                    <p>There may be differences in the implementation approaches, but with the right data strategy we can make sure the old data aligns with the schema of your new cloud platform by:</p>
                                    <ul>
                                        <li>Identifying the source platform application and target application
                                        </li>
                                        <li>Gathering and identifying both data schemas for the systems integration</li>
                                        <li>Conducting a conversion test with a sample data extraction </li>
                                        <li>Presenting a platform migration risk report</li>
                                        <li>Recommending a client for data archiving from the old platform </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default MigrationDetailsContent;