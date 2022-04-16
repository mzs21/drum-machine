import { useContext } from "react";
import VolumeContext from "../contexts/VolumeContext";

const Volume = () => {
  const { volume, setVolumeHandler } = useContext(VolumeContext);

  return (
    <div className="volume">
      <h2>Volume</h2>
      <input
        type="range"
        onChange={setVolumeHandler}
        value={volume}
        min="0"
        max="1"
        step="0.01"
      />
    </div>
  );
};

export default Volume;
