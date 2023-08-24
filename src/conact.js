import React, { useState } from "react";
import Teleg from "./photos/telegr.png"
import Face from "./photos/face.png"
import Gmail from "./photos/gmail.png"

function Contact() {
  const [isBlockVisible, setIsBlockVisible] = useState(false);

  const handleDivClick = () => {
    setIsBlockVisible(!isBlockVisible);
  };

  const handleCloseClick = (event) => {
    event.stopPropagation();
    setIsBlockVisible(false);
  };

  return (
    <div className="serv_pos">
      <div className="position">
        <div onClick={handleDivClick} className="contact_button">
          CONTACT
        </div>
      </div>
      <div className={`block ${isBlockVisible ? "visible" : ""}`}>
        <div onClick={handleCloseClick} className="close-button"></div>
        <div>
        <a href="https://t.me/YuryVLa">  
        <img src={Teleg} alt="Telegram" className="teleg_photo" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100038842511488">
        <img src={Face} alt="Facebook" className="face_photo" />
        </a>
        <a href="mailto:yuriy.vlasov.1804@gmail.com">
        <img src={Gmail} alt="Gmail" className="gmail_photo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
