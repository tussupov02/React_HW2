export default function Button({ onClick, buttonValue, classNameButton, idButton }) {
  return (
    <button className={classNameButton} id={idButton} onClick={onClick}>
      {buttonValue}
    </button>
  );
}
