// src/TabComponent.js

import React, { useState } from "react";
import "./Tab.scss";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("left");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tab-container">
      <h4>Choose the best plan for you</h4>
      <div className="tab-trial">
        <div className="trial">
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="vuesax/linear/arrow-down">
              <g id="arrow-down">
                <path
                  id="Vector"
                  d="M10.5003 18.3346C15.1027 18.3346 18.8337 14.6037 18.8337 10.0013C18.8337 5.39893 15.1027 1.66797 10.5003 1.66797C5.89795 1.66797 2.16699 5.39893 2.16699 10.0013C2.16699 14.6037 5.89795 18.3346 10.5003 18.3346Z"
                  stroke="#00D400"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M10.5 7.08203V12.082"
                  stroke="#00D400"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_3"
                  d="M8 10.418L10.5 12.918L13 10.418"
                  stroke="#00D400"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </g>
          </svg>

          <h6>7 days free trial</h6>
        </div>
        <div className="trial">
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="vuesax/linear/arrow-down">
              <g id="arrow-down">
                <path
                  id="Vector"
                  d="M10.5003 18.3346C15.1027 18.3346 18.8337 14.6037 18.8337 10.0013C18.8337 5.39893 15.1027 1.66797 10.5003 1.66797C5.89795 1.66797 2.16699 5.39893 2.16699 10.0013C2.16699 14.6037 5.89795 18.3346 10.5003 18.3346Z"
                  stroke="#00D400"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M10.5 7.08203V12.082"
                  stroke="#00D400"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_3"
                  d="M8 10.418L10.5 12.918L13 10.418"
                  stroke="#00D400"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </g>
          </svg>

          <h6>No credit card required</h6>
        </div>
      </div>
      <div className="tab-head">
        <div className="tab-btn">
          <div
            className={`tab left-tab ${activeTab === "left" ? "active" : ""}`}
            onClick={() => handleTabClick("left")}
          >
            Bi-weekly
          </div>
          <div
            className={`tab right-tab ${activeTab === "right" ? "active" : ""}`}
            onClick={() => handleTabClick("right")}
          >
            Monthly
          </div>
        </div>
      </div>
      <div className="content">
        {activeTab === "left" && (
          <div className="price-container">
            <div className="price">
              <p>Free Trial</p>
              <h1>0.0ETH</h1>
              <li>up to 20 wallets</li>
              <li>up to 20 wallets</li>
              <li>up to 20 wallets</li>
              <li>up to 20 wallets</li>
              <li>up to 20 wallets</li>
              <li>up to 20 wallets</li>
              <li>up to 20 wallets</li>
              <li>up to 20 wallets</li>

              <button>Select Plan</button>
              <p>Terms and Condition apply</p>
            </div>

            <div className="price">
              <div className="featured">Most Popular</div>
              <p>Pro</p>
              <h1>
                0.1ETH/<span>MTH</span>
              </h1>
              <li>up to 20 wallets</li>
              <li>up to 20 wallets</li>
              <li>up to 20 wallets</li>
              <li>up to 20 wallets</li>
              <li>up to 20 wallets</li>
              <li>up to 20 wallets</li>
              <li>up to 20 wallets</li>
              <li>up to 20 wallets</li>

              <button>Select Plan</button>
              <p>Terms and Condition apply</p>
            </div>

            <div className="price">
              <p>Flex</p>
              <h1>Custom</h1>
              <li>up to 20 wallets</li>
              <li>up to 20 wallets</li>
              <li>up to 20 wallets</li>
              <li>up to 20 wallets</li>
              <li>up to 20 wallets</li>
              <li>up to 20 wallets</li>
              <li>up to 20 wallets</li>
              <li>up to 20 wallets</li>

              <button>Select Plan</button>
              <p>Terms and Condition apply</p>
            </div>
          </div>
        )}
        {activeTab === "right" && <p>Content for Right Tab</p>}
      </div>
    </div>
  );
};

export default TabComponent;
