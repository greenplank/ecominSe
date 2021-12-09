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
                                        <h2>Expertis och färdigheter

                                        </h2>
                                        <div className="bar"></div>
                                        <p>EcomIN AB skapar konverteringsoptimerade användargränssnitt och användarupplevelser. Våra produktdesigners är alltid fokuserade på människocentrerat designtänkande, såväl som kreativa, unika och skräddarsydda. Vi är övertygade om att vi kan skapa en produkt åt dig som kommer att resultera i höga konverteringar och en minnesvärd användarupplevelse.

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

                                                <h3>UX-design
</h3>
                                                <p>Kundfokuserad, skapar användar- och kundupplevelser utformade för att ha engagerande användargränssnitt (UI) och leverera påtagliga affärsresultat, Ecomin hjälper varumärken att navigera i alla aspekter av det digitala landskapet.
</p>

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

                                                <h3>UI design
</h3>
                                                <p>User experience design handlar om att forma upplevelsen av att använda en produkt, interaktionsdesign formar upplevelsen mellan användaren och produkten.
</p>

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

                                                <h3>webbdesign
                                                </h3>
                                                <p>Ecomin är den bästa källan till responsiv webbdesign, vilket innebär att vår design svarar bra på stationära, mobila och surfplattor. Vi har ett brett utbud av design som stöder perfekt flera skärmar.
 </p>

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

                                                <h3>Mobilapplikationsdesign
                                                </h3>
                                                <p>Vi är specialiserade på att utveckla högkvalitativa, engagerande mobilapplikationer för både Android- och iOS-plattformar. Logotypikoner, teman och bakgrunder, widgetdesigner, skärmövergångar, animationer och applikationens övergripande utseende
</p>

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

                                                <h3>Visuell kommunikation

                                                </h3>
                                                <p>Vi föreställer oss en sammanhållen gemenskap där individer som är döva, hörande och de med hörselnedsättning delar lika tillgång till information och kommunikation.
</p>

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

                                                <h3>Trådramar

                                                </h3>
                                                <p>Ecomin hjälper företag att navigera i alla aspekter av det digitala landskapet, hjälpa till med wireframing och interaktiva prototyper, skapa upplevelser som ger påtagliga affärsresultat.
</p>

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

                                                <h3>Prototyper
</h3>
                                                <p>Tjänsteprototypen har som mål att replikera, så mycket som möjligt, den slutliga upplevelsen av att interagera med tjänsten, för att testa och validera alla designval.
</p>

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
                                                Interaktionsdesign
</h3>
                                                <p>På Ecomin tillämpar vi ett komplett utbud av UI/UX-tjänster för att bygga effektiva strategier för kundretention och hjälpa varumärken att skapa äkta, människocentrerade identiteter som engagerar, upphetsar och bygger förtroende.
</p>

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