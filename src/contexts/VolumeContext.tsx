import React from "react";
import { IVolume } from "../interface/Interface";

const VolumeContext = React.createContext<IVolume>({volume: 1});

export default VolumeContext;
