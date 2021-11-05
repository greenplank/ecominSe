import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';

class NavbarOne extends Component {
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
                                    <img src="/images/ECommerceIN copy-01.png" className="black-logo" alt="logo" />
                                    <img src="/images/ECommerceIN copy-02.png" className="white-logo" alt="logo" />
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
                                    {/* <li className="nav-item">
                                        <Link href="/">
                                            <a className="nav-link" activeClassName="active">
                                                Home
                                            </a>
                                        </Link>
                                    </li> */}
                                    <li className="nav-item">
                                        <Link href="#">
                                            <a className="nav-link" onClick={e => e.preventDefault()}>
                                                Solutions
                                                <i className="icofont-thin-down"></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/WordpressAllinOne" activeClassName="active">
                                                    <a className="nav-link">Wordpress-All-in-One</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/CustomContentAllinOne" activeClassName="active">
                                                    <a className="nav-link">Custom+Content Boost All-in-One</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/PlatformMigration" activeClassName="active">
                                                    <a className="nav-link">Platform Migration</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/CloudHosting" activeClassName="active">
                                                    <a className="nav-link">Cloud Hosting</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/CyberSecurity" activeClassName="active">
                                                    <a className="nav-link">Cyber Security</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/SoftwareQATesting" activeClassName="active">
                                                    <a className="nav-link">Software QA Testing</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="#">
                                            <a className="nav-link" onClick={e => e.preventDefault()}>
                                                Website Development
                                                <i className="icofont-thin-down"></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/web-development" activeClassName="active">
                                                    <a className="nav-link">Web Development</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/React-Next-Development" activeClassName="active">
                                                    <a className="nav-link">React&NextJs Development</a>
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
                                        <Link href="#">
                                            <a className="nav-link" onClick={e => e.preventDefault()}>
                                                E-Commerce
                                                <i className="icofont-thin-down"></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/Magento-Development" activeClassName="active">
                                                    <a className="nav-link">Magento Development</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/WooCommerce" activeClassName="active">
                                                    <a className="nav-link">WooCommerce</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/Shopify" activeClassName="active">
                                                    <a className="nav-link">Shopify</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/BigCommerce" activeClassName="active">
                                                    <a className="nav-link">BigCommerce</a>
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
                                                <Link href="/Search-Engine-Optimization" activeClassName="active">
                                                    <a className="nav-link">SEO Services</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/Social-Media-Marketing" activeClassName="active">
                                                    <a className="nav-link">Social Media Marketing</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/Site-Audit-Report" activeClassName="active">
                                                    <a className="nav-link">Site Audit Reporting</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/PaidMarketing" activeClassName="active">
                                                    <a className="nav-link">Paid Marketing-PPC</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/ContentStrategy" activeClassName="active">
                                                    <a className="nav-link">Content Strategy & Writing</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/App-Development">
                                            <a className="nav-link">
                                                App Development
                                            </a>
                                        </Link>
                                    </li>
                                    {/* <li className="nav-item">
                                        <Link href="/portfolio">
                                            <a className="nav-link">
                                                Portfolio
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/about">
                                            <a className="nav-link">About us
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/contact">
                                            <a className="nav-link">Contact Us
                                            </a>
                                        </Link>
                                    </li> */}
                                </ul>

                                <div className="others-options">
                                    <Link href="/contact">
                                        <a className="btn btn-primary">
                                            Get a quote
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

export default NavbarOne;