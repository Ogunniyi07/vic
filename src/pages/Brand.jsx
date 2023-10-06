import React from "react";
import "./Brand.scss";
import img from "../img/img.png";
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import img4 from "../img/img4.png";
import img5 from "../img/img5.png";
import img6 from "../img/img6.png";
import img7 from "../img/img7.png";
import img8 from "../img/img8.png";
import Contact from "../component/Contact/Contact";
import { BsDownload } from "react-icons/bs";

const Brand = () => {
  return (
    <div className="brand">
      <div className="brand-head">
        <h1>Brand Assets</h1>
        <p>
          How we speak, sound, act, and look are the things that connect us to
          our audience. Our logos must be used as they are provided and NEVER
          edited, recreated, or used in part.
        </p>
      </div>
      <div className="brand-body">
        <div className="brand-container">
          <div className="body-text">
            <p>Colored</p>
          </div>
          <div className="grid">
            <div className="box">
              <img src={img} alt="logo" />
              <div className="overlay">
                <div className="overlay-title">
                  <h5>YardTools Original Logo</h5>
                </div>
                <div className="overlay-body">
                  <button>
                    Download (PNG) <BsDownload />
                  </button>
                  <button>
                    Download (SVG) <BsDownload />
                  </button>
                </div>
              </div>
            </div>
            <div className="box">
              <img src={img1} alt="logo" />
              <div className="overlay">
                <div className="overlay-title">
                  <h5>YardTools Original Logo</h5>
                </div>
                <div className="overlay-body">
                  <button>
                    Download (PNG) <BsDownload />
                  </button>
                  <button>
                    Download (SVG) <BsDownload />
                  </button>
                </div>
              </div>
            </div>
            <div className="box">
              <img src={img2} alt="logo" />
              <div className="overlay">
                <div className="overlay-title">
                  <h5>YardTools Original Logo</h5>
                </div>
                <div className="overlay-body">
                  <button>
                    Download (PNG) <BsDownload />
                  </button>
                  <button>
                    Download (SVG) <BsDownload />
                  </button>
                </div>
              </div>
            </div>
            <div className="box">
              <img src={img3} alt="logo" />
              <div className="overlay">
                <div className="overlay-title">
                  <h5>YardTools Original Logo</h5>
                </div>
                <div className="overlay-body">
                  <button>
                    Download (PNG) <BsDownload />
                  </button>
                  <button>
                    Download (SVG) <BsDownload />
                  </button>
                </div>
              </div>
            </div>
            <div className="box">
              <img src={img4} alt="logo" />
              <div className="overlay">
                <div className="overlay-title">
                  <h5>YardTools Original Logo</h5>
                </div>
                <div className="overlay-body">
                  <button>
                    Download (PNG) <BsDownload />
                  </button>
                  <button>
                    Download (SVG) <BsDownload />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="body-text2">
            <p>Monochrome</p>
          </div>
          <div className="grid">
            <div className="box">
              <img src={img7} alt="logo" />
              <div className="overlay">
                <div className="overlay-title">
                  <h5>YardTools Original Logo</h5>
                </div>
                <div className="overlay-body">
                  <button>
                    Download (PNG) <BsDownload />
                  </button>
                  <button>
                    Download (SVG) <BsDownload />
                  </button>
                </div>
              </div>
            </div>
            <div className="box1">
              <img src={img8} alt="logo" />
              <div className="overlay">
                <div className="overlay-title">
                  <h5>YardTools Original Logo</h5>
                </div>
                <div className="overlay-body">
                  <button>
                    Download (PNG) <BsDownload />
                  </button>
                  <button>
                    Download (SVG) <BsDownload />
                  </button>
                </div>
              </div>
            </div>
            <div className="box">
              <img src={img5} alt="logo" />
              <div className="overlay">
                <div className="overlay-title">
                  <h5>YardTools Original Logo</h5>
                </div>
                <div className="overlay-body">
                  <button>
                    Download (PNG) <BsDownload />
                  </button>
                  <button>
                    Download (SVG) <BsDownload />
                  </button>
                </div>
              </div>
            </div>
            <div className="box">
              <img src={img6} alt="logo" />
              <div className="overlay">
                <div className="overlay-title">
                  <h5>YardTools Original Logo</h5>
                </div>
                <div className="overlay-body">
                  <button>
                    Download (PNG) <BsDownload />
                  </button>
                  <button>
                    Download (SVG) <BsDownload />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Brand;
