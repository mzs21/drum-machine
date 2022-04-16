import { useState } from "react";
import Footer from "./components/Footer";
import Pad from "./components/Pad";
import Volume from "./components/Volume";
import VolumeContext from "./contexts/VolumeContext";
import { IAudioClips } from "./interface/Interface";
import AudioClips from "./resources/AudioClips";


function App() {
  const [volume, setVolume] = useState<number>(10);

  const setVolumeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setVolume(event.target.valueAsNumber);

  return (
    <div className="container">
      <h2>Drum Machine</h2>
      <VolumeContext.Provider value={{ volume, setVolumeHandler }}>
        <div className="mini-container">
          {AudioClips.map(({ keyTrigger, url }: IAudioClips) => (
            <Pad key={Math.random()} keyTrigger={keyTrigger} url={url} />
          ))}
        </div>
        <Volume />
      </VolumeContext.Provider>
      <Footer/>
    </div>
  );
}

export default App;
