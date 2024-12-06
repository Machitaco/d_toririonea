import React, { useState } from "react";
import "./component.css";

function Popup() {
  const [isPopUpVisible, setPopUpVisible] = useState(false);

  const triggerPopup = () => {
    setPopUpVisible(!isPopUpVisible);
  };

  return (
    <div>
      <button onClick={triggerPopup}>How to play</button>

      {isPopUpVisible && (
        <div className="popupButton">
          {/* ポップアップの中身 */}
          <p>How To Play</p>
          <p>ディズニーのトイレについて答える3択クイズです。</p>
          <p>様々なシチュエーション、形式の問題に答えて</p>
          <p>トイレに関する知識をムキムキつけていきましょう。</p>
          <p>未来のカリスマトイレガイドはあなたです。</p>

          <button onClick={triggerPopup}>閉じる</button>
        </div>
      )}
    </div>
  );
}

export default Popup;
