import React from "react";
import { IVolume } from "../interface/Interface";

const VolumeContext = React.createContext<IVolume>({
  volume: 1,
  setVolumeHandler: (event: React.ChangeEvent<HTMLInputElement>) => {},
});

export default VolumeContext;
