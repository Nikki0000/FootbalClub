import React, { FC} from 'react';
import Player from '../models/Player';
import SinglePlayer from './SinglePlayer';


interface DisplayClubProps {
    clubList: Player[];
    updatePlayer: (newPlayer: Player) => void;
    deletePlayer: (id: number) => void;
}

const DisplayClub: FC<DisplayClubProps> = ({ clubList, updatePlayer, deletePlayer }) => {
    return (
        <div className="container">
            {clubList.map((player) => {
                return <SinglePlayer key={player.id} player={player} updatePlayer={updatePlayer} deletePlayer={deletePlayer}/>
            })}

        </div>
    )
}

export default DisplayClub;