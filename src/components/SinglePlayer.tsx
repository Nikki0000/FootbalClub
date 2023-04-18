import React, { FC, useState} from 'react';
import { AiFillEdit, AiFillDelete } from "react-icons/ai" 
import Player from '../models/Player';
import EditPlayerForm from './EditPlayerForm';
import photo from "../img/attack.png";



interface SinglePlayerProps {
    player: Player;
    updatePlayer: (newPlayer: Player) => void;
    deletePlayer: (id: number) => void;
}

const SinglePlayer: FC<SinglePlayerProps> = ({ player, updatePlayer, deletePlayer }) => {

    const [edit, setEdit] = useState<boolean>(false);

    const handleToggleEdit = () => {
        setEdit(!edit);
    }

    const handleDelete = () => {
        deletePlayer(player.id);
    }

    return (
        <div className="player">
            <img src="https://img.freepik.com/premium-vector/football-soccer-player-kicking-ball-isolated-vector-silhouette-football-defender-striker-or-goalkeeper_604083-134.jpghttps://img.freepik.com/premium-vector/football-soccer-player-kicking-ball-isolated-vector-silhouette-football-defender-striker-or-goalkeeper_604083-134.jpg" />
            {/* <img src={`../img/${player.img}`}/> */}
            
            <h2>{player.title}</h2>
            <span>{player.price} P</span>
            <h3>{player.img}</h3>

            <div className="player-controls">
                <AiFillEdit onClick={handleToggleEdit}/>
                <AiFillDelete onClick={handleDelete}/>
            </div>

            {edit
                ? <EditPlayerForm data={player} updatePlayer={updatePlayer} handleToggleEdit={handleToggleEdit} />
                : null
            }

        </div>
    )
}

export default SinglePlayer;