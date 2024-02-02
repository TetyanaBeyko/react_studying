import { useState } from "react";

export default function Reduser_Component() {
  const [text, setText] = useState("");

  const [bookList, setBookList] = useState<string[]>([]);

  const readImputValue = (target: HTMLInputElement) => {
    setText(target.value);
  };

  const addName = () => {
    setBookList([...bookList, text]);
    setText("")
  };

  return (
    <div>
      <h1>Book List</h1>
      <input
        type="text"
        placeholder="Add book"
        value={text}
        onChange={(event) => readImputValue(event.target)}
      />
      <button type="button" onClick={addName}>
        Add
      </button>
      <ul>
        {bookList.map((bookName) => (
          <li>{bookName}</li>
        ))}
      </ul>
    </div>
  );
}

// interface Props {
//   number: number
//   y: number
// }

// function Number(props:Props) {
//   return <h1>{props.number}{props.y}</h1>;
// }

// export default function Reduser_Component() {
//   const number = 5;

//   return <Number number={number} y={8} />;
// }
