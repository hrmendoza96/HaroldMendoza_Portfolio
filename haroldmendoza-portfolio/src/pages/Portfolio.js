import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import simpleParallax from "simple-parallax-js";

// Import Images
import ImageOne from "../img/portfolio/01.JPG";
import ImageTwo from "../img/portfolio/02.JPG";
import ImageThree from "../img/portfolio/03.jpg";
import ImageFour from "../img/portfolio/04.JPG";

import Harold from "../img/portfolio/harold.png";
import Mendoza from "../img/portfolio/mendoza.png";

const Portfolio = () => {
  let imgOneRef = useRef(null);
  let imgTwoRef = useRef(null);
  let imgThreeRef = useRef(null);
  let imgFourRef = useRef(null);
  let imgFiveRef = useRef(null);
  let imgSixRef = useRef(null);
  useEffect(() => {
    // Control Animation for parallax scrolling
    var image = document.getElementsByClassName("ione");
    new simpleParallax(image, {
      scale: 1.8
    });

    var image = document.getElementsByClassName("itwo");
    new simpleParallax(image, {
      scale: 1.6,
      orientation: "left"
    });

    var image = document.getElementsByClassName("ithree");
    new simpleParallax(image, {
      scale: 1.6,
      orientation: "right"
    });

    var image = document.getElementsByClassName("ifour");
    new simpleParallax(image, {
      scale: 1.6
    });

    var image = document.getElementsByClassName("ifive");
    new simpleParallax(image, {
      scale: 1.6,
      orientation: "right"
    });

    var image = document.getElementsByClassName("isix");
    new simpleParallax(image, {
      scale: 1.6,
      orientation: "left"
    });
  });

  const history = useHistory();

  function goToHome() {
    history.push("/");
  }
  return (
    <div className="container-portfolio">
      <div className="whitespace"></div>
      <div className="container">
        <div className="return" onClick={goToHome}>
          <h5>return</h5>
        </div>
        <div className="row">
          <div className="col-lg-4 img one">
            <img
              id="portImg"
              src={ImageOne}
              ref={element => {
                imgOneRef = element;
              }}
              className="ione"
              alt=""
            />
          </div>

          <div className="col-lg-3 txt text-1">
            <h1 id="picTitles">Roatan, Bay Islands</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 txt text-2">
            <h1 id="picTitles">
              New York <br />
              City
            </h1>
          </div>

          <div className="col-lg-4 img two">
            <img
              id="portImg"
              src={ImageTwo}
              ref={element => {
                imgTwoRef = element;
              }}
              className="itwo"
              alt=""
            />
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 img three">
              <img
                id="portImg"
                src={Harold}
                ref={element => {
                  imgThreeRef = element;
                }}
                className="ithree"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 img four">
            <img
              id="portImg"
              src={ImageThree}
              ref={element => {
                imgFourRef = element;
              }}
              className="ifour"
              alt=""
            />
          </div>

          <div className="col-lg-3 txt text-3">
            <h1 id="picTitles">Chemex</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 txt text-4">
            <h1 id="picTitles">
              Washington <br />
              D.C.
            </h1>
          </div>

          <div className="col-lg-4 img five">
            <img
              id="portImg"
              src={ImageFour}
              ref={element => {
                imgFiveRef = element;
              }}
              className="ifive"
              alt=""
            />
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 img six">
              <img
                id="portImg"
                src={Mendoza}
                ref={element => {
                  imgSixRef = element;
                }}
                className="isix"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
