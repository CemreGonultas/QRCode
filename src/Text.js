import { useEffect, useState } from "react";
import "./App.css";

function Text() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");

  // Changing the URL only when the user
  // changes the input
  useEffect(() => {
    setQrCode(
      `http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${size}x${size}&bgcolor=${bgColor}`
    );
  }, [word, size, bgColor]);

  // Updating the input word when user
  // click on the generate button
  function handleClick() {
    setWord(temp);
  }

  return (
    <div className="grnd-clr">
      <label className="icerik">Enter Content</label>
      <div className="div-input">
        <input
          type="text"
          onChange={(e) => {
            setTemp(e.target.value);
          }}
          placeholder="Your Text"
          className="input"
        />
      </div>
      <button className="tikla" onClick={handleClick}>
        Create QRCode
      </button>

      <div className="grnd-clr2">
        <img src={qrCode} alt="" className="imgurl" />
      </div>
    </div>
  );
}

export default Text;
