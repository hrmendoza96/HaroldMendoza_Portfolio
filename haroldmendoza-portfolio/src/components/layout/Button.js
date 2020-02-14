import React, { useRef, useEffect } from "react";
import { TimelineMax, Expo } from "gsap";
import $ from "jquery";

const Button = () => {
  let menuBar = useRef(null);
  useEffect(() => {
    let time1 = new TimelineMax({ paused: true });
    time1.to(menuBar, 1, {
      top: 0,
      ease: Expo.easeInOut
    });
    time1.staggerFrom(
      ".menu ul li",
      1,
      { y: 100, opacity: 0, ease: Expo.easeOut },
      0.1
    );
    time1.reverse();
    $(document).on("click", ".menu-btn", () => {
      time1.reversed(!time1.reversed());
    });
  });
  return (
    <div>
      <div
        ref={element => {
          menuBar = element;
        }}
        className="menu-btn"
      >
        <button type="button">
          <i className="material-icons">menu</i>
        </button>
      </div>
    </div>
  );
};

export default Button;
