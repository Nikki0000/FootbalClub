import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import './style.css'
import Player from '../models/Player';

interface AddClubFormProps {
    addPlayer: (newPlayer: Player) => void;
}

const initState = {
    title: '',
    price: '',
    img: ''
}


const AddClubForm: FC<AddClubFormProps> = ({addPlayer}) => {

    const [newClub, setNewClub] = useState<{title: string, price: string, img: string}>(initState);


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        const { name, value} = e.target;

        setNewClub({
            ...newClub,
            [name]: value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const {title, price, img} = newClub;

        if(title && price && img) {
            addPlayer({
                title,
                img,
                price: Number(price),
                id: Date.now()
            });
            setNewClub(initState);
        }
    }


    return (
        <form onSubmit={handleSubmit} className="allForm">
            <input className="name1"
                name="title"
                type="text"
                placeholder='Имя игрока'
                onChange={handleChange}
                value={newClub.title}
            />
            <input className='price1'
                name="price"
                type="text"
                placeholder='Стоимость игрока'
                onChange={handleChange}
                value={newClub.price}
            />
            <input className='position1'
                name="img"
                type="text"
                placeholder='Позиция игрока'
                onChange={handleChange}
                value={newClub.img}
            />
            <button type="submit" className="button1">
                + Добавить в клуб
            </button>
        </form>
    )
}

export default AddClubForm;