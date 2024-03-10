import React from "react";

const Waveform = ({ currentTime, duration, containerRef }) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="grid grid-cols-12 content-center items-center">
      <div className="text-[#FFCAD4] opacity-85">{formatTime(currentTime)}</div>
      <div className="col-span-10 px-4">
        {!containerRef ? <div>loading...</div> : <div ref={containerRef}></div>}
      </div>
      <div className="text-[#FF407D]">{formatTime(duration)}</div>
    </div>
  );
};

export default Waveform;
