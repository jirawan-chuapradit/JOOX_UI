
import Hamburger from "./Hamburger"
import Download from "../img/download.png"
import "./Navbar.css"
import React, { useEffect, useState } from "react";
const Navbar = ()=>{
    const [hamburgerOpen, sethamburgerOpen] = useState(false)

    const toggleHamburger = () => {
        sethamburgerOpen(!hamburgerOpen)
    }
    return (
        <>
            <div className="row_item">
                <div className="navigation">
                    <div className="hamburger" onClick={toggleHamburger}>
                        <Hamburger/>
                    </div>
                    {/* <ul>
                        <li>Discover</li>
                        <li>คลังเพลง</li>
                        <li>VIP</li>
                    </ul> */}
                </div>
                <div className="icon_item">
                    <h1>JOOX</h1>
                </div>

                <div className="search_item">
                    <form>
                        <div className="search">
                            <input  className="search_input" id="input" type="search"  placeholder="ค้นหาเพลง ศิลปิน อัลบัม และเพลย์ลิสต์" ></input>
                            <svg className="search_icon" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>

                        </div>
                    </form>
                </div>

                <div className="btn_item">
                    <div className="download_btn">
                        <img className="icon_download" src={Download}/>
                        <button className="btn">โหลดแอป JOOX บน พีซี</button>
                    </div>
                    <div className="sperate_line"/>
                    <button className="login_btn">เข้าสู่ระบบ</button>
                    <div className="sperate_line"/>
                    <button className="sign_up_btn">สมัครสมาชิก</button>
                    
                </div>
            </div>

            <style jsx>{`
                .navigation ul{
                    display: ${hamburgerOpen ? 'inline' : 'none'};
                }
            `}
            </style>
            
        </>
    )
}

export default Navbar