import "./NewPlayer.css"
import Input from "../input/Input";
import Select from "../select/Select";


type NewPlayerProps = {
    inputValue: string;
    setInputValue: (value: string) => void;
    playerColor: string;
    setPlayerColor: (value: string) => void;
    addPlayer: ()=>void;
}

const NewPlayer =({inputValue,playerColor,setPlayerColor,setInputValue,addPlayer}:NewPlayerProps)=>{
    return(
        <div id="newplayer-container">
            <h2>Add a new player</h2>
            <Input labelText="Player Name" type="text" id="player-name" value={inputValue} setValue={(e)=>{setInputValue(e)}}/>
            <div>
                <Select  
                value={playerColor}
                options={["blue", "red", "yellow"]}
                setValue={(e) => setPlayerColor(e)}  
                />
            </div>
            <div>
                <button onClick={addPlayer}>Add Player</button>
            </div>
        </div>
    )
}
export default NewPlayer;