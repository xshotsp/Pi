// Navbar.jsx
import React from "react";
import s from "./nav.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={s.container}>
      <div className={s.links}>
        <Link to="/home" className={s.link}>
          Home
        </Link>
        <Link to="/formPage" className={s.link}>
          Create recipe
        </Link>
        <Link to="/about" className={s.link}>
          About
        </Link>
      </div>
      <div className={s.backLink}>
        <Link to="/" className={s.smallLink}>
          Back
        </Link>
      </div>
    </nav>
  );
}
