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
            <img src={photo} />
            <img src={`../img/${player.img}`} alt={player.title} />
            <h2>{player.title}</h2>
            <span>{player.price} </span>

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