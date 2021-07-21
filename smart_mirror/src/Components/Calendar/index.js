import axios from 'axios';
import React, {useState,useEffect} from 'react'; 

const calendarStylesheet = {
    currentCalendar: {
        fontSize: '20px',
        marginTop: '20px',
        marginBottom: '65px',
        paddingRight: '50px',
        textAlign: 'left',
    }
}

const ISODateString =(d=new Date())=>{
    const pad=n=> (n<10 ? '0'+n : n);

    return (d.getUTCFullYear()+'-'
         + pad(d.getUTCMonth()+1)+'-'
         + pad(d.getUTCDate())+'T'
         + pad(d.getUTCHours())+':'
         + pad(d.getUTCMinutes())+':'
         + pad(d.getUTCSeconds())+'Z')
}

  const Calendar = ()=>{ 
    const [currentCalendar, setCurrentCalendar]=useState(0)
    const interval = setInterval(()=>{
        axios.get(`https://www.googleapis.com/calendar/v3/calendars/mahina.yasutake@gmail.com/events?orderBy=startTime&singleEvents=true&timeMin=${ISODateString()}&key=AIzaSyAI9g1RC42exw80NXVGjJPLeAzlb1RpKps&maxResults=5`)
        .then(function (response) {
          // handle success
          setCurrentCalendar(response.data.items.map(n => n.summary));
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    },3600000); 
    useEffect(()=>{
        axios.get(`https://www.googleapis.com/calendar/v3/calendars/mahina.yasutake@gmail.com/events?orderBy=startTime&singleEvents=true&timeMin=${ISODateString()}&key=AIzaSyAI9g1RC42exw80NXVGjJPLeAzlb1RpKps&maxResults=5`)
        .then(function (response) {
            console.log(response);
            setCurrentCalendar(response.data.items.map(n => <div><div>- {n.summary}</div></div>))
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        
        return ()=>{
            clearInterval(interval);
        }
    },[]); 
    
    return (
    <div>
        <h1 style={calendarStylesheet}>Events</h1>
        <p style= {calendarStylesheet.currentCalendar}>{currentCalendar}</p>
    </div>
    )
  }
  export default Calendar

  