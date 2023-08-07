import { Dialogue } from "../dialogues";
type Props = {
  items: Dialogue[]
}

export const Lists: React.FC<Props> = (props) => {
  return (
    <div className="mt-4 flex flex-wrap">
      {
        props.items.map((item, i) => {
          return (
            <div key={i} className="py-2 px-1 font-bold">
              {item.text}
            </div>
          )
        })
      }
    </div>
  )
}