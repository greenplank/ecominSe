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
                                <h2>Vanliga frågor om PPC-hanteringstjänster
</h2>
                                <p>Har du ytterligare frågor om PPC-hanteringstjänster? Bläddra bland våra
</p>

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
                                                Vad är PPC?

                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                PPC, även känd som betala-per-klick, beskriver en onlineannonseringsstrategi där annonsörer bara betalar när någon klickar på en annons. PPC-annonser kan visas på webbplatser, sökmotorer och sociala medier.

                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                Vad är PPC-hanteringstjänster?

                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Med PPC-hanteringstjänster får du professionell hantering av din PPC-strategi och kampanjer mot en bestämd avgift. Denna hantering kan inkludera strategiutveckling, budhantering, annonstext och mer.

                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                Vad inkluderar PPC-tjänster?

                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Leveranser för PPC-tjänster beror på tjänsteleverantören, såväl som den valda planen. I de flesta fall inkluderar PPC-tjänster annonsering på Google och Bing, såväl som sökordsinriktning, budhantering och rutinrapportering.

                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="d">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                Hur mycket kostar PPC-hanteringstjänster?

                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                I genomsnitt kommer små till medelstora företag att spendera $5000 till $10.000 per månad på PPC. Kostnaderna inkluderar annonsutgifter och kostnaden för förvaltningstjänster. Byråer tar ofta betalt för PPC-kampanjhanteringstjänster som en procentandel av annonsutgifterna men kan också ta ut en fast avgift. 
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