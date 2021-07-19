import React from 'react';
import Clock from '../Clock'; 
import Weather from '../Weather'
import Calendar from '../Calendar'

const stylesheet = {
    div : {
        display: 'flex',
        justifyContent: 'space-between',
    },
    font : {
        fontFamily: 'Oswald',
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
                <div></div>
            <Calendar/>
            </div>
        </div>
    ); 
}

export default MainPage;
