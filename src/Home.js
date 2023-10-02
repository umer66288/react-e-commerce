import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeacherProduct from "./components/FeacherProduct";

const Home = (props) => {
  return (
    <>
      <HeroSection name="Umer Store" setProgress={props.setProgress}/>
      <FeacherProduct />
      <Services />
      <Trusted />
    </>
  )
};

export default Home;