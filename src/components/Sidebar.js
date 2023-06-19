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
            </div>
        </>
    )
}

export default Sidebar