import React from "react";
import s from "./loading.module.css";
import foodLoadingGif from "../../assets/foodloading.gif"
export default function Loading() {
  return (
    <div style={{paddingTop:"100px",height:"100vh"}}>
      <img src={foodLoadingGif} alt="Loading" className={s.loadingGif} />
      <svg viewBox="25 25 50 50">
      </svg>
    </div>
  );
}