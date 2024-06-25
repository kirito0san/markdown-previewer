import "./App.css";
import React, { useState } from "react";
import { marked } from "marked";
import { useLocalstorage } from "./hooks/useLocalstorage";
import Doc from "./components/doc";
import Tabs from "./components/tabs";
const App = () => {
  const [code, setCode] = useState(localStorage.getItem("code") || "## Hello");
  const [compiled, setCompiled] = useState(
    localStorage.getItem("compiled") || '<h2 id="hello">Hello</h2>'
  );
  const [hide, hidePreview] = useState("markdown");
  const [selectedId, setSelectedId] = useState(0);
  // function to switch between buttons to show && to change bg color of selected button

  const cilckedBtn = (e, i) => {
    setSelectedId(i);
    switch (e.target.innerHTML) {
      case "MarkDown":
        hidePreview("markdown");
        break;
      case "Preview":
        hidePreview("preview");
        break;
      case "doc":
        hidePreview("doc");
        break;
      default:
        break;
    }
  };

  // array of buttons to make map on 
  const btns = ["MarkDown", "Preview", "doc"];

  const handleChange = (e) => {
    setCode(e.target.value);
    setCompiled(marked.parse(e.target.value));
  };

  const Localstorage = useLocalstorage(code, compiled);

  return (
    <>
      <h1>MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          {btns &&
            btns.map((e, i) => (
              <button
                className={selectedId === i ? "btn" : ""}
                key={i}
                onClick={(e) => cilckedBtn(e, i)}
              >
                {e}
              </button>
            ))}
        </div>
        {hide === "markdown" && <Tabs code={code} handleChange={handleChange} />}
        {hide === "preview" && <Tabs code={compiled} />}
        {hide === "doc" && <Doc />}
      </div>
    </>
  );
};

export default App;
