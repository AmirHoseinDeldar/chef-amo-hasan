import React, { useRef, useState } from "react";
import { meal } from "../../constants";
import { BsPauseFill, BsFillPlayFill } from "react-icons/bs";
import "./Intro.css";

const Intro = () => {
  const [playvideo, setPlayVideo] = useState(false);
  const videoRef = useRef();
  return (
    <div className="app__video">
      <video
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        ref={videoRef}
      ></video>
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo(!playvideo);
            if (playvideo) {
              videoRef.current.pause();
            } else {
              videoRef.current.play();
            }
          }}
        >
          {playvideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
