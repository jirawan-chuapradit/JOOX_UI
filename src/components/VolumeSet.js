import Speaker from "../img/speaker.svg"
import "./VolumeSet.css"

const VolumeSet=() => {
    return (
        <>
            <div className="volume_set">
                <img  className="speaker_icon" src ={Speaker}/>
                <div className="track_line"/>
            </div>
        </>
    )
}

export default VolumeSet