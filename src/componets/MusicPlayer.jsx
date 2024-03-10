import React, { useCallback, useRef, useState } from "react";

import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

import { useWavesurfer } from "@wavesurfer/react";
import Waveform from "./Waveform";

const MusicPlayer = () => {
  const contianerRef = useRef(null);
  const [urlIndex, setUrlIndex] = useState(0);
  const [songDuration, setSongDuration] = useState(0);

  const audioUrls = ["1.mp3", "1.mp3"];

  const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
    container: contianerRef,
    backend: "WebAudio",
    cursorColor: "#transparent",
    barWidth: 10,
    barRadius: 10,
    barGap: 2,
    height: 80,
    waveColor: "#FFCAD4",
    progressColor: "#FF407D",
    cursorWidth: 1,
    url: audioUrls[urlIndex],
  });

  const [currentSong] = useState({
    title: "Music title",
    artist: "artist",
    album: "Album",
    coverArt: "music.png",
  });

  wavesurfer &&
    wavesurfer.on("ready", (newDuration) => setSongDuration(newDuration));

  const handlePrevious = () => {
    setUrlIndex((currentUrlIndex) => currentUrlIndex - 1);
  };
  const handlePlayPause = useCallback(() => {
    wavesurfer && wavesurfer.playPause();
  }, [wavesurfer]);
  const handleNext = () => {
    setUrlIndex((currentUrlIndex) => currentUrlIndex + 1);
  };

  return (
    <div className="grid place-items-center w-screen h-lvh p-4 bg-gradient-to-br from-[#FFCAD4] to-[#FF407D] text-[#1B3C73]">
      <section className="grid gap-3 w-[380px] grid-row-5 bg-white bg-opacity-20 rounded-t-full shadow-lg">
        <img
          src={currentSong.coverArt}
          alt="Music cover"
          className="w-full row-span-3 rounded-s-full rounded-t-full"
        />
        <div className="p-4 text-xl font-bold">{currentSong.title}</div>
        <div className="p-4 text-sm">{currentSong.artist}</div>
        <div className="p-4 text-sm">{currentSong.artist}</div>
        <div className="p-4 text-sm italic">{currentSong.album}</div>
        <div className="p-4">
          <Waveform
            currentTime={currentTime}
            duration={songDuration}
            containerRef={contianerRef}
          />
        </div>

        <div className="p-4 grid grid-cols-3 gap-4 mb-4 items-center justify-items-center">
          <button
            className="flex items-center justify-center"
            onClick={handlePrevious}
          >
            <FaBackward />
          </button>
          <button
            className="flex items-center justify-center"
            onClick={handlePlayPause}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          <button
            className="flex items-center justify-center"
            onClick={handleNext}
          >
            <FaForward />
          </button>
        </div>
      </section>
    </div>
  );
};

export default MusicPlayer;
