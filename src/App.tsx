import React, { FC, useState } from 'react';
import './App.css';
import AddClubForm from './components/AddClubForm';
import Player from './models/Player';
import DisplayClub from './components/DisplayClub';
import help from '../src/img/help.png'



const App: FC = () => {

  const [clubList, setClubList] = useState<Player[]>([]);

  const addPlayer = (newPlayer: Player) => {
    setClubList([...clubList, newPlayer]);
  }

  const updatePlayer = (newPlayer: Player) => {
    setClubList(clubList.map((player) => (player.id === newPlayer.id ? newPlayer : player)));
  }

  const deletePlayer = (id: number) => {

    const newPlayerList = clubList.filter(player => player.id !== id);
    setClubList(newPlayerList);
  }

  console.log("club list >>> ", clubList);

  return (
    <div className="App">
      <div className="help">
        <div className="help-header">
          <img src={help}/>
          <div className="help-h">Help</div>
        </div>
        <div className="help-text">
          <div className="help-t">
            Названия поля <b>"Позиция игрока"</b> для добавления в клуб:
          </div>
          <div className="help-goalkeeper">
            Позиция вратаря - <b>Goalkeeper</b>
          </div>
          <div className="help-defender">
            Позиция защитника - <b>Defender</b>
          </div>
          <div className="help-attack">
            Позиция нападающего - <b>Attack</b>
          </div>
          <div className="help-footer">
            P.S.Названия полей <b>"Имя игрока"</b> и <b>"Стоимоть игрока"</b> заполняются произвольно
          </div>
          <div className="help-footer1">
            Вы можете <b>Добавить</b> произвольное количество игроков в ваш клуб
          </div>
          <div className="help-footer2">
            А так же <b>Удалять</b> и <b>Редактировать</b> параметры уже добаленных игроков по нажатию на иконки на самой карточке игрока
          </div>
        </div>
      </div>
      <div className="wrap">
        <span className="heading">
          Футбольный клуб
        </span>
        <div className="form-text">
          Форма добавления игрока в клуб
        </div>
        <div className="form-add">
          <AddClubForm addPlayer={addPlayer}/>
        </div>
      </div>
      <div className="playercard">
        <div className="playercard-h">
          Мой клуб:
        </div>
        <div className="playercard-c">
          <DisplayClub clubList={clubList} updatePlayer={updatePlayer} deletePlayer={deletePlayer}/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
