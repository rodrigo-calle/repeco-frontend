import React from "react";
import "./LoginHeader.css";

const LoginHeader = () => {
  return (
    <header>
      <img
        className="logo-repeco"
        src="https://icongr.am/devicon/couchdb-plain.svg?size=128&color=000000"
        height="80px"
        alt="logo-repeco"
      />
      <h1 className="login-title">ACCESO A REPECO</h1>
      <p className="line"></p>
    </header>
  );
};

export default LoginHeader;