import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

class PPCFaqContent extends Component {
    render() {
        return (
            <>
                <section className="faq-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">

                            <div className="services-details-info" style={{textAlign:"center",marginBottom:"4em"}}>
                                <h2>FAQs about PPC management services</h2>
                                <p>Do you have additional questions about PPC management services? Browse our</p>

                            </div>
                            <div className="col-lg-6">
                                <div className="faq-img">
                                    <img src="/images/faq-img.jpg" alt="Image" />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="faq-accordion">
                                    <Accordion allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                What is PPC?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                PPC, also known as pay-per-click, describes an online advertising strategy where advertisers only pay when someone clicks on an ad. PPC ads can display on websites, search engines, and social media networks. 
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                What are PPC management services?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                With PPC management services, you receive professional management of your PPC strategy and campaigns for a designated fee. This management can include strategy development, bid management, ad copy, and more. 
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                What do PPC services include?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Deliverables for PPC services depend on the service provider, as well as the plan selected. In most cases, PPC services will include advertising on Google and Bing, as well as keyword targeting, bid management, and routine reporting.  
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="d">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                How much do PPC management services cost?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                On average, small-to-midsized businesses will spend $5000 to $10,000 per month on PPC. Costs include ad spend and the cost of management services. Agencies often charge for PPC campaign management services as a percentage of ad spend but may also charge a flat fee. 
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        {/* <AccordionItem uuid="e">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Can I pay via an invoice?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem> */}
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

export default PPCFaqContent;