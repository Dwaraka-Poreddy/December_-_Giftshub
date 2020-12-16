import React, { useState, useEffect } from "react";
import ThreeDImage from "../ThreeDImage/ThreeDImage";

import firebase from "../firebase";
import { Link } from "react-router-dom";
export default function LiveThreeDImage({ match }) {
  const [fbimg, setfbimg] = useState("");
  useEffect(() => {
    const todoRef = firebase
      .database()
      .ref("/ThreeDImage/" + match.params.slug)
      .once("value")
      .then((snapshot) => {
        var img = snapshot.val().url;
        setfbimg(img);
      });
  }, []);
  return (
    <div style={{ backgroundColor: "#70cff3", height: "100vh" }}>
      <header
        style={{ backgroundColor: "#70cff3", color: "#ffffff" }}
        class="header-area header-sticky"
      >
        <div class="container">
          <div class="row">
            <div class="col-12">
              <nav class="main-nav">
                <Link class="logo" to="/">
                  Gifts Hub
                </Link>

                <ul class="nav">
                  <li class="scroll-to-section">
                    <a href="#welcome" class="active">
                      Home
                    </a>
                  </li>
                  <li class="scroll-to-section">
                    <a href="#about">Combo</a>
                  </li>
                  <li class="scroll-to-section">
                    <a href="#services">Services</a>
                  </li>
                </ul>
                <a href="#menu" class="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <br />
      <br />
      <div style={{ backgroundColor: "#70cff3" }}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "0.15" }}></div>
          <div style={{ flex: "0.7" }}>
            <ThreeDImage fbimg={fbimg} />
          </div>
          <div style={{ flex: "0.15" }}></div>
        </div>
      </div>
    </div>
    // <div>
    //   <Nav />
    //   <div style={{ marginTop: "5px" }}>
    //     <ThreeDImage image={fbimg} />
    //   </div>
    // </div>
  );
}