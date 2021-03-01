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
      </div>
    </div>
  );
}

export default App;
