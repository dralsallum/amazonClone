import React from "react";
import {
  Navbar,
  Banner,
  Slider,
  Header,
  Body,
  About,
  Footer,
} from "../components";

const Home = () => {
  return (
    <>
      <Banner />
      <Navbar />
      <Header />
      <Slider />
      <Body />
      <About />
      <Footer />
    </>
  );
};

export default Home;
