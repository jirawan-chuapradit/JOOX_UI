import "./Sidebar.css";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar_bg">
        <div className="jsx_box">
          <div className="jsx_item">
            <div className="discover_icon">icon</div>
            <div className="discover_name">Discover</div>
          </div>
          <div className="jsx_item">
            <div className="discover_icon">icon</div>
            <div className="discover_name">คลังเพลง</div>
          </div>

          <div className="jsx_item">
            <div className="discover_icon">icon</div>
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
          <a className="title_en">Browse</a>
          <div className="jsx_item">
            <div className="discover_icon">icon</div>
            <div className="discover_name">Discover</div>
          </div>
          <div className="jsx_item">
            <div className="discover_icon">icon</div>
            <div className="discover_name">คลังเพลง</div>
          </div>

          <div className="jsx_item">
            <div className="discover_icon">icon</div>
            <div className="discover_name">VIP</div>
          </div>
          <div className="jsx_item">
            <div className="discover_icon">icon</div>
            <div className="discover_name">VIP</div>
          </div>
          <div className="jsx_item">
            <div className="discover_icon">icon</div>
            <div className="discover_name">VIP</div>
          </div>

          <div className="jsx_item">
            <div className="discover_icon">icon</div>
            <div className="discover_name">VIP</div>
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
            <a className="menu__th"> ภาษา/Lang.</a>
            <a className="menu__th">คำถามที่พบบ่อย</a>
            <a className="menu__th">ติดต่อเรา</a>
            <a className="menu__th">แนะนำ ติ-ชม</a>
          </div>

          <div className="social_media">
            <div className="social_media_icon">icon</div>
            <div className="social_media_icon">icon</div>
            <div className="social_media_icon">icon</div>
            <div className="social_media_icon">icon</div>
            <div className="social_media_icon">icon</div>
          </div>
        </div>
        <div className="break_line" />
        <div className="jsx_box">
            
        </div>
      </div>
    </>
  );
};

export default Sidebar;
