import React, { Component } from "react";


class Section extends Component {
  state = {
    username: "",
    email: "",
    topi: "",
    accept: false,
    number: ""
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {
    const type = e.target.type;

    const name = e.target.name;

    if (type === "text" || type === "password" || type === "email") {
      const value = e.target.value;
      const checked = e.target.checked;
      this.setState({
        [name]: value
      });
    } else if (type === "checkbox") {
      const checked = e.target.checked;
      this.setState({
        [name]: checked
      });
    }
  };

  render() {
    return (
      <section>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdn.jsdelivr.net/npm/pretty-checkbox@3.0/dist/pretty-checkbox.css" />
        <h1 className="header">Write Us</h1>
        <form onSubmit={this.handleSubmit}>
          <h3>Potrzebujesz pomocy z projektem?</h3>
          <p>Napisz do nas, jesteśmy profesjonalistami w temacie programowanie, consultingu i audytu IT</p>
          <label htmlFor="name">
            Imię i Nazwisko
            <input
              type="text"
              name="username"
              placeholder="Jan Kowalski"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="email">
            e-mail
            <input
              type="text"
              name="email"
              placeholder="jankowalski@mojafirma.pli"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="number">
            Numer telefonu
            <input
              type="text"
              name="number"
              placeholder="+ 48 285 285 687"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="Topic">
            Temat
            <select>
              <option>Consulting </option>
              <option>Audyt</option>
              <option>Development</option>
            </select>
          </label>
          <label>
            Treść
            <textarea rows="4" cols="50" placeholder="Tutaj wpisz treść wiadomości..." />
          </label>
          <div className="pretty p-default">
            <input type="checkbox" value={this.state.accept}/>
            <div className="state p-primary">
              <label>Wysyłając wiadomość zgadasz sie na przekazanie nam Twoich danych osobowych</label>
            </div>
          </div>
          <button className="btn">Wyślij</button>
        </form>
      </section>
    );
  }
}

export default Section;
