import "./Table.css";
import { Player } from "../../App";

type TableProps = {
    players: Player[];
}
const Table =({players}:TableProps)=>{
    return(
        <div id="table-container">
            <table>
                <thead>
                    <tr>
                        <th id="first-column">Name</th>
                        <th>Team</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player,index) => {
                        return (
                            <tr key={index}>
                                <td>{player.name}</td>
                                <td>{player.color}</td>
                                <td>{player.score}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        )
}
export default Table;