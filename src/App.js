import EmojiPicker from "emoji-picker-react";
import React, { useState } from "react";
import { Tooltip } from "react-tippy";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  const [openState, setOpenState] = useState(false);

  const convertFromUnified = (unified) => {
    const arr = unified.split("-").map((sec) => "0x" + sec);
    return arr;
  };

  const handleEmojiClick = (event, emoji) => {
    setInputValue(inputValue + emoji.emoji);
    console.log(String.fromCodePoint(...convertFromUnified(emoji.unified)));
  };

  return (
    <div className="App">
      <Tooltip
        sticky={true}
        trigger="click"
        html={<EmojiPicker onEmojiClick={handleEmojiClick} />}
        interactive
        theme="transparent"
      >
        <button>Emoji</button>
      </Tooltip>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
    </div>
  );
}

export default App;
