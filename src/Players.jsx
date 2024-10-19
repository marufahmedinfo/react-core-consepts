import { useState } from "react"

export default function Players(){
    const [player, setPlayer] = useState(11);
    const addPlayer = () => {
        // const newP = player + 1;
        // setPlayer(newP)

        setPlayer(player + 1)
    }
    const removePlayer = () => {
        // const newP = player - 1;
        // setPlayer(newP)

        setPlayer(player - 1)
    }
    return (
        <div className="styling1">
            <h3>Player : {player}</h3>
            <button className='add' onClick={addPlayer}>Add</button>
            <button className='reduce' onClick={removePlayer}>Remove</button>

        </div>
    )
}