import React from "react";
import kks from "../assests/kks.png";

import styles from "../styles/style.module.css";
export default function Media() {
  return (
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      <h1 className={(styles.title, styles.red)}>Kronkos</h1>
      <img src={kks} alt="" />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/YGSLiK81XC0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
