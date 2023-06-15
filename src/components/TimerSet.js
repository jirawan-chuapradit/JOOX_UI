import Star from "../img/star.svg";
import Share from "../img/share.svg";
import "./TimerSet.css";

const TimerSet = () => {
  return (
    <>
      <div className="timer_set">
        <div className="timer_line_1">
          <div className="music_name">
            <a className="music_name_th">ไม่เป็นรอง</a>
            <a className="music_name_en">Cocktail</a>
          </div>

          <div className="favorite">
            <img className="star_icon" src={Star} alt="เนื้อเพลง" />
            <img className="share_icon" src={Share} alt="เนื้อเพลง" />
          </div>
        </div>
        <div className="timer_line_2">
          <a className="timer tm_start">00:00</a>
          <div className="track" />
          <a className="timer tm_end">00:00</a>
        </div>
      </div>
    </>
  );
};

export default TimerSet;
