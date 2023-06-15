import "./Footer.css"
import Play from "../img/play.svg"
import Disc from "../img/disc.svg"
import Star from "../img/star.svg"
import Share from "../img/share.svg"
import MiniHamburger from "./Mini_Hamburger"
import RadioBtn from "./RadioBtn"
import VolumeSet from "./VolumeSet"
import TimerSet from "./TimerSet"
const Footer = () => {
return (
    <>
        <div className="footer">
            <div className="disc">
                <img  className="disc_icon" src ={Disc}/>
            </div>
            <div className="bg">
                <div className="item_set">
                    <RadioBtn/>
                    <TimerSet/>
                    <VolumeSet/>
                    <div className="music_btn">
                        <img  className="music_icon" src ={Play} alt="เนื้อเพลง"/>
                    </div>
                    
                    <MiniHamburger/>
                    
                </div>
            </div>
           
        </div>
    </>
)
}

export default Footer