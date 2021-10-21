import React, { Component } from 'react';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';



class DigitalDetailsContent extends Component {

    // state = {
    //     photoIndex: 0,
    //     isOpenImage: false
    // }

    render() {

        // const { photoIndex, isOpenImage } = this.state;

        return (
            <>


                <section className="portfolio-details ptb-100 ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-desc">
                                    <h2>Topp Magento utvecklingsbolag</h2>
                                    <p>Vårt team av certifierade Magento -experter utnyttjar de bästa e -handelswebbdesignmetoderna och utvecklar konsekvent engagerande e -handelswebbplatser. Vårt Magento webbutvecklingsföretag har 40+ Magento -certifierade utvecklare och kan fullt ut möta dina anpassade handelsbehov inklusive; UI -ändringar, databasändringar, admin -ändringar, anpassningar av kassan, orderhanteringsintegrationer, katalogutcheckningsstruktur och funktionalitetsändringar, migration och mycket mer.</p>

                                    <p>Som Professional Solutions Partner och Premier Extension Builder Technology Partner har vi etablerat ett oklanderligt rykte som en topp Magento e -handelsbyrå och är mycket stolta över att vara en av mycket få Magento -byråer som har detta dubbla partnerskap. Som ett resultat av vårt pågående engagemang, kunskap och innovativa framsteg inom Magneto-plattformen har vi tilldelats fyra år i rad (2016-2019) som Magento Marketplace Innovator; ett erkännande som endast tilldelas en topp Magento e -handelsbyrå!</p>

                                    <p>Som Adobe Silver Partner har vårt webbutvecklingsföretag för e-handel en dokumenterad erfarenhet av att utveckla och implementera högpresterande digitala strategier som syftar till att skilja ditt företag från konkurrenter, bygga upp medvetenhet och skapa omvandlingar.</p>

                                    <p>Oavsett om ditt varumärke påbörjar en nybyggnad eller en uppgradering från din nuvarande plattform. Våra Magneto-anpassningar är utvecklade i enlighet med dina verksamhetskrav och använder lämpliga ramar och tredjepartsprogram som är utformade för att möta både lokala, regionala och globala behov.</p>


                                    <div style={{ marginTop: "2em" }}>
                                        <img src="/images/adobe.png" alt="image" className="rounded-10" width="400" />
                                    </div>
                                    <div style={{ marginTop: "2em", marginBottom: "2em" }}>
                                        <img src="/images/magento-i.png" alt="image" className="rounded-10" width="1200" />
                                    </div>
                                    <h2>Vi är Magento -experter</h2>
                                    <p>Vårt certifierade team med 40+ Magento -experter har framgångsrikt utvecklat och levererat över 400 Magento -webbplatser och växande! Vi tillhandahåller kontinuerligt banbrytande e-handelsdesign, utvecklas i enlighet med branschspecifika bästa praxis och levererar innovativa e-handelslösningar för B2B / B2C och hybridverksamhet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-100 pb-70 bg-fcfbfb">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-2 col-sm-6">
                                <div className="funfact-card">
                                    <img src="/images/magent-certified-developer.png" alt="image" className="rounded-10" width="80" />
                                    <h3>40+</h3>
                                    <p>Magento -certifierade utvecklare</p>
                                </div>
                            </div>

                            <div className="col-lg-2 col-sm-6">
                                <div className="funfact-card">
                                    <img src="/images/magent-certified-developer.png" alt="image" className="rounded-10" width="80" />
                                    <h3>400+</h3>
                                    <p>Magento webbutiker utvecklade</p>
                                </div>
                            </div>

                            <div className="col-lg-2 col-sm-6">
                                <div className="funfact-card">
                                    <img src="/images/magent-certified-developer.png" alt="image" className="rounded-10" width="80" />
                                    <h3>500+</h3>
                                    <p>Magento webbutiker utvecklade</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-6">
                                <div className="funfact-card">
                                    <img src="/images/magent-certified-developer.png" alt="image" className="rounded-10" width="80" />
                                    <h3>6.78B</h3>
                                    <p>Besökare till våra utvecklade och optimerade magento -webbplatser</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-6">
                                <div className="funfact-card">
                                    <img src="/images/magent-certified-developer.png" alt="image" className="rounded-10" width="80" />
                                    <h3>71%</h3>
                                    <p>Genomsnittlig försäljningsökning med våra magento -implementeringar

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="portfolio-details ptb-50 ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-desc">
                                    <h2>Vi erbjuder Magento Development Services</h2>
                                    <p>Vårt välkända e-handelsteam för webbutveckling kan leverera högkvalitativa e-handelsresultat på olika Magento-plattformar. Vi erbjuder ett brett utbud av Magento webbplatsdesign och utvecklingstjänster, inklusive följande Magento -tjänster.</p>

                                    <div className="row justify-content-center">
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="funfact-card">
                                                <img src="/images/Magento-1.png" alt="image" className="rounded-10" />
                                                <h3>40+</h3>
                                                <p>Magento -certifierade utvecklare</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-sm-6">
                                            <div className="funfact-card">
                                                <img src="/images/Magento-2.png" alt="image" className="rounded-10" />
                                                <h3>400+</h3>
                                                <p>Magento webbutiker utvecklade</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-sm-6">
                                            <div className="funfact-card">
                                                <img src="/images/Magento-3.png" alt="image" className="rounded-10" />
                                                <h3>500+</h3>
                                                <p>Magento webbutiker utvecklade</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="funfact-card">
                                                <img src="/images/Magento-4.png" alt="image" className="rounded-10" />
                                                <h3>6.78B</h3>
                                                <p>Besökare till våra utvecklade och optimerade magento -webbplatser</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="funfact-card">
                                                <img src="/images/Magento-5.png" alt="image" className="rounded-10" />
                                                <h3>71%</h3>
                                                <p>Genomsnittlig försäljningsökning med våra magento -implementeringar

                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="funfact-card">
                                                <img src="/images/Magento-6.png" alt="image" className="rounded-10" />
                                                <h3>71%</h3>
                                                <p>Genomsnittlig försäljningsökning med våra magento -implementeringar

                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="funfact-card">
                                                <img src="/images/Magento-7.png" alt="image" className="rounded-10" />
                                                <h3>71%</h3>
                                                <p>Genomsnittlig försäljningsökning med våra magento -implementeringar

                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="funfact-card">
                                                <img src="/images/Magento-8.png" alt="image" className="rounded-10" />
                                                <h3>71%</h3>
                                                <p>Genomsnittlig försäljningsökning med våra magento -implementeringar

                                                </p>
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

export default DigitalDetailsContent;