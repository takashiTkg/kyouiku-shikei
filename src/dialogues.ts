import kyouiku_voice from './assets/kyouiku.wav'
import shikei_voice from './assets/shikei.wav'

export type Dialogue = {
  text: string;
  soundFile: string;
}

const kyouiku: Dialogue = {
  text:"教育",
  soundFile: kyouiku_voice,
}
const shikei: Dialogue = {
  text:"死刑",
  soundFile: shikei_voice,
}


export const dialogues: Dialogue[] = [
  kyouiku, shikei,
]