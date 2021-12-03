import React, { Component } from 'react';
import Link from 'next/link';


class SEODetailsContent extends Component {


    render() {
        return (
            <>
                <section className="services-details-area ptb-100">

                    <div className="container">
                        <div className="row">

                            <div className="col-lg-8 col-md-12">
                                <div className="services-details-desc">
                                    <h2>UTVECKLINGSTJÄNSTER FÖR MOBILAPP
                                    </h2>
                                    <p>Vi erbjuder en komplett cykel av applikationsdesign, integration och administrationstjänster. Oavsett om det är en konsumentorienterad app eller en transformativ lösning i företagsklass, leder företaget hela utvecklingsprocessen för mobilappar från idé och koncept till leverans och till löpande support.

                                    </p>
                                </div>
                                <div className="about-image pb-100">
                                    <img src="/images/App-Development_result.webp" alt="image" width="300px" className="rounded-10" />
                                </div>
                                <div className="services-details-desc">
                                    <h3>Utveckla banbrytande Mobile First-appar
                                    </h3>
                                    <p>Moderna mobilappar trivs på anpassningsbara plattformar. eComIN använder helt automatiserade processer för att dra nytta av varje apps livscykel från design till eventuell implementering. Samtidigt förlitar den sig på handgjorda designs för att säkerställa att alla mobilappar har den senaste tekniken samtidigt som de är personliga.
                                    </p>
                                    <p>Mer än någonsin är säkerhet och genomförbarhet avgörande. Många användare kräver en hög grad av digitalt skydd när deras appar används. eComIN har utökat användningen av varje användares privata data – konstruerar långvariga design samtidigt som användarens skydd gynnas via den moderna mobila enhetens bästa funktioner. SMS-koder, röstigenkänning, kameror, telefonsamtalsverifiering och intern säkerhetsarkitektur är alla noterade, och alla är implementerade i en mobilapps design.
                                    </p>
                                </div>

                                <div className="services-details-info">
                                    <h3>Ring oss idag
                                    </h3>
                                    <p>Om du behöver appdesign och/eller utvecklingstjänster, kontakta oss idag!
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div className="services-details-info">
                                    <h3>Android utveckling
                                    </h3>
                                    <p>Android har nyligen blivit en prioriterad plattform för många leverantörer. Google Play är för närvarande en viktig appåtkomstpunkt. Android-ekosystemet frodas tack vare sin otroliga flexibilitet inom ramverk för affärsobjekt. Användbar som en del av större projekt, bidrar till unik appanvändning och en mycket lönsam underhållningsplattform, Android är en fantastisk väg för alla apputvecklare. eComIN behåller ett hårt grepp om den snabbt växande Android-utvecklingsvärlden. Av denna anledning närmar all utveckling av Android-appar flexibilitet som en viktig resurs.
                                    </p>
                                </div>
                                <div className="services-details-info">
                                    <h3>iOS iPhone utveckling
                                    </h3>
                                    <p>Många iOS-apputvecklingslösningar undviker användningen av Objective-C, Java eller Swift. eComIN använder också .NET och liknande resurser för att säkerställa effektiva, mångfacetterade iOS-telefonappar. Alla utvecklingsprojekt för iOS-telefonappar sätter användarens tillgänglighet först. iPhone drar nytta av en mängd olika plattformsoberoende designalternativ, vilket gör den till en utmärkt basplattform för lansering av en mobilapp. Genom att använda push-meddelanden, funktioner för virtuell verklighet och utrymmesbesparande funktioner garanterar eComIN-byrån en välorganiserad, men flexibel, åtkomstpunkt för både användare och operatörer.
                                    </p>
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