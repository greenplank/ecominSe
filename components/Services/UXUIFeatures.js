import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='pe-7s-angle-left'></i>",
        "<i class='pe-7s-angle-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        1200: {
            items: 2,
        },
        1400: {
            items: 3,
        }
    }
}


class BestServices extends Component {

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
            <>
                <section className="services-area">
                    <div className="container-fluid">
                        <div className="row m-0">
                            <div className="col-lg-5 p-0">
                                <div className="services-inner">
                                    <div className="services-section-title">
                                        <h2>Expertise and skills
                                        </h2>
                                        <div className="bar"></div>
                                        <p>EcomIN AB creates conversion-optimized user interfaces and user experiences. Our product designers are always focused on people-centered design thinking, as well as creative, unique and customized. We are confident that we can create a product for you that will result in high conversions and a memorable user experience.
                                        </p>

                                        <img src="/images/women-with-table.png" alt="Women" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-7 p-0">
                                <div className="services-list">
                                    {this.state.display ? <OwlCarousel
                                        className="services-slides owl-carousel owl-theme"
                                        {...options}
                                    >
                                        <div className="single-services">
                                            <img src="/images/services/service1.jpg" alt="image" />

                                            <div className="content">
                                                <div className="icon">
                                                    <i className="pe-7s-magnet"></i>
                                                </div>

                                                <h3>UX Design</h3>
                                                <p>Client-focused, creating user and customer experiences designed to have engaging user interfaces (UI) and deliver tangible business results, Ecomin helps brands navigate any and all facets of the digital landscape.</p>

                                                {/* <Link href="/service-details">
                                                    <a className="read-more-btn">Read More</a>
                                                </Link> */}
                                            </div>
                                        </div>

                                        <div className="single-services">
                                            <img src="/images/services/service2.jpg" alt="image" />

                                            <div className="content">
                                                <div className="icon">
                                                    <i className="pe-7s-vector"></i>
                                                </div>

                                                <h3>UI Design</h3>
                                                <p>User experience design is about shaping the experience of using a product, interaction design shapes the experience between the user and the product. </p>

                                                {/* <Link href="/service-details">
                                                    <a className="read-more-btn">Read More</a>
                                                </Link> */}
                                            </div>
                                        </div>

                                        <div className="single-services">
                                            <img src="/images/services/service3.jpg" alt="image" />

                                            <div className="content">
                                                <div className="icon">
                                                    <i className="pe-7s-display1"></i>
                                                </div>

                                                <h3>Web design
                                                </h3>
                                                <p>Ecomin is the best source of responsive website designing which means our designs respond well to Desktop, Mobile and Tablet devices.We have an wide range of designs that support perfectly multiple screens. </p>

                                                {/* <Link href="/service-details">
                                                    <a className="read-more-btn">Read More</a>
                                                </Link> */}
                                            </div>
                                        </div>
                                        <div className="single-services">
                                            <img src="/images/services/service3.jpg" alt="image" />

                                            <div className="content">
                                                <div className="icon">
                                                    <i className="pe-7s-phone"></i>
                                                </div>

                                                <h3>Mobile application design
                                                </h3>
                                                <p>We specialize in developing high-quality, engaging mobile applications for both Android and iOS platforms. Logo icons, themes and backgrounds, widget designs, screen transitions, animations and the overall look of the application</p>

                                                {/* <Link href="/service-details">
                                                    <a className="read-more-btn">Read More</a>
                                                </Link> */}
                                            </div>
                                        </div>
                                        <div className="single-services">
                                            <img src="/images/services/service3.jpg" alt="image" />
                                            <div className="content">
                                                <div className="icon">
                                                    <i className="pe-7s-sun"></i>
                                                </div>

                                                <h3>Visual communication
                                                </h3>
                                                <p>We envision a cohesive community in which individuals who are deaf, hearing, and those with hearing loss share equal access to information and communication.</p>

                                                {/* <Link href="/service-details">
                                                    <a className="read-more-btn">Read More</a>
                                                </Link> */}
                                            </div>
                                        </div>
                                        <div className="single-services">
                                            <img src="/images/services/service3.jpg" alt="image" />

                                            <div className="content">
                                                <div className="icon">
                                                    <i className="pe-7s-menu"></i>
                                                </div>

                                                <h3>Wire frames
                                                </h3>
                                                <p>Ecomin helps enterprises navigate any and all facets of the digital landscape, assisting with wire-framing and interactive prototyping, creating experiences that deliver tangible business results.</p>

                                                {/* <Link href="/service-details">
                                                    <a className="read-more-btn">Read More</a>
                                                </Link> */}
                                            </div>
                                        </div>
                                        <div className="single-services">
                                            <img src="/images/services/service3.jpg" alt="image" />

                                            <div className="content">
                                                <div className="icon">
                                                    <i className="pe-7s-note2"></i>
                                                </div>

                                                <h3>Prototypes</h3>
                                                <p>The service prototype has the objective of replicating, as much as possible, the final experience of interacting with the service, in order to test and validate all the design choices.</p>

                                                {/* <Link href="/service-details">
                                                    <a className="read-more-btn">Read More</a>
                                                </Link> */}
                                            </div>
                                        </div>

                                        <div className="single-services">
                                            <img src="/images/services/service1.jpg" alt="image" />
                                            <div className="content">
                                                <div className="icon">
                                                    <i className="pe-7s-diamond"></i>
                                                </div>

                                                <h3>
                                                    Interaction design</h3>
                                                <p>At Ecomin, we apply a full range of UI/UX services to build efficient customer retention strategies and help brands create genuine, human-centered identities that engage, excite, and build trust.</p>

                                                {/* <Link href="/service-details">
                                                    <a className="read-more-btn">Read More</a>
                                                </Link> */}
                                            </div>

                                        </div>
                                    </OwlCarousel> : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default BestServices;