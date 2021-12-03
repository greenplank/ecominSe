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
                                                Hur många teammedlemmar kommer du att tilldela mitt webbplatsprojekt?

                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Vänligen definiera rollerna.

                                                </p>
                                                <p>Vänligen definiera rollerna.
                                                    Vi följer en agil metodik samtidigt som vi tilldelar ett team av mycket skickliga yrkesmän till ditt webbplatsprojekt. Beroende på typen av ditt webbplatsprojekt kan det finnas upp till 5 teammedlemmar som initialt tilldelas ditt webbplatsprojekt.
                                                </p>
                                                <p>Detta inkluderar
:</p>
                                                <ul>
                                                    <li>En affärsanalytiker som tar hand om introduktionsprocessen genom att genomföra förstudien av dina krav. Efter detta ger han/hon en första konsultation där han/hon diskuterar kravfördelning, den totala budgeten för projektet och inlämnande av projektförslaget.
</li>
                                                    <li>Efter framgångsrikt slutförande av detta steg kommer du att introduceras för en projektleveransansvarig och den dedikerade utvecklaren som kommer att arbeta med ditt projekt.
</li>
                                                    <li>Det kommer också att finnas en kvalitetsanalytiker som kommer att testa din webbplats och se till att dina leveranser uppfylls som utlovat.
</li>
                                                    <li>Den sista personen kommer att vara en serveradministratör som kommer att konfigurera din server och distribuera din webbplats på ett sådant sätt att den blir redo att gå live.
 </li>
                                                </ul>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                Vem kommer att vara kontaktperson om jag beställer mitt webbplatsprojekt till EComIN?

                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Du kan hålla kontakten med någon av de tilldelade teammedlemmarna under en given tidpunkt för projektgenomförande. Men för att göra det enkelt rekommenderar vi att du har en enda kontaktpunkt för att säkerställa att det inte finns någon omfattning av felkommunikation. Här rekommenderar vi dig att hålla direktkontakt med projektleveranschefen som är rätt person för att ge dig den regelbundna utvecklingen av projektet. Du kan ta feedback om projektets framsteg från honom/henne. På så sätt blir det lättare för dig att få största möjliga insyn från vår sida under projektets varaktighet.

                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                Har eComIN förståelse för att hantera alla typer av CMS/e-handelsprojektutvecklingsuppgifter internt? Vad är den övergripande arbetserfarenheten för eComIN-utbildade yrkesmän?

                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                På EComIN har vi ett dedikerat team med mer än 30 interna utvecklare, UI/UX-designers, analytiker, chefer och en övergripande styrka på mer än 150 anställda
                                                    arbeta unisont. Vi lägger inte ut något arbete eftersom vårt interna team har erfarenheten och förmågan att leverera kreativa webbutvecklingslösningar för våra uppskattade kunder.

                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="d">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                Finns det någon specifik prismodell som EComIN följer? Vilka åtgärder vidtar eComIN om projektet går över budget?

                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Vi följer både fastpris- och timprismodell. Men vanligtvis beror prissättningen helt på projektens individuella krav och tydlighet vad gäller genomförandestrategi och krav. Det är viktigt att ha en omfattande kravanalys för att säkerställa att det inte finns några oklarheter när det gäller omfattningen av kraven på webbplatsutveckling. Vi använder denna strategi för att komma med en korrekt offert för projektet. Utöver det håller vi även koll på eventuella förändringsförfrågningar under hela utvecklingscykeln så att det inte blir någon oväntad ökning av budgeten.

                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="e">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                Kommer vi att få ensam äganderätt till källfilerna när projektet är klart?

                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Ja, vi skickar källfilerna till dig. Var säker, vi håller inte källkoden för oss själva.

                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="f">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                Vilken är supportperioden som tillhandahålls av EComIN?

                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                För att säkerställa konsekvent prestanda tillhandahåller vi en 90-dagars supportperiod till alla våra kunder som börjar när din sista milstolpe är uppnådd och levererad. Det är till och med möjligt för dig att förlänga stödet genom att betala ett inkrementellt belopp.

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