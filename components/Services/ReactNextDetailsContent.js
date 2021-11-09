import React, { Component } from 'react';
import Link from 'next/link';


class SEODetailsContent extends Component {


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

                            <div className="col-lg-8 col-md-12">
                                <div className="services-details-desc">
                                    <h2>React/Next JS Development </h2>
                                    <p>GET, SET, REACT!” — this is the mantra we breathe and live by at EcomIN AB.
                                    </p>
                                    <p>React/Next JS are the primary front-end JavaScript libraries on which we build user interfaces and UI components. All our teams have extensive knowledge and experience with React/Next JS development and have worked on dozens of projects. </p>
                                    <p>Reasons to Work With EcomIN AB
                                        Hire Coordinated Managed Teams
                                        Our React/Next JS teams were a part of many challenging projects. Hire managed team including a team leader and leverage their coordinated skills.
                                    </p>
                                    <p>Experience Across Different Fields
                                        EcomIN AB cooperated with many industries. Every industry has its specific features. Having the experience, our teams are able to speak your language.
                                    </p>
                                    <p>Start Tomorrow
                                        You don't need to build your internal organisation. Hire our team of developers for the project and replace us with internal staff later.
                                    </p>
                                    <p>Design -- Develop -- Test -- Deliver -- Support
                                        You don't need to have technical knowledge to work with us. We have product managers and designer, who will help you to prepare backlog for our developers.
                                    </p>
                                    <p>Expand Your Developer Capacities
                                        Do you have technical staff already? Great! Cooperate with us in co-development model and hire another team to scale fast.
                                    </p>
                                    <div className="about-image">
                                        <img src="/images/React-js.png" alt="image" width="300px" className="rounded-10" />
                                    </div>
                                    <h2>What is React? </h2>
                                    <p>React JS is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. </p>
                                    <p>Our team is more than just experienced WooCommerce developers. We also employ a number of other eCommerce experts who know how to give your WooCommerce site every feature necessary for generating regular profits. </p>

                                    <h3>Front-end in React JS</h3>
                                    <p>We use Java Script framework React for the front-end of more complicated information systems, websites and web applications.
                                    </p>

                                    <h3>Where do we use React JS </h3>
                                    <p>React JS processes graphs efficiently, provides fast user interface responses, simplifies workflow with intuitive solutions (such as drag & drop etc.).
                                    </p>
                                    <p>We can also help with the back-end
                                        We are not dealing with front-end only, we are just as strong in the back-end - we will help you develop an API interface to connect your back-end to the front-end in React.
                                    </p>
                                    <p>More than just React JS
                                        Along with React JS, we use a lot of related technologies like Docker, Kubernetes, Google Cloud, Amazon AWS and more.
                                    </p>

                                </div>
                                <div className="services-details-info">
                                    <h3>Key Features of React JS Development</h3>
                                    <ul>
                                        <li><b>Virtual DOM: </b>The so-called Document Object Model (DOM) is one of the most important things about a website. Updating a common DOM is very slow, so React uses a virtual DOM in which it makes all the changes and only promotes final differences to the common DOM. </li>
                                        <li><b>One Way Data Binding: </b>React JS is designed to use only a one-way data binding, giving developers more control and visibility over the entire application and the movement of data within it. </li>
                                        <li><b>React JS Components: </b>React JS is basically made up of various components. Each component has its own logic. Each component can be reused in different places, which helps keep the application code clean.</li>
                                        <li><b>JSX: </b>It is an extension of JavaScript syntax, specifically the XML structure, which is used by React JS components. Thanks to this, all components can be written very easily. </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">

                                <div className="services-details-info">
                                    <h3>Related Technologies</h3>
                                    <ul>
                                        <li><b>Node.js Development: </b>Node.js is the primary platform on which we build projects. Node.js is suitable not only for small but also for huge projects thanks to its high scalability. All our teams have extensive knowledge and experience with Node.js development and have worked on dozens of projects. </li>
                                        <li><b>Vue.js Development: </b>React JS is designed to use only a one-way data binding, giving developers more control and visibility over the entire application and the movement of data within it. Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You. </li>
                                        <li><b>AngularJS Development: </b>Angular.js is a javascript framework that was created in Google in 2010.
                                            We have used this framework as a suitable tool on several projects. One of the projects was to create a mobile application.
                                        </li>
                                        <li><b>React Native Development: </b>React Native is best-in-class JavaScript library for building user interfaces for Android and iOS. It's open-source and created by Facebook, Inc. </li>
                                        <li><b>Kubernetes: </b>Kubernetes is an extensible open-source platform for managing containerised environments and services or applications. </li>
                                        <li><b>Docker: </b>Docker is a technology that enables the containerisation of applications. Nowadays we use it in every project we build. </li>
                                        <li><b>TypeScript Development: </b>TypeScript/Node.js is the primary platform on which we build projects. TypeScript is suitable not only for small but also for huge projects thanks to its high scalability. All our teams have extensive knowledge and experience with TypeScript development and have worked on dozens of projects. </li>
                                        <li><b>JavaScript Development: </b>JavaScript is the primary platform on which we build projects. JavaScript is suitable not only for small but also for huge projects thanks to its high scalability. All our teams have extensive knowledge and experience in JavaScript and have worked on dozens of projects. </li>

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

export default SEODetailsContent;