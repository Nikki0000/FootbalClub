import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import './style.css'
import Player from '../models/Player';

interface EditPlayerFormProps {
    data: Player;
    updatePlayer: (newPlayer: Player) => void;
    handleToggleEdit: () => void;
}


const EditPlayerForm: FC<EditPlayerFormProps> = ({data, updatePlayer, handleToggleEdit}) => {

    const [ editPlayer, setEditPlayer] = useState<Player>(data);


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        const { name, value} = e.target;

        setEditPlayer({
            ...editPlayer,
            [name]: value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const {title, price, img} = editPlayer;

        if(title && price && img) {
            updatePlayer(editPlayer);
            handleToggleEdit();
        }
    }


    return (
        <form onSubmit={handleSubmit} className="edit-form">
            <input className="name"
                name="title"
                type="text"
                placeholder='Имя игрока'
                onChange={handleChange}
                value={editPlayer.title}
            />
            <input className='price'
                name="price"
                type="text"
                placeholder='Стоимость игрока'
                onChange={handleChange}
                value={editPlayer.price}
            />
            <input className='position'
                name="img"
                type="text"
                placeholder='Позиция игрока'
                onChange={handleChange}
                value={editPlayer.img}
            />
            <button type="submit">
                + Подтвердить
            </button>
        </form>
    )
}

export default EditPlayerForm;