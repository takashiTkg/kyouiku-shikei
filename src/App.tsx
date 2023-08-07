import { useState, useEffect } from 'react'
import { Button } from './components/Button'
import { Lists } from './components/Lists'
import { Player } from "./components/Player";
import { Dialogue, dialogues } from "./dialogues"
import muon from './assets/muon_01sec.wav'
import { Description } from './components/Description'

function App() {
  const [items, setItems] = useState([dialogues[0]])
  const audio = new Audio()
  const addItems = (item: Dialogue) => {
    setItems([...items, item])
  }
  const clearItems = () => {
    setItems([])
  }
  // ページ読み込み時に無音を再生(音声が途中から再生される現象の対策)
  useEffect(() => {
    audio.src = muon
    audio.play()
  }, [])
  return (
    <div className="container mx-auto my-4 px-4 max-w-xl">
      <div className='grid grid-cols-2 gap-2'>
        {dialogues.map((item, i) =>
          <Button key={i} text={item.text} onClickFunc={() => addItems(item)} />
        )}
      </div>
      <button
        className='w-full mt-2 hover:bg-transparent bg-blue-500 hover:text-blue-700 font-semibold text-white py-2 px-4 border hover:border-blue-500 border-transparent rounded'
        onClick={clearItems}
      >
        クリア
      </button>
      <Lists items={items} />
      <Player items={items} audio={audio} />
      <Description />
    </div>
  )
}

export default App
