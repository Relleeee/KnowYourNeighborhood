// import React, {Component} from "react";
// import '../Components/css/all.css'
// class TNC extends Component {
// render() {
  
//     return (
//     <div className="terms-body">
//         <div className="terms-container">
//           <h1>TERMS AND CONDITIONS</h1>
//           <p>Welcome to Know Your Neighborhood! These terms and conditions outline the rules and regulations for the use of our services. By accessing or using our website and services, you agree to be bound by these terms and conditions. <br/><b>Last updated: [May 29,2023]</b></p>
    
//           <button className="accordion">1. Intellectual Property</button>
//           <div className="panel">
//           <p>The content on Know Your Neighborhood, including text, graphics, logos, images, and software, is the property of Know Your Neighborhood and protected by intellectual property laws. You may not use, reproduce, modify, or distribute any of the content without our prior written permission.</p>
//           </div>

//           <button className="accordion">2. User Responsibilities</button>
//           <div className="panel">
//           <p>When using our services, you agree to:</p>
//           <ul>
//             <li>Provide accurate and complete information during registration or when using our services.</li>
//             <li>Maintain the security of your account credentials and not share them with others.</li>
//             <li>Comply with all applicable laws and regulations while using our services.</li>
//             <li>Respect the privacy of others and not engage in any unauthorized access or data collection activities.</li>
//           </ul>
//           </div>

//           <button className="accordion">3. User Content</button>
//           <div className="panel">
//           <p>By using our services, you may submit or share content such as reviews, comments, or other materials. You retain ownership of your content, but you grant Know Your Neighborhood a worldwide, royalty-free, non-exclusive license to use, reproduce, modify, adapt, publish, translate, distribute, and display your content.</p>
//           </div>

//           <button className="accordion">4. Limitation of Liability</button>
//           <div className="panel">
//           <p>Know Your Neighborhood is not responsible for any damages, losses, or liabilities arising from your use of our services. We strive to provide accurate and up-to-date information, but we do not warrant the completeness, reliability, or accuracy of the content on our website.</p>
//           </div>

//           <button className="accordion">5. Privacy Policy</button>
//           <div className="panel">
//           <p>Our privacy policy explains how we collect, use, and protect your personal information. By using our services, you agree to our privacy policy.</p>
//           </div>

//           <button className="accordion">6. Modifications</button>
//           <div className="panel">
//           <p>Know Your Neighborhood may revise these terms and conditions at any time. It is your responsibility to review the latest version of the terms and conditions periodically. Your continued use of our services after any modifications constitutes your acceptance of the revised terms and conditions.</p>
//           </div>
//         </div>
//     </div>
//       );
//     }
// }
    
//     export default TNC;

import React, { Component } from "react";
import '../Components/css/all.css';

class TNC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePanel: null
    };
  }

  togglePanel(panelId) {
    this.setState(prevState => ({
      activePanel: prevState.activePanel === panelId ? null : panelId
    }));
  }

  render() {
    return (
      <div className="terms-body">
        <div className="terms-container">
          <h1>TERMS AND CONDITIONS</h1>
          <p>
            Welcome to Know Your Neighborhood! These terms and conditions
            outline the rules and regulations for the use of our services. By
            accessing or using our website and services, you agree to be bound
            by these terms and conditions. <br />
            <b>Last updated: [May 29, 2023]</b>
          </p>

          <button
            className={`accordion ${this.state.activePanel === "panel1" ? "active" : ""}`}
            onClick={() => this.togglePanel("panel1")}
          >
            1. Intellectual Property
          </button>
          <div
            className={`panel ${this.state.activePanel === "panel1" ? "show" : ""}`}
          >
            <p>
              The content on Know Your Neighborhood, including text, graphics,
              logos, images, and software, is the property of Know Your
              Neighborhood and protected by intellectual property laws. You may
              not use, reproduce, modify, or distribute any of the content
              without our prior written permission.
            </p>
          </div>

          <button
            className={`accordion ${this.state.activePanel === "panel2" ? "active" : ""}`}
            onClick={() => this.togglePanel("panel2")}
          >
            2. User Responsibilities
          </button>
          <div
            className={`panel ${this.state.activePanel === "panel2" ? "show" : ""}`}
          >
            <p>
              When using our services, you agree to:
            </p>
            <ul>
              <li>Provide accurate and complete information during registration or when using our services.</li>
              <li>Maintain the security of your account credentials and not share them with others.</li>
              <li>Comply with all applicable laws and regulations while using our services.</li>
              <li>Respect the privacy of others and not engage in any unauthorized access or data collection activities.</li>
            </ul>
          </div>

          <button
            className={`accordion ${this.state.activePanel === "panel3" ? "active" : ""}`}
            onClick={() => this.togglePanel("panel3")}
          >
            3. User Content
          </button>
          <div
            className={`panel ${this.state.activePanel === "panel3" ? "show" : ""}`}
          >
            <p>
              By using our services, you may submit or share content such as reviews, comments, or other materials. You retain ownership of your content, but you grant Know Your Neighborhood a worldwide, royalty-free, non-exclusive license to use, reproduce, modify, adapt, publish, translate, distribute, and display your content.
            </p>
          </div>

          <button
            className={`accordion ${this.state.activePanel === "panel4" ? "active" : ""}`}
            onClick={() => this.togglePanel("panel4")}
          >
            4. Limitation of Liability
          </button>
          <div
            className={`panel ${this.state.activePanel === "panel4" ? "show" : ""}`}
          >
            <p>
              Know Your Neighborhood is not responsible for any damages, losses, or liabilities arising from your use of our services. We strive to provide accurate and up-to-date information, but we do not warrant the completeness, reliability, or accuracy of the content on our website.
            </p>
          </div>

          <button
            className={`accordion ${this.state.activePanel === "panel5" ? "active" : ""}`}
            onClick={() => this.togglePanel("panel5")}
          >
            5. Privacy Policy
          </button>
          <div
            className={`panel ${this.state.activePanel === "panel5" ? "show" : ""}`}
          >
            <p>
              Our privacy policy explains how we collect, use, and protect your personal information. By using our services, you agree to our privacy policy.
            </p>
          </div>

          <button
            className={`accordion ${this.state.activePanel === "panel6" ? "active" : ""}`}
            onClick={() => this.togglePanel("panel6")}
          >
            6. Modifications
          </button>
          <div
            className={`panel ${this.state.activePanel === "panel6" ? "show" : ""}`}
          >
            <p>
              Know Your Neighborhood may revise these terms and conditions at any time. It is your responsibility to review the latest version of the terms and conditions periodically. Your continued use of our services after any modifications constitutes your acceptance of the revised terms and conditions.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default TNC;
