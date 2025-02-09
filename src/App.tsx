import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure, Alex?",
      "Really sure?",
      "100% sure?",
      "Are you absolutely sure?",
      "Are you absolutely absolutely sure?",
      "I'm gonna cry...",
      "Alex!!",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bear kissing"
            src="https://i.pinimg.com/originals/af/3f/66/af3f66c717a59ff330dae783025da0f2.gif"
          <div className="text-container">Yay!!!</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            style={{ width: "400x", height: "240px" }}
            alt="bear hugging"
            src="https://i.pinimg.com/originals/8a/c5/ad/8ac5ada8524d767b77d3d54239773e48.gif"
          />
          <h1 className="text-container">Will you be my Valentine? </h1>
          <div>
            <button
              className="yes-button"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>

            <button className="no-button" onClick={handleNoClick}>
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
