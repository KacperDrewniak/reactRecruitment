import React, { Component } from "react";

import Navbar from "./Navbar";
import Header from "./Header";
import Main from "./Main";
import Section from "./Section";
import Companies from "./Companies";
import Footer from "./Footer";
import "../assets/styles/Style.css";

const App = () => (
  <>
    <Navbar />
    <Header />
    <Main />
    <Section />
    <Companies />
    <Footer />
  </>
);

export default App;
