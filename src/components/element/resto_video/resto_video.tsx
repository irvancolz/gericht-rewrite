"use client";
import React, { useRef, useState } from "react";
import style from "./resto_video.module.css";

export function RestoVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoPlayed, setVideoPlayed] = useState<boolean>(false);

  function playVideo() {
    videoRef.current?.play();
    setVideoPlayed(true);
  }

  function pauseVideo() {
    videoRef.current?.pause();
    setVideoPlayed(false);
  }

  function toggleVidePlay() {
    if (videoRef.current?.paused) {
      playVideo();
      return;
    }
    pauseVideo();
  }

  return (
    <div className={style.container}>
      <video
        ref={videoRef}
        muted
        onClick={toggleVidePlay}
        onEnded={() => setVideoPlayed(false)}
      >
        <source src="/assets/video/resto_view.mp4" type="video/mp4" />
        <source src="/assets/video/resto_view.webm" type="video/webm" />
        your browser did not support for webm / mp4 video
      </video>
      <button
        className={style.play_btn}
        onClick={toggleVidePlay}
        data-play={isVideoPlayed}
      ></button>
    </div>
  );
}
