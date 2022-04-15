import React, { useCallback, useEffect, useRef, useState } from "react";
import VolumeContext from "../contexts/VolumeContext";
import { IAudioClips } from "../interface/Interface";

const Pad = ({ url, keyTrigger }: IAudioClips) => {
  const { volume } = React.useContext(VolumeContext); // Using the VolumeContext for 'volume'

  const [active, setActive] = useState<boolean>(false); // To check which button is active

  let audioTag = useRef<HTMLAudioElement>(null!); // To store the audio tag

  const transition = () => {
    // To execute the transition when the button is clicked
    setTimeout(() => setActive(false), 200);
  };

  const playSound = useCallback(() => {
    // To play the sound when the button is clicked
    setActive(true);
    transition();
    audioTag.current.currentTime = 0;
    audioTag.current.play();
    audioTag.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // To play the sound when the matched key is pressed on the keyboard
      event.key.toUpperCase() === keyTrigger && playSound();
    };

    document.addEventListener("keydown", handleKeyPress); // To listen to the key press

    return () => {
      // componentWillUnmount
      document.removeEventListener("keydown", handleKeyPress); // To remove the event listener
    };
  }, [keyTrigger, playSound]); // componentDidUpdate

  return (
    <button onClick={playSound} className={`${active && "bg-sky-900"}`}>
      <audio src={url} ref={audioTag} />
      {keyTrigger}
    </button>
  );
};

export default Pad;
