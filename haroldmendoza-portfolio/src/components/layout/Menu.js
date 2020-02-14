import React from "react";
import { useHistory } from "react-router-dom";

const clickInstragram = () => {
  window.open("http://www.instagram.com/haroldrmendoza");
};
const clickGitHub = () => {
  window.open("http://github.com/hrmendoza96");
};
const clickLinkedIn = () => {
  window.open("http://www.linkedin.com/in/harold-mendoza-8b4386128/");
};
const Menu = () => {
  const history = useHistory();

  function goToPortfolio() {
    history.push("/portfolio");
  }

  return (
    <div className="menu">
      <div className="row">
        <div className="col-lg overlay">
          <div className="nav">
            <ul>
              <li onClick={goToPortfolio}>Portfolio</li>
              <li onClick={clickInstragram}>Instagram</li>
              <li onClick={clickGitHub}>GitHub</li>
              <li onClick={clickLinkedIn}>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
