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
    responsive:{
        0: {
            items:1,
        },
        576: {
            items:2,
        },
        768: {
            items:2,
        },
        1200: {
            items:2,
        },
        1400: {
            items:3,
        }
    }
}


class BestServices extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){ 
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
                                        <h2>Expertis och färdigheter</h2>
                                        <div className="bar"></div>
                                        <p>Ecomin skapar konverteringsoptimerade användargränssnitt och användarupplevelser. Våra produktdesigner är alltid inriktade på människocentrerat designtänkande, liksom kreativa, unika och anpassade. Vi är säkra på att vi kan skapa en produkt för dig som kommer att resultera i höga konverteringar och en minnesvärd användarupplevelse.</p>

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
                                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

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
                                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                                
                                                {/* <Link href="/service-details">
                                                    <a className="read-more-btn">Read More</a>
                                                </Link> */}
                                            </div>
                                        </div>

                                        <div className="single-services">
                                            <img src="/images/services/service3.jpg" alt="image" />

                                            <div className="content">
                                                <div className="icon">
                                                    <i className="pe-7s-scissors"></i>
                                                </div>

                                                <h3>Webbdesign</h3>
                                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                                
                                                {/* <Link href="/service-details">
                                                    <a className="read-more-btn">Read More</a>
                                                </Link> */}
                                            </div>
                                        </div>
                                        <div className="single-services">
                                            <img src="/images/services/service3.jpg" alt="image" />

                                            <div className="content">
                                                <div className="icon">
                                                    <i className="pe-7s-scissors"></i>
                                                </div>

                                                <h3>Mobil applikationsdesign</h3>
                                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                                
                                                {/* <Link href="/service-details">
                                                    <a className="read-more-btn">Read More</a>
                                                </Link> */}
                                            </div>
                                        </div>
                                        <div className="single-services">
                                            <img src="/images/services/service3.jpg" alt="image" />
                                            <div className="content">
                                                <div className="icon">
                                                    <i className="pe-7s-scissors"></i>
                                                </div>

                                                <h3>Visuell kommunikation</h3>
                                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                                
                                                {/* <Link href="/service-details">
                                                    <a className="read-more-btn">Read More</a>
                                                </Link> */}
                                            </div>
                                        </div>
                                        <div className="single-services">
                                            <img src="/images/services/service3.jpg" alt="image" />

                                            <div className="content">
                                                <div className="icon">
                                                    <i className="pe-7s-scissors"></i>
                                                </div>

                                                <h3>Trådramar</h3>
                                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                                
                                                {/* <Link href="/service-details">
                                                    <a className="read-more-btn">Read More</a>
                                                </Link> */}
                                            </div>
                                        </div>
                                        <div className="single-services">
                                            <img src="/images/services/service3.jpg" alt="image" />

                                            <div className="content">
                                                <div className="icon">
                                                    <i className="pe-7s-scissors"></i>
                                                </div>

                                                <h3>Prototyper</h3>
                                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                                
                                                {/* <Link href="/service-details">
                                                    <a className="read-more-btn">Read More</a>
                                                </Link> */}
                                            </div>
                                        </div>

                                        <div className="single-services">
                                            <img src="/images/services/service1.jpg" alt="image" />
                                            <div className="content">
                                                <div className="icon">
                                                    <i className="pe-7s-scissors"></i>
                                                </div>

                                                <h3>Interaktionsdesign</h3>
                                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                                
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