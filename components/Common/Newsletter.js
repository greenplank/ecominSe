import React, { Component } from 'react';

class Newsletter extends Component {
    render() {
        return (
            <section className="newsletter-area">
                <div className="container">
                    <div className="newsletter-inner-area">
                        <div className="newsletter-content">
                            <span className="sub-title">Kom igång direkt!</span>
                            <h2>Få den enda nya uppdateringen från detta nyhetsbrev
                            </h2>

                            <form className="newsletter-form">
                                <input type="email" className="form-control" placeholder="Skriv in din e-postadress" name="email" required />
                                <button type="submit">Prenumerera
                                    !</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Newsletter;