import React, {Component} from "react";
import './css/all.css'

class About extends Component {

    render(){
        return (
        <div className="about-body">
            <div className="about-container">
              <h1 className="about-h1">About Us</h1>
              <p className="about-p">Know Your Neighborhood is a platform that aims to provide valuable information about local neighborhoods and communities. We believe that by knowing more about your neighborhood, you can make informed decisions, discover hidden gems, and connect with your community.</p>
        
              <h2 className="about-h2">Our Mission</h2>
              <p className="about-p">Our mission is to empower individuals with the knowledge they need to explore, understand, and engage with their neighborhoods. We strive to create a platform that brings people together, fosters community engagement, and enhances the overall neighborhood experience.</p>
            
              <h2 className="about-h2">Our Vision</h2>
              <p className="about-p">Our vision is to create a world where everyone feels a strong sense of belonging and connection to their neighborhoods. We envision vibrant and inclusive communities where people are actively involved, supporting one another, and making their neighborhoods better places to live.</p>

              <h2 className="about-h2">Contact Us</h2>
              <p className="about-p">If you have any questions, suggestions, or feedback, we would love to hear from you. You can reach us at <a href="mailto:info@example.com">Joshualiao1211@gmail.com</a> or through our contact form.</p>
            </div>
        </div>
          );
        };
}
        export default About;