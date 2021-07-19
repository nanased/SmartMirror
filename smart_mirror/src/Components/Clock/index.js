import React, {useState,useEffect} from 'react'; 
const clockStylesheet = {
    time : {
        fontSize: '60px',
        paddingRight: '20px',
        marginTop: '0px',
        marginBottom: '0px',
        margin: '10px',
    },
    date : {
        fontSize: '25px',
        textAlign: 'right',
        paddingRight: '30px',
        marginTop: '0px',
        marginBottom: '0px',
    }
}
const Clock = ()=>{

    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const [currentMonth, setCurrentMonth] = useState(monthNames[(new Date()).getMonth()]);
    const [currentDate,setCurrentDate] = useState((new Date()).getDate());
    const [currentYear, setCurrentYear] = useState((new Date()).getFullYear());
    const [currentHour, setCurrentHour] = useState((new Date()).getHours());
    const [currentMinutes, setCurrentMinutes] = useState((new Date()).getMinutes());
    const [currentSeconds, setCurrentSeconds] = useState((new Date()).getSeconds());


    const interval3 = setInterval( ()=>setCurrentMonth(monthNames[(new Date()).getMonth()]),1000);
    const interval = setInterval( ()=>setCurrentDate((new Date()).getDate()),1000); 
    const interval2 = setInterval( ()=>setCurrentYear((new Date()).getFullYear()),1000);
    const interval4 = setInterval( ()=>setCurrentHour((new Date()).getHours()),1000);
    const interval5 = setInterval( ()=>setCurrentMinutes((new Date()).getMinutes()),1000);
    const interval6 = setInterval( ()=>setCurrentSeconds((new Date()).getSeconds()),1000);

    useEffect(()=>{
        return ()=>{
            clearInterval(interval3);
            clearInterval(interval);
            clearInterval(interval2);
            clearInterval(interval4);
            clearInterval(interval5);
            clearInterval(interval6);
        }
    },[]); 

    return (
        <div>
            <h1 style = {clockStylesheet.time}>{(currentHour+'').padStart(2,'0')}:{(currentMinutes+'').padStart(2,'0')}:{(currentSeconds+'').padStart(2,'0')}</h1>
            <p style = {clockStylesheet.date}>{currentMonth} {currentDate}, {currentYear} </p>
        </div>
    ); // displays the current time and is updated everytime currentTime is updated
};

export default Clock; 