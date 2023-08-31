import PlayField from "./components/PlayField/PlayField";
import "./App.css";
import Button from "./components/Button/Button";
import { useEffect, useState } from "react";
import Win from "./components/Win/Win";
import {
  BsFillDice1Fill,
  BsFillDice2Fill,
  BsFillDice3Fill,
  BsFillDice4Fill,
  BsFillDice5Fill,
  BsFillDice6Fill,
} from "react-icons/bs";

function App() {
  const [useCurrOne, lastuseCurrOne] = useState(0);
  const [useCurrTwo, lastuseCurrTwo] = useState(0);
  const [useCurrResultOne, lastuseResultOne] = useState(0);
  const [useCurrResultTwo, lastuseResultTwo] = useState(0);
  const [usePlay, lastusePlay] = useState(false);
  const [win, setWin]= useState(false)
  const [winName, setWinName]= useState('')
  const [randomDice, setRandomDice] = useState(null);
  const diceIcons = [
    <BsFillDice1Fill />,
    <BsFillDice2Fill />,
    <BsFillDice3Fill />,
    <BsFillDice4Fill />,
    <BsFillDice5Fill />,
    <BsFillDice6Fill />,
  ];



  useEffect(()=>{
    if(useCurrOne>=100){
      setWin(true)
      setWinName("WIN NUMBER 1")
    }else if(useCurrTwo>=100){
      setWin(true)
      setWinName("WIN NUMBER 2")
    }
  }, [useCurrOne, useCurrTwo])


  const roll = () => {
    const first = Math.floor(Math.random() * 6 + 1);
    if (!usePlay) {
      if (first > 1) {
        setRandomDice(first)
        lastuseResultOne(useCurrResultOne + first);
      } else {
        setRandomDice(first)
        lastusePlay(true);
        lastuseResultOne(0);
      }
    } else {
      if (first > 1) {
        setRandomDice(first)
        lastuseResultTwo(useCurrResultTwo + first);
      } else {
        setRandomDice(first)
        lastusePlay(false);
        lastuseResultTwo(0);
      }
    }
  };
  const leave = () => {
    if (!usePlay) {
      lastuseCurrOne(useCurrResultOne + useCurrOne);
      lastuseResultOne(0);
      lastusePlay(true);
    } else {
      lastuseCurrTwo(useCurrResultTwo + useCurrTwo);
      lastuseResultTwo(0);
      lastusePlay(false);
    }
  };

  const newGame =()=>{
    lastuseResultTwo(0)
    lastuseResultOne(0)
    lastuseCurrTwo(0)
    lastuseCurrOne(0)
    setWin(false)
  }
  return (
    
    <div className="App">
      <Win activTitle={win} setWin={()=>newGame()} children={winName}></Win>
      <div className="main">
        <PlayField
          className={` playField ${usePlay ? '' : "active"}`}
          playerName="NUMBER 1"
          resultScore={useCurrOne}
          currentTitle="current POINTS"
          currentPoints={useCurrResultOne}
        />
        <div className="button__div">
          <Button idButton="new__game" classNameButton={`${win ? '' : "active"}`} buttonValue="🐷 NEW GAME" onClick={newGame} />
          {randomDice && diceIcons[randomDice - 1]}
          <Button idButton="roll__button" classNameButton={`${win ? '' : "active"}`} buttonValue="🎲 roll the dice" onClick={roll} />
          <Button idButton="leave__button" classNameButton={`${win ? '' : "active"}`} buttonValue="👌 Leave" onClick={leave} />
        </div>
        <PlayField
          className={`playField ${usePlay ? "active" : ''}`}
          playerName="NUMBER 2"
          resultScore={useCurrTwo}
          currentTitle="current POINTS"
          currentPoints={useCurrResultTwo}
        />
      </div>
    </div>
  );
}

export default App;
