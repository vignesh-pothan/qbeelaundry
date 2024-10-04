import React from "react";

import Services from "../components/Services";

import Main from "../components/Main";
import Solution from "../components/Solution";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Main />

      <Services />
      <Solution />

      <Footer />
    </div>
  );
};

export default Home;
