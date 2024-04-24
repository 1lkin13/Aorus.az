import React, { useState, useEffect } from "react";
import "../css/Preloader.css";
import loader from "../assets/images/preloader.svg";
const Preloader = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    console.log("Use Effect Isleyir", loading);
  }, [loading]);
  return loading ? (
    <div className={`preloader ${"show"}`}>
      <div className="svg-container">
        <img src={loader} alt="Loading..." className="loader-svg" />
      </div>
    </div>
  ) : (
    <> {children}</>
  );
};
export default Preloader;
