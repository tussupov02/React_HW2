import "./Win.css";
export default function Win({ children, activTitle, setWin }) {
  return (
    <div
      className={`win ${activTitle ? "active" : ""}`}
      onClick={() => setWin(false)}
    >
      <p className="winContent">{children}</p>
    </div>
  );
}
