import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {

    const [roomName, setRoomName] = useState('');
    const handleInputChange = (e) => {
        setRoomName(e.target.value)
    };

    return (
        <>
            <input
                type='text'
                placeholder='Room id'
                value={roomName}
                onChange={handleInputChange}
                className= 'input__room__name'
            />
            <Link to={`/${roomName}`} className= 'join__room__button'>
                Join Room    
            </Link> 
        </>
    )
};


export default HomeScreen;
