import { useState } from "react";

const Volume = () => {
  const [volume, setVolume] = useState<number>(1);

  const setVolumeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setVolume(parseFloat(event.target.value));

  return (
    <div className="volume">
      <h2>Volume</h2>
      <input
        type="range"
        onChange={setVolumeHandler}
        value={volume}
        min="1"
        max="10"
        step="0.01"
      />
    </div>
  );
};

export default Volume;
