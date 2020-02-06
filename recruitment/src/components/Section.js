import React from 'react';

const Section = () => (<section>
    <h1 className="header">Write Us</h1>
    <form>
        <h3>Potrzebujesz pomocy z projektem?</h3>
        <p>Napisz do nas, jesteśmy profesjonalistami w temacie programowanie, consultingu i audytu IT</p>

        <label>Imię i Nazwisko</label>
        <input type="text" placeholder="Jan Kowalski"/>

            <label>Adres e-mail</label>
            <input type="text" placeholder="jankowalski@mojafirma.pl"/>

                <label>Numer telefonu</label>
                <input type="number" placeholder="+ 48 285 285 687"/>

                    <label>Temat</label>
                    <select>
                        <option>Consulting </option>
                        <option>Audyt</option>
                        <option>Development</option>
                    </select>

                    <label>Treść</label>
                    <textarea rows="4" cols="50" placeholder="Tutaj wpisz treść wiadomości..."></textarea>

                    <div className="pretty p-default">
                        <input type="checkbox"/>
                            <div className="state p-primary">
                                <label>Wysyłając wiadomość zgadasz sie na przekazanie nam Twoich danych osobowych</label>
                            </div>
            </div>


                        <button className="btn" type="submit">Wyślij</button>
        </form>
    </section>)

export default Section;