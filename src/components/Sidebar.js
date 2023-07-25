import "./Sidebar.css";
const Sidebar =()=>{
    return (
        <>
            <div className="sidebar_bg">
                <div className="discover_box">
                    <div className="discover_item">
                        <div className="discover_icon">icon</div>
                        <div className="discover_name">Discover</div>
                    </div>
                    <div className="discover_item">
                        <div className="discover_icon">icon</div>
                        <div className="discover_name">คลังเพลง</div>
                    </div>

                    <div className="discover_item">
                        <div className="discover_icon">icon</div>
                        <div className="discover_name">VIP</div>
                    </div>
                </div>
                <div className="break_line"/>
                <div className="download_box">
                    <img className="download_ads"></img>
                    <button className="download_btn">ดาวน์โหลดแอป JOOX</button>
                </div>
                <div className="break_line"/>
               
                <div className="discover_box">
                    <a className="title">Browse</a>
                    <div className="discover_item">
                        <div className="discover_icon">icon</div>
                        <div className="discover_name">Discover</div>
                    </div>
                    <div className="discover_item">
                        <div className="discover_icon">icon</div>
                        <div className="discover_name">คลังเพลง</div>
                    </div>

                    <div className="discover_item">
                        <div className="discover_icon">icon</div>
                        <div className="discover_name">VIP</div>
                    </div>
                </div>
                <div className="break_line"/>
                <div className="discover_box">
                    <a className="title">สำหรับผู้ที่ล็อกอิน</a>
                    <div className="discover_item">
                        <div className="discover_icon">icon</div>
                        <div className="discover_name">Discover</div>
                    </div>
                    <div className="discover_item">
                        <div className="discover_icon">icon</div>
                        <div className="discover_name">คลังเพลง</div>
                    </div>

                    <div className="discover_item">
                        <div className="discover_icon">icon</div>
                        <div className="discover_name">VIP</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar