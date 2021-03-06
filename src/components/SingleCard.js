// styles
import { useState } from "react";

// styles
import "./SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} alt="card front" className="front" />
        <img
          src="/img/cover.png"
          alt="card back"
          className="back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
