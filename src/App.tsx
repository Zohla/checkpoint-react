import React, { useState } from 'react';
import Header from './components/header/Header';
import TextBox from './components/textbox/TextBox';
import NewPlayer from './components/new_player/NewPlayer';
import Table from './components/table/Table';
import Points from './components/points/Points';
import './App.css';


export type Player = {
  name: string;
  color: string;
  score: number;
};

export type PlayerColor = "blue" | "red" | "yellow";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [playerColor, setPlayerColor] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [players, setPlayers] = useState<Player[]>([]);
  
  function addPlayer(){
    console.log("add player");
    const player:Player[] = [
      {
        name: inputValue,
        color: playerColor,
        score: 0
      }
    ];
    setPlayers([...players, ...player]);
  }

  function givePoints(color: string){
    console.log("give points");
    players.map((player) => {
      if(player.color === color){
        player.score += 1;
      }}
    );
  }
  return (
    <div className="App">
      <div id='game-container'>
        <Header text="Welcome to my awesome team game!"/>
        <TextBox/>
        <NewPlayer inputValue={inputValue} setInputValue ={setInputValue} playerColor={playerColor} setPlayerColor={setPlayerColor} addPlayer={addPlayer} />
        <Table players={players}/>
        <Points isGameOver={isGameOver} givePoints={givePoints}/>

      </div>
      
    </div>
  );
}

export default App;
