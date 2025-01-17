import React, { useEffect } from 'react'
import Header from '../Components/Header';
import { ToastContainer, toast } from 'react-toastify';
import CountUp from 'react-countup';
// import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/About.css';
import Footer from '../Components/Footer';
import TechLabChatbot from '../Components/TechLabChatbot';

const About = () => {
    const handleReadMoreClick = () => {
        toast("More information coming soon!");
    };
     
    React.useEffect(() => {
      const handleScroll = () => {
        const parallax1 = document.getElementById("parallax1");
        const offset = window.pageYOffset;
        parallax1.style.backgroundPositionY = `${offset * 0.5}px`; // Scroll slower
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <div>
        <Header/>
        <TechLabChatbot/>
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
        <main className="main-content">
          <div className="welcome-sectionn" id="welcome-section">
            <h1>Welcome to Akshaya Technolab</h1>
            <p>Learn today, Lead tomorrow with Akshaya Technolab</p>
            <p>
              At Company, we are passionate about transforming ideas into reality.
              As a dynamic team of freelancers and industry experts, we specialize
              in delivering exceptional web development solutions tailored to your
              business needs. Whether you're a startup looking for a professional 
              online presence or an established company seeking to enhance your 
              digital footprint.
            </p>
            <button className="read-more" onClick={handleReadMoreClick}>Read More</button>
          </div>

          <div className="design-element">
            <img src="https://img.freepik.com/premium-photo/futuristic-computer-lab-with-bright-blue-lighting-generative-ai_952778-2352.jpg" alt="" />
          </div> 
        </main>
        <ToastContainer />

        <section className="bg-light py-3 py-md-5 py-xl-8">
          <div className="containerr">
            <div className="row gy-3 gy-md-5 gy-lg-0 align-items-center">
              <div className="col-12 col-lg-5">
                <h3 className="fs-6 text-secondary mb-2 mb-xl-3 text-left">
                  The Finest Design Agency
                </h3>
                <h2 className="display-5 mb-3 mb-xl-4 text-left">
                  You convey the idea, and we deliver a refined interface.
                </h2>
                <p className="mb-4 mb-xl-5 text-left">
                  We're one of the finest web design agencies that team up with
                  startups, agencies, and founders to design digital products and
                  websites.
                </p>
                <a href="#!" className="btn bsb-btn-2xl btn-primary rounded-pill">
                  More Details
                </a>
              </div>
              <div className="col-12 col-lg-7">
                <div className="row justify-content-xl-end">
                  <div className="col-12 col-xl-11">
                    <div className="row gy-3 gy-md-4">
                      <div className="col-12 col-sm-6">
                        <div className="card border-0 border-bottom border-primary shadow-sm" style={{ width: '80%', margin: '0 auto' }}>
                          <div className="card-body text-center p-3 p-xxl-4">
                            <h3 className="display-6 mb-1" id='te'>
                              <CountUp end={500} duration={3.5} suffix="+"/>
                            </h3>
                            <p className="fs-6 mb-0 text-secondary">
                              Skilled Employees
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="card border-0 border-bottom border-primary shadow-sm" style={{ width: '80%', margin: '0 auto' }}>
                          <div className="card-body text-center p-3 p-xxl-4">
                            <h3 className="display-6 mb-1" id='te'>
                              <CountUp end={1000} duration={3.5} suffix="+" />
                            </h3>
                            <p className="fs-6 mb-0 text-secondary">Projects Delivered</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="card border-0 border-bottom border-primary shadow-sm" style={{ width: '80%', margin: '0 auto' }}>
                          <div className="card-body text-center p-3 p-xxl-4">
                            <h3 className="display-6 mb-1" id='te'>
                              <CountUp end={10000} duration={3.5} suffix="+" />
                            </h3>
                            <p className="fs-6 mb-0 text-secondary">
                              Training Hours 
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="card border-0 border-bottom border-primary shadow-sm" style={{ width: '80%', margin: '0 auto' }}>
                          <div className="card-body text-center p-3 p-xxl-4">
                            <h3 className="display-6 mb-1" id='te'>
                              <CountUp end={20} duration={3.5} suffix="+" />
                            </h3>
                            <p className="fs-6 mb-0 text-secondary">
                              Countries Served
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <div className="parallax-section" id="parallax1">
        <h1>Ready to Elevate Your Online Presence?</h1>
      </div>
        <Footer/>
    </div>
  )
}

export default About