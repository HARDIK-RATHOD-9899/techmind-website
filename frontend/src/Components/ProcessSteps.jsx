import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
const ProcessSteps = () => {
  const styles = {
    timelineContainer: {
      position: "relative",
      width: "100%",
      paddingTop: "56.25%" /* 16:9 Aspect Ratio */,
    },

    imgContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      padding: "15px",
    },

    responsiveImg: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },

    circle: {
      width: "clamp(100px, 20vw, 140px)",
      height: "clamp(100px, 20vw, 140px)",
      background: "white",
      borderRadius: "50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      position: "absolute",
      transform: "translate(-50%, -50%)",
    },

    circle1: {
      top: "59%",
      left: "14%",
    },

    circle2: {
      top: "73%",
      left: "37%",
      //   border:'2px solid red',
    },

    circle3: {
      top: "57%",
      left: "56%",
    },

    circle4: {
      top: "73%",
      left: "1030px",
    },

    icon: {
      fontSize: "clamp(16px, 2vw, 24px)",
      color: "#666",
      marginBottom: "10px",
    },

    label: {
      color: "#666",
      fontSize: "clamp(10px, 1.2vw, 14px)",
      textAlign: "center",
    },

    // Media queries will be handled with CSS
  };

  // Add media queries through a style tag since inline styles don't support them
  const mediaQueryStyles = `
    @media (max-width: 768px) {
      .timeline-container {
        padding-top: 75%;
      }
      
      .circle1 {
        top: 56% !important;
        left: 14% !important;
      }
      
      .circle2 {
        top: 66% !important;
        left: 37% !important;
      }
      
      .circle3 {
        top: 54% !important;
        left: 56% !important;
      }
      
      .circle4 {
        top: 66% !important;
        left: 78% !important;
      }
    }
    
    @media (max-width: 576px) {
      .timeline-container {
        padding-top: 100%;
      }
      
      .circle {
        width: clamp(60px, 15vw, 80px) !important;
        height: clamp(60px, 15vw, 80px) !important;
      }
      
      .circle1 {
        top: 57% !important;
        left: 15% !important;
      }
      
      .circle2 {
        top: 64% !important;
        left: 37% !important;
      }
      
      .circle3 {
        top: 56% !important;
        left: 56% !important;
      }
      
      .circle4 {
        top: 64% !important;
        left: 78% !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyles}</style>
      <div className="container">
        <div>
        <h1 className="heading">Our Plan</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eligendi porro eveniet eos cupiditate qui, quis animi consectetur, repellat voluptatem libero earum voluptatibus repellendus veniam deleniti, atque nihil minus quasi!</p>
        </div>
        <div className="timeline-container" style={styles.timelineContainer}>
          <div style={styles.imgContainer}>
            <img
              src="https://media-hosting.imagekit.io//794febbeebbc408b/Group%2013%20(2).png?Expires=1736327383&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xUq7RSyu9xRndIoilF5u7U9yKhb9N4cj4PdqthRSUvxnics7I56TDrMSJT8dvIVVD1jkbSk-~8l6Dsc0QSqXKYp5Z6vRQAUGtVsMf1YwvfoU9Ml9nwjiz5HD~blAxX5qw2b0VscOpmzlGcAVGPP4RgfpCFCT9I3RvOgwGCQnL1KAkhCBpxDdS38S6JhNgQmeZjFbEY73QJbMJjtNuLvbirtTTc8pgIKBQunwEPE9oBUmhXztoqef3Ofuiiv4xAjphnDKexNsChJn9jx~ZUeV6aTKbRLxsAdL2ypz08DpXTNCMX17~FqeNN8QyAF4PN~ndSiwdhCrNl~u~RnlvzbOLQ__"
              alt="Description"
              style={styles.responsiveImg}
            />
          </div>

          <div
            className="circle1"
            style={{ ...styles.circle, ...styles.circle1 }}
          >
            <i className="fas fa-search" style={styles.icon}></i>
            <span style={styles.label}>RESEARCH</span>
          </div>

          <div
            className="circle2"
            style={{ ...styles.circle, ...styles.circle2 }}
          >
            <i className="fa-solid fa-chart-pie" style={styles.icon}></i>
            <span style={styles.label}>ANALYZE</span>
          </div>

          <div
            className="circle3"
            style={{ ...styles.circle, ...styles.circle3 }}
          >
            <i className="fa-solid fa-bullseye" style={styles.icon}></i>
            <span style={styles.label}>PLAN</span>
          </div>

          <div
            className="circle4"
            style={{ ...styles.circle, ...styles.circle4 }}
          >
            <i className="fa-solid fa-scroll" style={styles.icon}></i>
            <span style={styles.label}>DOCUMENT</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessSteps;