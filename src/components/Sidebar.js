import "./Sidebar.css";

import JsxCD from  "../img/jsx_cd.png";
import Music from  "../img/music.png";
import Diamond from  "../img/diamond.png";


import User from  "../img/browse/user.png";
import Album from  "../img/browse/album.png";
import PlayList from  "../img/browse/playlist.png";
import BarChrt from  "../img/browse/bar-chart.png";
import Radio from  "../img/browse/radio.png";
import Video from  "../img/browse/video.png";

import Facebook from  "../img/social/facebook.png";
import IG from  "../img/social/instagram.png";
import Twitter from  "../img/social/twitter.png";
import Youtube from  "../img/social/youtube.png";


import * as React from 'react';
const Sidebar = () => {
    const [open, setOpen] = React.useState(false)

    const handleOpen = () => {
        setOpen(!open);
      };
  return (
    <>
      <div className="sidebar_bg">
        <div className="jsx_box">
          <div className="jsx_item">
          <img className="discover_icon_jsx" src={JsxCD} />
            <div className="discover_name">Discover</div>
          </div>
          <div className="jsx_item">
          <img className="discover_icon_jsx" src={Music} />
            <div className="discover_name">คลังเพลง</div>
          </div>

          <div className="jsx_item">
            <img className="discover_icon_jsx" src={Diamond} />
            <div className="discover_name">VIP</div>
          </div>
        </div>
        <div className="break_line" />
        <div className="download_box">
          <img className="download_ads"></img>
          <button className="download_btn">ดาวน์โหลดแอป JOOX</button>
        </div>
        <div className="break_line" />

        <div className="browse_box">
          <div className="jsx_browse">
            <a className="title_en">Browse</a>
            <div className="jsx_item">
              <img className="discover_icon" src={User} />
              <div className="discover_name">ศิลปิน</div>
            </div>
            <div className="jsx_item">
              <img className="discover_icon" src={Album} />
              <div className="discover_name">อัลบัม</div>
            </div>

            <div className="jsx_item">
              <img className="discover_icon" src={PlayList} />
              <div className="discover_name">เพลย์ลิสต์</div>
            </div>
            <div className="jsx_item">
              <img className="discover_icon" src={BarChrt} />
              <div className="discover_name">ชาร์ตเพลง</div>
            </div>
            <div className="jsx_item">
              <img className="discover_icon" src={Radio} />
              <div className="discover_name">เรดิโอ</div>
            </div>

            <div className="jsx_item">
              <img className="discover_icon" src={Video} />
              <div className="discover_name">วีดีโอ</div>
            </div>
          </div>
        </div>
        <div className="break_line" />

        <div className="jsx_box">
          <a className="title__th">สำหรับผู้ที่ล็อกอิน</a>
          <div className="jsx_item">
            <div className="desc_item">- สร้างเพลย์ลิสต์ส่วนตัว</div>
          </div>
          <div className="jsx_item">
            <div className="desc_item">- เชื่อมต่อเพลย์ลิสต์กับแอป JOOX</div>
          </div>
          <div className="jsx_item">
            <div className="desc_item">- ไม่มีโฆษณารบกวน</div>
          </div>

          <div className="registered_box">
            <button className="registered_btn">เข้าสู่ระบบ</button>
          </div>

          <div className="jsx_menu">
            <a className="menu__th">ดาวน์โหลด</a>
            <button className="lang_btn" onClick={handleOpen}>
              ภาษา/Lang
              <i class="fa fa-caret-down"></i>
            </button>
            {open ? ( <div className="lang_dropdown_container">
              <a className="lang_item" href="#">ไทย</a>
              <a className="lang_item" href="#">English</a>
            </div>): null}
            
           
            <a className="menu__th">คำถามที่พบบ่อย</a>
            <a className="menu__th">ติดต่อเรา</a>
            <a className="menu__th">แนะนำ ติ-ชม</a>
          </div>

          <div className="social_media">
            <img className="social_media_icon" src={Facebook} />
            <img className="social_media_icon" src={IG} />
            <img className="social_media_icon" src={Twitter} />
            <img className="social_media_icon" src={Youtube} />
          </div>
        </div>
        <div className="break_line" />
        <div className="jsx_box">
          <div className="jsx_term">
            <a>ข้อตกลงการใช้งาน</a>
            <a>ข้อตกลงของผู้ใช้บริการ JOOX</a>
            <a>ข้อตกลงความเป็นส่วนตัว</a>
            <a>นโยบายคุกกี้</a>
            <a>ข้อกำหนดในการลบเพลง</a>
          </div>
          <div className="jsx_copy_right">
            <a>© 2011 - 2023 Tencent.</a>
            <a>All Rights Reserved</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
