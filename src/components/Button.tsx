type Props = {
  text: string;
  onClickFunc: () => void;
}

export const Button: React.FC<Props> = (props) => {
  return (
    <button
      className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
      onClick={props.onClickFunc}
    >
      {props.text}
    </button>
  )
}