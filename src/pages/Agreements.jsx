import React from "react";
import "./Agreements.scss";
import Contact from "../component/Contact/Contact";

const Agreements = () => {
  return (
    <div className="agreement">
      <div className="agreement-head">
        <h1>Legal Agreements</h1>
        <p>
          Independence can be lonely, so we have created these guides to help
          you deliver more business value from your investments more quickly.
        </p>
        <input type="search" placeholder="Search" />
        <div className="search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
              stroke="#333231"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22 22L20 20"
              stroke="#333231"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="agreement-body">
        <div className="body-container">
          <div className="side">
            <ul>
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>Legal Agreement</li>
            </ul>
          </div>
          <div className="main">
            <p>
              Effective Date: [Date]<br/><br/>
                YardTools <br/><br/> ("we," "our," or "us") is
              committed to protecting the privacy and security of your personal
              information. This Privacy Policy outlines how we collect, use,
              disclose, and safeguard your information when you interact with
              our crypto-based services and platforms. By accessing or using our
              website, applications, products, or services, you agree to the
              terms of this Privacy Policy.<br/><br/>
               1. Information We Collect<br/><br/>
               We may collect various types of information, including but not limited
              to:<br/> <br/>
              a. Personal Information: Information that identifies you as an
              individual, such as your name, email address, phone number, and
              other contact details.<br/><br/>
               b. Financial Information: Information
              related to your financial transactions, cryptocurrency holdings,
              wallet addresses, and other relevant details required for
              crypto-based services.<br/><br/>
               c. Device and Usage Information:<br/><br/>
              Information about the device(s) you use to access our services,
              your IP address, browser type, operating system, and usage data.
              d. <br/><br/>Cookies and Similar Technologies: We may use cookies, web
              beacons, and similar technologies to collect information about
              your interactions with our website and improve our services.<br/><br/>
               2. How We Use Your Information We use your information for the
              following purposes: <br/><br/>
              a. To Provide Services: We process your information to offer and maintain our crypto-based products and
              services, including cryptocurrency transactions, wallet services,
              and customer support. <br/><br/>
              b. Account Management: We use your
              information to create and manage your account, verify your
              identity, and facilitate secure logins. <br/><br/>
              c. Communications: We may send you important updates, notifications, and promotional
              materials related to our services. <br/><br/>
              d. Personalization: We may use your information to personalize your experience and improve our
              offerings. <br/><br/>
              e. Legal and Compliance: We process your information to
              comply with legal obligations and enforce our terms of service and
              other policies. <br/><br/>
              3. How We Share Your Information We may share your
              information in the following circumstances: <br/><br/>
              a. Service Providers:<br/><br/>
              We may share your information with third-party service providers
              who assist us in delivering our services (e.g., payment
              processors, customer support services). <br/><br/>
              b. Legal Requirements: We may disclose your information in response to lawful requests from
              government authorities or to comply with applicable laws,
              regulations, or legal processes. <br/><br/>
              c. Business Transfers: In the event of a merger, acquisition, or sale of all or part of our
              business, your information may be transferred to the new entity.<br/><br/>
              d. Consent: <br/><br/>
              We may share your information with third parties if
              you provide explicit consent. <br/><br/>
              4. Data Security We implement reasonable security measures to protect your information from
              unauthorized access, disclosure, alteration, or destruction.
              However, no data transmission over the internet or electronic
              storage system is completely secure, so we cannot guarantee
              absolute security. <br/><br/>
              5. Your Rights and Choices You have certain rights regarding your information, including: <br/><br/>
              a. Access: You may request access to the personal information we hold about you. 
              b. Correction: You may request corrections to any inaccurate or incomplete personal information. <br/><br/>
              c. Deletion: You may request the deletion of your personal information under certain circumstances.<br/><br/>
              d. Objection: You may object to the processing of your personal
              information under certain conditions.<br/><br/>
               6. Children's Privacy Our services are not intended for individuals under the age of 18. We
              do not knowingly collect personal information from children. If
              you believe we have inadvertently collected information from a
              child, please contact us immediately. 
              <br/><br/>
              7. Updates to this Policy We may update this Privacy Policy from time to time. We will notify
              you of significant changes through prominent notices on our
              website or by email. Your continued use of our services after such
              updates constitutes your acceptance of the revised Privacy Policy.
            </p>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Agreements;
