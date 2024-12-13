import React, { useState } from "react";
import "./component.css";

function Popup({ content, buttonName }) {
  const [isPopUpVisible, setPopUpVisible] = useState(false);

  const triggerPopup = () => {
    setPopUpVisible(!isPopUpVisible);
  };

  return (
    <>
      {isPopUpVisible && (
        <div className="popupButton">
          {/* ポップアップの中身 */}
          {content}
          <button onClick={triggerPopup}>閉じる</button>
        </div>
      )}

      <div className="PopupTriggerButton">
        <button onClick={triggerPopup}>{buttonName}</button>
      </div>
    </>
  );
}

export default Popup;
