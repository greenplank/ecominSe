import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

class FaqContent extends Component {
    render() {
        return (
            <>
                <section className="faq-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            {/* <div className="col-lg-6">
                                <div className="faq-img">
                                    <img src="/images/faq-img.jpg" alt="Image" />
                                </div>
                            </div> */}

                            <div className="col-lg-12">
                                <div className="faq-accordion">
                                    <Accordion allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How many team members will you assign to my website project ?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    Please define the roles.
                                                </p>
                                                <p>Please define the roles.
                                                    We follow an agile methodology while assigning a team of highly skilled professionals to your website project. Depending on the nature of your website project, there may be up to 5 team members that are initially assigned to your website project.
                                                </p>
                                                <p>This includes:</p>
                                                <ul>
                                                    <li>A business analyst that looks after the onboarding process by conducting the feasibility study of your requirements. After this, he/she provides an initial consultation wherein he/she discusses requirement breakdown, the total budget for the project, and submission of the project proposal. </li>
                                                    <li>After successful completion of this stage, you will be introduced to a Project delivery manager and the dedicated developer who will be working on your project. </li>
                                                    <li>There will also be a Quality Analyst who will be testing your website and ensuring that your deliverables are met as promised. </li>
                                                    <li>The last person will be a Server Administrator who will set up your server and deploy your website in such a way that it gets ready to go live. </li>
                                                </ul>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Who will be Point of Contact in case I order my website project to EComIN ?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    You can stay in contact with either of the assigned team members during any given point of time of project execution. However, to make things simple, we recommend you to have a single point of contact to ensure that there is no scope of miscommunication. Here, we recommend you to stay in direct touch with the Project delivery manager who is the right person to provide you with the regular progress of the project. You can take feedback on the project progress from him/her. This way, it will become easier for you to receive the utmost transparency from our end during the project duration.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Does eComIN has the understanding of handling all types of CMS/e-commerce project development tasks in-house ? What is the overall work experience of eComIN skilled professionals ?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    At EComIN we have a dedicated team of more than 30 in-house developers, UI/UX designers, analysts, managers and an overall strength of more than 150 employees
                                                    working in unison. We do not outsource any work as our in-house team has the experience and acumen of delivering highly creative web development solutions for our esteemed clients.

                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="d">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Is there a specific pricing model EComIN follows ? What steps eComIN takes if the project go over budget ?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    We follow both fixed price and hourly rate model. However, usually, the pricing depends totally on the individual requirements of the projects and clarity in terms of execution strategy and requirements. It is essential to have a comprehensive requirements analysis to ensure that there is no ambiguity in terms of the scope of website development requirements. We adopt this strategy to come up with an accurate quotation for the project. On top of that, we even keep track of any change requests throughout the development cycle so that there is no unexpected increase in the budget.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="e">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Will we get the sole ownership of the source files once the project is finished ?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    Yes, we will send across the source files to you. Rest assured, we do not keep the source code to ourselves.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="f">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What is the support period provided by EComIN ?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    To ensure consistent performance, we provide a 90-days support period to all our clients which starts when your last milestone is accomplished and delivered. It is even possible for you to extend the support by paying an incremental amount.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default FaqContent;