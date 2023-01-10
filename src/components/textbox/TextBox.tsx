import "./TextBox.css";

/* type TextBoxProps ={
    paragraph:[]
} */
const TextBox=(/* {paragraph}:TextBoxProps */)=>{
    return(
        <div className="text-box">
           <p>Here is my new awesome team game. Here you can add players and make them part of a team. Then you are able to give points to any team you like by pressing the buttons in the bottom. Each player in the team will then score point. If you can't decide on which is your favorite team then you can press the Random button to give to any team.</p>
           <p>The table in the middle should display who has the most points by sorting the table. Here you are also able to remove a player from the game if you want to</p>
           <p>Once a player has recieved 5 points then the game is ower and that person will be celebrated and you are able to play again. Try it out for yourself!</p>
        </div>
    )
}
export default TextBox;