import "./Points.css";
/* import { PlayerColor } from "../App"; */
type PointsProps = {
    isGameOver: boolean;
    givePoints: (color: string) => void;
}

const Points = ({isGameOver,givePoints}:PointsProps) => {
    const randomColor = () => {
        const colors = ["blue", "red", "yellow"];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    return(
        <div className="points">
            <h2>Give points to any team!</h2>
            <div>
                <button disabled={isGameOver} onClick={givePoints("blue")}>Blue</button>
                <button disabled={isGameOver} onClick={givePoints("red")}>Red</button>
                <button disabled={isGameOver} onClick={givePoints("yellow")}>Yellow</button>
                <button disabled={isGameOver} onClick={givePoints(randomColor())}>Random</button>
            </div>
        </div>
    )
}
export default Points;