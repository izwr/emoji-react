import EmojiPicker from "emoji-picker-react";
import React, { useState } from "react";
import { Tooltip } from "react-tippy";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  const [openState, setOpenState] = useState(false);

  const [messages, setMessages] = useState([]);

  const convertFromUnified = (unified) => {
    const arr = unified.split("-").map((sec) => "0x" + sec);
    return arr;
  };

  const handleEmojiClick = (event, emoji) => {
    setInputValue(inputValue + emoji.emoji);
    console.log(String.fromCodePoint(...convertFromUnified(emoji.unified)));
  };

  const handleSendMessage = () => {
    setMessages([...messages, inputValue]);
    setInputValue("");
  };

  return (
    <div className="App">
      <div className="mt-5">
        <p>
          Here is an input, and click on that 😀 button to add the emoji, if you
          see a black backgound below the emoji picker dont worry that can be
          fixed by editing{" "}
          <span className="text-primary">
            <u>tippy.css</u>
          </span>
        </p>
      </div>
      <hr />
      <div className="mt-5">
        <input
          type="text"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <Tooltip
          sticky={true}
          trigger="click"
          html={<EmojiPicker onEmojiClick={handleEmojiClick} />}
          interactive
          theme="transparent"
          disableSkinTonePicker
        >
          <button className="button">😀</button>
        </Tooltip>
        <button className="button py-1" onClick={handleSendMessage}>
          Send
        </button>
      </div>
      <hr />
      <div className="container w-50">
        <h2>Messages here</h2>
        {messages.map((message, index) => (
          <div className="card my-3 py-3" key={index}>
            {message}
          </div>
        ))}
      </div>
      <hr />
      <div>
        <ul class="list-group w-50 m-auto">
          <li class="list-group-item active">
            Instructions to run this project:
          </li>
          <li class="list-group-item">
            Clone this project from{" "}
            <a
              href="https://github.com/mechanical-coder/emoji-react"
              target="_blank"
            >
              github
            </a>
          </li>
          <li class="list-group-item">
            Inside the project repository run &nbsp; <code>npm install</code>
          </li>
          <li class="list-group-item">
            Then run &nbsp; <code>npm start</code>
          </li>
          <li class="list-group-item">
            Click{" "}
            <a href="http://localhost:3000" target="_blank">
              here
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
