export interface IAudioClips {
  keyTrigger: string;
  url: string;
}

export interface IVolume {
  volume: number;
  setVolumeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
