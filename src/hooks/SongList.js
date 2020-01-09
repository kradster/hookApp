import React, {useState} from 'react'
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

const SongList = ()=>{
   const [songs,setSongs] =  useState([
        {title:'Thousand Years by catty perry',id:1},
        {title:'Beautyfull in white by westside',id:2},
        {title:'A new Day by maria chelay',id:3},
    ])

    const addSong = (title)=>{
        setSongs([...songs,{title,id:uuid()}]);
    }
    return (
        <div className="song-list">
            <ul>
                {songs.map(song=>{
                return (<li key={song.id} >{song.title}</li>)
                })}
            </ul>
           <NewSongForm addSong={addSong}/>
        </div>
    );

}

export default SongList 