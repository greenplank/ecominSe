import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';

class NavbarTwo extends Component {
    // Navbar 
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <>
                <div id="navbar" className="navbar-area navbar-style-2">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <div className="container-fluid">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src="/images/EComnIN-logo.png" className="black-logo" alt="logo" />
                                    <img src="/images/EComIN-white.png" className="white-logo" alt="logo" />
                                </a>
                            </Link>

                            {/* Toggle navigation */}
                            <button
                                onClick={this.toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="/">
                                            <a className="nav-link" activeClassName="active">
                                                Hem
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#">
                                            <a className="nav-link" onClick={e => e.preventDefault()}>
                                                Tjänster <i className="icofont-thin-down"></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/magento-developer" activeClassName="active">
                                                    <a className="nav-link">Magento Development</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/react-developer" activeClassName="active">
                                                    <a className="nav-link">ReactJs Development</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/service-details" activeClassName="active">
                                                    <a className="nav-link">Mobile App Development</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="#" activeClassName="active">
                                                    <a className="nav-link">Wordpress Development</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/ux-ui-design" activeClassName="active">
                                                    <a className="nav-link">UX/UI Designing</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="#" onClick={e => e.preventDefault()}>
                                            <a className="nav-link">
                                                Digital Marketing<i className="icofont-thin-down"></i>
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="#" activeClassName="active">
                                                    <a className="nav-link">Social Media Marketing</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="#" activeClassName="active">
                                                    <a className="nav-link">Search Engine Optimization(SEO)</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="#" activeClassName="active">
                                                    <a className="nav-link">Video Produktion</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/portfolio">
                                            <a className="nav-link">
                                                Portfölj
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/about">
                                            <a className="nav-link">Om oss</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/contact">
                                            <a className="nav-link">Kontakta oss</a>
                                        </Link>
                                    </li>
                                </ul>

                                <div className="others-options">
                                    <Link href="/contact">
                                        <a className="btn btn-primary">
                                            Få ett citat
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </>
        );
    }
}

export default NavbarTwo;