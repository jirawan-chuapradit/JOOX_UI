import "./RadioBtn.css";
import Shuffle from "../img/play/shuffle.svg";
import PlayCircle from "../img/play/play-circle.svg";
import Next from "../img/play/next.svg";
import Back from "../img/play/back.svg";
import Repeat from "../img/play/repeat.svg";
const RadioBtn = () => {
  return (
    <>
      <div className="radio_btn">
        <div className="icon_container">
          <img className="shuffle_icon" src={Shuffle} />
        </div>
        <div className="icon_container">
          <img className="back_icon" src={Back} />
        </div>
        <div className="icon_container play_icon_container">
          <img className="play_icon" src={PlayCircle} />
        </div>
        <div className="icon_container">
          <img className="next_icon" src={Next} />
        </div>
        <div className="icon_container">
          <img className="repeat_icon" src={Repeat} />
        </div>
      </div>
    </>
  );
};

export default RadioBtn;
