import React, { useState, useEffect } from "react";
import "../index.css";
import ProcessSteps from "../Components/ProcessSteps";
import Testimonials from "../Components/Testimonials";
import TechSlider from "../Components/TechSlider";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import OurService from "../Components/OurService";
import TechLabChatbot from "../Components/TechLabChatbot";
import ScrollToTop from "../Components/ScrollToTop";
import "../assets/css/Home.css";

const Home = () => {
  const handleReadMoreClick = () => {
    alert("More information coming soon!");
  };

  const handleClickOutside = (event) => {
    const navbar = document.querySelector(".navbar");
    if (navbar && !navbar.contains(event.target)) {
      setIsNavVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* <div className="video-background">
      <iframe
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/m1YUmZRfgqU?autoplay=1&mute=1&loop=1&playlist=m1YUmZRfgqU&modestbranding=1&controls=0&showinfo=0" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      ></iframe>

      </div> */}
      <div className="video-background">
      <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/lwX9oMEnd4Q?si=U2zTdrpQWIyVkI8s&autoplay=1&mute=1&loop=1&playlist=lwX9oMEnd4Q"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>

      </div>
      <div
        className="container-fluid"
        style={{ "--bs-gutter-x": "0rem", "--bs-gutter-y": "0" }}
      >
        <Header />
        <main className="main-content">
          <div className="welcome-section" id="welcome-section">
            <h6>What We Have Let's</h6>
            <h1>Create,Collaborate, & Innovate!</h1>
            <p>Learn today, Lead tomorrow with Akshaya Technolab</p>
            <p>
              At Company, we are passionate about transforming ideas into
              reality. As a dynamic team of freelancers and industry experts, we
              specialize in delivering exceptional web development solutions
              tailored to your business needs. Whether you're a startup looking
              for a professional online presence or an established company
              seeking to enhance your digital footprint.
            </p>
          </div>
        </main>
      </div>

      <div className="info-section">
        <div className="child">
          <img
            src="https://www.apolloinfotech.com/images/Home-img/Home-Slide1st.webp"
            alt=""
          />
        </div>

        <div className="child">
          <h2>INNOVATIVE IT SOLUTION TAILORED TO YOUR BUSINESS NEED</h2>
          <p>
            Apollo Infotech offers comprehensive IT solutions and services that
            are customized to meet the unique needs of each client. With
            expertise in emerging technologies and a commitment to exceptional
            customer service, our solutions streamline business processes,
            increase efficiency, and save time and money.
          </p>
        </div>
      </div>
      <TechLabChatbot />
      <ScrollToTop />
      <OurService />
      <ProcessSteps />
      <Testimonials />
      <TechSlider />
      <Footer />
    </>
  );
};

export default Home;
