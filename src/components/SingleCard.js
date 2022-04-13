// styles
import { useState } from "react";

// styles
import "./SingleCard.css";

export default function SingleCard({ card }) {
  const [show, setShow] = useState(false);

  return (
    <div className="card">
      {
        <div>
          <img src={card.src} alt="card front" className="front" />
          <img src="/img/cover.png" alt="card back" className="back" />
        </div>
      }
    </div>
  );
}
