import Pad from "./components/Pad";
import Volume from "./components/Volume";
import VolumeContext from "./contexts/VolumeContext";
import { IAudioClips } from "./interface/Interface";
import AudioClips from "./resources/AudioClips";

function App() {
  return (
    <div className="container">
      <h2>Drum Machine</h2>
      <div className="mini-container">
        <VolumeContext.Provider value={{ volume: 1 }}>
          {AudioClips.map(({ keyTrigger, url }: IAudioClips) => (
            <Pad key={Math.random()} keyTrigger={keyTrigger} url={url} />
          ))}
        </VolumeContext.Provider>
      </div>
      <Volume />
    </div>
  );
}

export default App;
