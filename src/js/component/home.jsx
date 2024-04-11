import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <Jumbotron />
      <div className="d-flex row text-center justify-content-around m-4 mx-0">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
