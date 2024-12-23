import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Our Hospital Management System is an innovative solution designed to 
          streamline healthcare operations and enhance patient care. With a focus 
          on efficiency and accessibility, this project integrates key functionalities 
          like patient registration, appointment scheduling, medical record management, and 
          billing into a unified platform. By reducing manual workloads and minimizing errors, 
          it allows healthcare professionals to concentrate more on patient outcomes.!
          </p>
          <p>We are all in 2024!</p>
          <p>We are working on a MERN STACK PROJECT.</p>
          <p>
          This project is developed with a vision to modernize hospital 
          workflows and meet the growing demand for digital healthcare solutions. 
          By incorporating features like real-time data access and analytics, 
          it empowers healthcare providers to make informed decisions and deliver 
          exceptional care to patients. Our Hospital Management System serves 
          as a step toward creating a more connected and efficient healthcare ecosystem.
          </p>
          <p>"Where Technology Meets Compassion in Healthcare."</p>
          <p>"Better Management, Better Healing."</p>
        </div>
      </div>
    </>
  );
};

export default Biography;