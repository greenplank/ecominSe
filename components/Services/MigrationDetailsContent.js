import React, { Component } from 'react';


class MigrationDetailsContent extends Component {


    render() {
        return (
            <>
                <section className="services-details-area ptb-100">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="services-details-desc">
                                    <h3>Skydda dig mot risken för dataförlust under din systemmigrering.
                                    </h3>
                                    <p>Att flytta till en ny plattform kräver ett grundligt tillvägagångssätt och kunskap om dina nuvarande och nya plattformskomponenter, inklusive datamodeller, begränsningar och konverteringsformat. Vår omfattande erfarenhet av migrering av HR-system kan vara praktisk när du migrerar från din äldre leverantör till en ny.

                                    </p>
                                    <h3>När din nuvarande lösning inte uppfyller dina affärsmål är det dags att migrera.
                                    </h3>
                                    <p>Om din organisation är redo att migrera till en ny molnplattform måste du vara beredd med en strategi för att minimera risken och skydda din data. Oavsett om det beror på ett sammanbrott i relationen med din leverantör eller att din molnleverantör har misslyckats fullständigt, bör du ställa dessa tre nyckelfrågor:

                                    </p>
                                    <ul>
                                        <li><em>Har data fastnat i ett proprietärt format, vilket hindrar mig från att använda den utanför min nuvarande leverantörs moln?
                                        </em></li>
                                        <li><em>Vilka format och metoder finns tillgängliga för att flytta data från den nuvarande leverantören?
                                        </em></li>
                                        <li><em>Hur kan vi vara säkra på att all vår data har raderats permanent för att skydda vår datasekretess och säkerhetskrav?
                                        </em></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="services-details-info">
                                    <h3>Hur det fungerar:
                                    </h3>
                                    <p>Det kan finnas skillnader i implementeringsmetoderna, men med rätt datastrategi kan vi se till att den gamla datan överensstämmer med schemat för din nya molnplattform genom att:
                                    </p>
                                    <div className="service-right-img">
                                        <img src="/images/Platform-Migration_result.webp" alt="Service Image" />
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

export default MigrationDetailsContent;