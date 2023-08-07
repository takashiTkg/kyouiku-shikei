import muon from '../assets/muon_01sec.wav'
import { Dialogue } from "../dialogues";
type Props = {
  items: Dialogue[],
  audio: HTMLAudioElement,
}

export const Player = (props: Props) => {
  let playlist = [muon]
  const itemsToPlaylist = (items: Dialogue[]) => {
    playlist = []
    items.map(item => {
      playlist.push(item.soundFile)
    })
  }
  const play = () => {
    itemsToPlaylist(props.items)
    props.audio.src = playlist[0]
    props.audio.play()
    let index = 1
    props.audio.addEventListener('ended', function () {
      if (index < playlist.length) {
        props.audio.src = playlist[index];
        props.audio.play();
      }
      index++;
    })
  }
  return (
    <div className='w-full'>
      <button
        className="w-full hover:bg-transparent bg-red-500 hover:text-red-700 font-semibold text-white py-2 px-4 border hover:border-red-500 border-transparent rounded"
        onClick={play}
      >
        Play
      </button>
    </div>
  )
}