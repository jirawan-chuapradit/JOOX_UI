import Hamburger from "./Hamburger";
import Download from "../img/download.png";
import Joox from "../img/Joox_Logo.svg"
import "./Navbar.css";
import React, { useEffect, useState } from "react";
const Navbar = () => {
  const [hamburgerOpen, sethamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    sethamburgerOpen(!hamburgerOpen);
  };
  return (
    <>
      <div className="nav_bar">
        <div className="navigation">
          <div className="hamburger" onClick={toggleHamburger}>
            <Hamburger />
          </div>
        </div>
        <div className="icon_item">
          <img className="joox_icon" src={Joox} />
        </div>

        <div className="search_item">
          <div className="search">
            <input
              className="search_input"
              id="input"
              type="search"
              placeholder="ค้นหาเพลง ศิลปิน อัลบัม และเพลย์ลิสต์"
            ></input>
            <svg
              className="search_icon"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </div>
        </div>

        <div className="btn_item">
          <div className="download_btn">
            <img className="icon_download" src={Download} />
            <button className="btn">โหลดแอป JOOX บน พีซี</button>
          </div>
          <div className="sperate_line" />
          <button className="login_btn">เข้าสู่ระบบ</button>
          <div className="sperate_line" />
          <button className="sign_up_btn">สมัครสมาชิก</button>
        </div>
      </div>

      <style jsx>
        {`
          .navigation ul {
            display: ${hamburgerOpen ? "inline" : "none"};
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
