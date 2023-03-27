import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import App from './App';
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const NoteApp = () => {
//   const [notes, setNotes] = useState([]);
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");

//   const addNote = (e) => {
//     e.preventDefault();
//     setNotes([
//       ...notes,
//       {
//         title,
//         body
//       },
//     ]);
//     setTitle("");
//     setBody("");
//   };

//   const removeNote = (title) => {
//     setNotes(notes.filter((note) => note.title !== title))
//   }

//   return (
//     <div>
//       <h1>Notes</h1>
//       {notes.map((note) => (
//         <div key={note.title}>
//           <h3>{note.title}</h3>
//           <h4>{note.body}</h4>
//           <button onClick ={() => removeNote(note.title)}>x</button>
//         </div>
//       ))}
//       <p>Add Note</p>
//       <form onSubmit={addNote}>
//         <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
//         <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
//         <button>add note</button>
//       </form>
//     </div>
//   );
// };

const App = (props) => {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState("");

  // const increment = () => {
  //   setCount(count + 1)
  // }

  return (
    <div>
      <p>
        The current {text || "count"} is {count}.
      </p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(props.count)}>Reset</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

App.defaultProps = {
  count: 0,
};

root.render(
  <React.StrictMode>
    <App count={0}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
