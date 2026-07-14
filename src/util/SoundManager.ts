import useSound from "use-sound";
import { sfx } from "./audio";

type SoundName = keyof typeof sfx;

type SoundMapType = Record<SoundName, () => void>;

const soundMap: SoundMapType = Object.fromEntries(
  Object.entries(sfx).map(([key, _]) => [key, () => {}]),
) as SoundMapType;

export default function GlobalSounds() {
  const soundHooks = Object.fromEntries(
    Object.entries(sfx).map(([key, src]) => [key, useSound(src, { volume: 1 })[0]]), // volume 0-1
  ) as SoundMapType;

  Object.keys(soundMap).forEach((key) => {
    soundMap[key as SoundName] = soundHooks[key as SoundName];
  });

  return null;
}

export const playSound = (soundName: SoundName) => {
  if (soundMap[soundName]) soundMap[soundName]();
};
