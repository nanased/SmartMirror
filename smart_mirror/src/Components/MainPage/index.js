import React from 'react';
import Clock from '../Clock'; 
import Weather from '../Weather'
import Calendar from '../Calendar'
import Spotify from '../Spotify'

const stylesheet = {
    div : {
        display: 'flex',
        justifyContent: 'space-between',
    },
    font : {
        fontFamily: 'Oswald',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh'

    }
}
const MainPage = ()=> {
    
    return(
        <div style = {stylesheet.font}>
           <div style = {stylesheet.div}>
           <Weather/>
            <Clock/>
            </div> 
            <div style = {stylesheet.div}>
                <div>
                    <Spotify/>
                    </div>
            <Calendar/>
            </div>
        </div>
    ); 
}

export default MainPage;
