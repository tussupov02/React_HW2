import "./PlayField.css";

export default function PlayField({
  playerName,
  resultScore,
  currentTitle,
  currentPoints,
  className,
}) {
  return (
    <div className={className}>
      <div className="player">
        <p className="playerName">{playerName}</p>
        <p className="resultScore">{resultScore}</p>
      </div>
      <div className="current">
        <p className="currentTitle">{currentTitle}</p>
        <p className="currentPoints">{currentPoints}</p>
      </div>
    </div>
  );
}
