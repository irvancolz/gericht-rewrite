"use client";
import React, { ComponentProps, HTMLAttributes, useRef, useState } from "react";
import style from "./resto_video.module.css";

export type VideoSource = { src: string; type: string };

export type VideoProps = {
  content: VideoSource[];
  withToggle?: boolean;
} & Omit<ComponentProps<"video">, "content">;

export function Video({
  content,
  withToggle,
  className = "",
  ...rest
}: VideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoPlayed, setVideoPlayed] = useState<boolean>(!withToggle);

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
    <div className={`${style.container} ${className}`}>
      <video
        ref={videoRef}
        muted
        onClick={toggleVidePlay}
        onEnded={() => setVideoPlayed(false)}
        {...rest}
      >
        {content.map((vid, i) => {
          return <source key={i} src={vid.src} type={vid.type} />;
        })}
        your browser did not support for webm / mp4 video
      </video>
      {withToggle && (
        <button
          className={style.play_btn}
          onClick={toggleVidePlay}
          data-play={isVideoPlayed}
        ></button>
      )}
    </div>
  );
}
