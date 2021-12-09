import React, { Component } from 'react';
import Link from 'next/link';

class CaseStudies extends Component {

    openTabSection = (evt, tabNmae) => {

        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <>
                <section className="case-studies-area pt-100 pb-70">
                    <div className="container">


                        <div className="tab">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    {/* Tab Nav */}
                                    <ul className="tabs">
                                        <li
                                            className="current"
                                            onClick={(e) => this.openTabSection(e, 'tab1')}
                                        >
                                            <span>
                                                Se allt

                                            </span>
                                        </li>

                                        <li onClick={(e) => this.openTabSection(e, 'tab2')}>
                                            <span>
                                                Företagswebbplats
                                            </span>
                                        </li>

                                        <li onClick={(e) => this.openTabSection(e, 'tab3')}>
                                            <span>
                                                E-handelswebbplats
                                            </span>
                                        </li>


                                    </ul>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="tab_content">
                                        <div id="tab1" className="tabs_item">
                                            <div className="row">
                                                <div className="col-lg-4 col-sm-6 mt-10">
                                                    <div>

                                                        <div>
                                                            <a href="https://www.greenplank.se/">
                                                                <img src="/images/Untitled-22.jpg" alt="img" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 col-sm-6 mt-10">
                                                    <div>

                                                        <div>
                                                            <a href="http://estorexl.se/">
                                                                <img src="/images/estorexl.jpg" alt="img" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 col-sm-6 mt-10">
                                                    <div>

                                                        <div>
                                                            <a href="http://ebygghandel.se/">
                                                                <img src="/images/ebygghandel.jpg" alt="img" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                

                                                <div className="col-lg-4 col-sm-6 mt-10">
                                                    <div>

                                                        <div>
                                                            <a href="http://wpcholz.de/">
                                                                <img src="/images/wpc.jpg" alt="img" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 col-sm-6 mt-10">
                                                    <div>

                                                        <div>
                                                            <a href="http://byggochfix.se/">
                                                                <img src="/images/byygochfix.jpg" alt="img" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-sm-6 mt-10">
                                                    <div>

                                                        <div>
                                                            {/* <a href="/portfolio">
                                                                <img src="/images/handsbag.jpg" alt="img" />
                                                            </a> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="tab2" className="tabs_item">
                                            <div className="row justify-content-center">
                                                <div className="col-lg-6 col-sm-6 mt-10">
                                                    <div>

                                                        <div>
                                                            <a href="https://www.greenplank.se/">
                                                                <img src="/images/Untitled-22.jpg" alt="img" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-6 mt-10">
                                                    <div>

                                                    </div>
                                                </div>



                                            </div>
                                        </div>

                                        <div id="tab3" className="tabs_item">
                                            <div className="row justify-content-center">
                                                <div className="col-lg-6 col-sm-6 mt-10">
                                                    <div>

                                                        <div>
                                                            <a href="https://estorexl.se/">
                                                                <img src="/images/estorexl.jpg" alt="img" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-sm-6 mt-10">
                                                    <div>

                                                        <div>
                                                            <a href="http://ebygghandel.se/">
                                                                <img src="/images/ebygghandel.jpg" alt="img" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                            

                                                <div className="col-lg-6 col-sm-6 mt-10">
                                                    <div>

                                                        <div>
                                                            <a href="http://wpcholz.de/">
                                                                <img src="/images/wpc.jpg" alt="img" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-sm-6 mt-10">
                                                    <div>

                                                        <div>
                                                            <a href="http://byggochfix.se/">
                                                                <img src="/images/byygochfix.jpg" alt="img" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-sm-6 mt-10">
                                                    <div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-6 mt-10">
                                                    <div>

                                                        <div>
                                                            {/* <a href="/portfolio">
                                                                <img src="/images/handsbag.jpg" alt="img" />
                                                            </a> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="tab4" className="tabs_item">
                                            <div className="row justify-content-center">
                                                <div className="col-lg-6 col-sm-6 mt-10">
                                                    <div className="single-case-studies ">

                                                        <div>
                                                            <a href="/portfolio">
                                                                <img src="/images/Untitled-22.jpg" alt="img" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-sm-6 mt-10">
                                                    <div className="single-case-studies ">

                                                        <div>
                                                            <a href="/portfolio">
                                                                <img src="/images/Untitled-22.jpg" alt="img" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-sm-6 mt-10">
                                                    <div className="single-case-studies ">

                                                        <div>
                                                            <a href="/portfolio">
                                                                <img src="/images/Untitled-22.jpg" alt="img" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-sm-6 mt-10">
                                                    <div className="single-case-studies ">

                                                        <div>
                                                            <a href="/portfolio">
                                                                <img src="/images/Untitled-22.jpg" alt="img" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-sm-6 mt-10">
                                                    <div className="single-case-studies ">

                                                        <div>
                                                            <a href="/portfolio">
                                                                <img src="/images/Untitled-22.jpg" alt="img" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-sm-6 mt-10">
                                                    <div className="single-case-studies ">

                                                        <div>
                                                            <a href="/portfolio">
                                                                <img src="/images/Untitled-22.jpg" alt="img" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div id="tab5" className="tabs_item">
                                            <div className="row justify-content-center">
                                                <div className="col-lg-4 col-sm-6 mt-40">
                                                    <div className="single-case-studies bg1">
                                                        <div className="content">
                                                            <span>
                                                                <Link href="/portfolio">
                                                                    <a>Produkt</a>
                                                                </Link>
                                                            </span>
                                                            <h3>Designa en bättre bioupplevelse
                                                            </h3>
                                                        </div>

                                                        <Link href="/portfolio-details">
                                                            <a className="btn btn-primary">
                                                                Se fallstudie

                                                            </a>
                                                        </Link>

                                                        <div className="shape">
                                                            <img src="/images/case-studies/studie-shape1.png" alt="logo" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 col-sm-6 mt-40">
                                                    <div className="single-case-studies bg2">
                                                        <div className="content">
                                                            <span>
                                                                <Link href="/portfolio">
                                                                    <a>Produkt
                                                                    </a>
                                                                </Link>
                                                            </span>
                                                            <h3>Byggdesignprocess inom team
                                                            </h3>
                                                        </div>

                                                        <Link href="/portfolio-details">
                                                            <a className="btn btn-primary">
                                                                Se fallstudie
                                                            </a>
                                                        </Link>

                                                        <div className="shape">
                                                            <img src="/images/case-studies/studie-shape2.png" alt="logo" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 col-sm-6 mt-40">
                                                    <div className="single-case-studies bg3">
                                                        <div className="content">
                                                            <span>
                                                                <Link href="/portfolio">
                                                                    <a>Produkt</a>
                                                                </Link>
                                                            </span>
                                                            <h3>Hur Intercom ger spel i deras designprocess
                                                            </h3>
                                                        </div>

                                                        <Link href="/portfolio-details">
                                                            <a className="btn btn-primary">
                                                                Se fallstudie

                                                            </a>
                                                        </Link>

                                                        <div className="shape">
                                                            <img src="/images/case-studies/studie-shape3.png" alt="logo" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 col-sm-6 mt-40">
                                                    <div className="single-case-studies bg4">
                                                        <div className="content">
                                                            <span>
                                                                <Link href="/portfolio">
                                                                    <a>Produkt</a>
                                                                </Link>
                                                            </span>
                                                            <h3>Fast med att göra-listan skapade jag en ny app för mig själv
                                                            </h3>
                                                        </div>

                                                        <Link href="/portfolio-details">
                                                            <a className="btn btn-primary">
                                                                Se fallstudie
                                                            </a>
                                                        </Link>

                                                        <div className="shape">
                                                            <img src="/images/case-studies/studie-shape4.png" alt="logo" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 col-sm-6 mt-40">
                                                    <div className="single-case-studies bg5">
                                                        <div className="content">
                                                            <span>
                                                                <Link href="/portfolio">
                                                                    <a>Produkt</a>
                                                                </Link>
                                                            </span>
                                                            <h3>Exempel på olika typer av spurter
                                                            </h3>
                                                        </div>

                                                        <Link href="/portfolio-details">
                                                            <a className="btn btn-primary">
                                                                Se fallstudie
                                                            </a>
                                                        </Link>

                                                        <div className="shape">
                                                            <img src="/images/case-studies/studie-shape5.png" alt="logo" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 col-sm-6 mt-40">
                                                    <div className="single-case-studies bg6">
                                                        <div className="content">
                                                            <span>
                                                                <Link href="/portfolio">
                                                                    <a>Produkt</a>
                                                                </Link>
                                                            </span>
                                                            <h3>Omdesign av New York Times-appen
                                                            </h3>
                                                        </div>

                                                        <Link href="/portfolio-details">
                                                            <a className="btn btn-primary">
                                                                Se fallstudie
                                                            </a>
                                                        </Link>

                                                        <div className="shape">
                                                            <img src="/images/case-studies/studie-shape6.png" alt="logo" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default CaseStudies;