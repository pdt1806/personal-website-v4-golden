import useSound from "use-sound";
import { useGlobalContext } from "../contexts/global";
import { sfx, SoundName } from "./audio";

type SoundMapType = Record<SoundName, () => void>;

const soundMap: SoundMapType = Object.fromEntries(
  Object.entries(sfx).map(([key, _]) => [key, () => {}]),
) as SoundMapType;

export default function GlobalSounds() {
  const { sfxEnabled } = useGlobalContext();

  const soundHooks = Object.fromEntries(
    Object.entries(sfx).map(([key, src]) => [key, useSound(src, { volume: sfxEnabled ? 0.5 : 0 })[0]]), // volume 0-1
  ) as SoundMapType;

  Object.keys(soundMap).forEach((key) => {
    soundMap[key as SoundName] = soundHooks[key as SoundName];
  });

  return null;
}

export const playSound = (soundName: SoundName) => {
  if (soundMap[soundName]) soundMap[soundName]();
};
