import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import Programs from "../../components/programs/Programs";
import Values from "../../components/Values";
import FAQs from "../../components/FAQs";
import Testimonials from "../../components/Testimonials";

const Home = () => {
  return (
    <>
      <Header />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
    </>
  );
};

export default Home;
