import React, { Component } from 'react';
import Link from 'next/link';


class CloudHostingDetailsContent extends Component {


    render() {
        return (
            <>
                <section className="services-details-area ptb-100">

                    <div className="container">
                        <div className="row">

                            <div className="col-lg-12 col-md-12">
                                <div className="services-details-desc">
                                    <h2>Cyber Security Solutions </h2>
                                    <p>Protect your environment against cyber attacks.
                                    </p>
                                    <p>The cyber threat landscape is constantly evolving and increasingly complex, and most companies don’t have the cyber security tools and capacity in-house to keep security measures up-to-date. Because it’s easier than ever for hackers to initiate an attack, organizations now experience increased risk and higher levels of uncertainty. Subsequently, breaches and successful attacks can cost companies millions — not to mention the harm to your brand’s reputation. </p>
                                </div>
                                <div className="about-image">
                                        <img src="/images/cyber_Security.webp" alt="image" className="rounded-10" />
                                </div>
                                <div className="services-details-desc">
                                    <h3>The right services for your security needs </h3>
                                    <p>Our portfolio of cyber security solutions consists of a variety of services designed to meet all of your company’s needs. They’re also customizable to your specific requirements and provide detailed notifications, reporting, and dashboards. We help you choose the best solution, tailored specifically for the cyber security threats your organization faces.
                                    </p>
                                </div>
                                <div className="services-details-desc">
                                    <h3>Penetration Testing</h3>
                                    <p>We take extra measures to ensure our customers are safe from cyber threats. We work with Northwave, who are team of security experts and Offensive Security Certified Professionals (OSCP), to provide insight in vulnerabilities in your IT environment or web application. We can perform the NW Penetration Test once or periodically to ensure your defence is secure.
                                    </p>
                                </div>
                                <div className="services-details-desc">
                                    <h3>DoS IP Protection  </h3>
                                    <p>This hardware-based service uses scrubbing centers worldwide to recognize incoming DDoS attacks and re-route this malicious traffic before it reaches your IP address, stopping threats in their tracks.
                                    </p>
                                </div>
                                <div className="services-details-desc">
                                    <h3>Managed Cyber Security </h3>
                                    <p>We offer a fully integrated SIEM SOC service that combines the best of Security Information & Event Monitoring (SIEM), correlation engines, and a team of cyber security experts. The Security Operations Center (SOC) team monitors your environments 24/7 and responds to threats proactively to mitigate any attack that might occur.
                                    </p>
                                </div>
                                <div className="services-details-desc">
                                    <h3>Benefits of our eComIN Cyber Security Services</h3>
                                    <p>Enjoy peace of mind with 24/7 proactive protection
                                        Our services constantly monitor your systems and proactively respond to any threat or attack. You will have the peace of mind to focus on your business, knowing that you
                                        can leave your IT security to us.
                                    </p>
                                </div>
                                <div className="services-details-desc">
                                    <h3>Find the right solution for your threat profile </h3>
                                    <p>Our portfolio consists of different types of services to fit each of your specific security needs. We will personally help you choose the right solution from the breadth of our product offering, so you can rest assured knowing your business is protected.
                                    </p>
                                </div>
                                <div className="services-details-desc">
                                    <h3>Customize your cyber protection </h3>
                                    <p>All of our services are customizable to combat specific cyber security threats and protect your systems. Set up specific profiles and rules to efficiently mitigate threats, and integrate different information and metrics in our dashboards to have a complete overview at all times.
                                    </p>
                                </div>
                                <div className="services-details-desc">
                                    <h3>Save money </h3>
                                    <p>Our cyber security services protect you from breaches and attacks on your systems that may ordinarily go unnoticed. Because malicious traffic is mitigated and threats are proactively responded to, you will save the substantial costs of a disrupted business and other damages.
                                    </p>
                                    <b>Get started today! </b>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default CloudHostingDetailsContent;