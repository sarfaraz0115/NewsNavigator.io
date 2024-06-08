import { useState, useEffect } from 'react'
import './Weather.css'


const Weather = (props) => {
  let getLocation;
  const [state, setState] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [image, setimage] = useState('.//src//assets//Images&Icons//sun.png');
  const [region, setRegion] = useState("jaipur");
  const [temp, setTemp] = useState('0')
  const toggleState = () => {
    setState(prevState => (prevState === 0 ? 1 : 0));
    setRotation(prevRotation => (prevRotation === 0 ? -180 : 0));
  }
  const imageHover = () => {
    switch (image) {
      case './/src//assets//Images&Icons//sun.png':
      case './/src//assets//Images&Icons//sun.gif':
        setimage(prevImage => (prevImage === './/src//assets//Images&Icons//sun.png' ? './/src//assets//Images&Icons//sun.gif' : './/src//assets//Images&Icons//sun.png'));
        break;
      case ".//src//assets//Images&Icons//cloudy.png":
      case './/src//assets//Images&Icons//cloudy.gif':
        setimage(prevImage => (prevImage === './/src//assets//Images&Icons//cloudy.png' ? './/src//assets//Images&Icons//cloudy.gif' : './/src//assets//Images&Icons//cloudy.png'))
        break;
      case ".//src//assets//Images&Icons//rain.png":
      case './/src//assets//Images&Icons//rain.gif':
        setimage(prevImage => (prevImage === './/src//assets//Images&Icons//rain.png' ? './/src//assets//Images&Icons//rain.gif' : './/src//assets//Images&Icons//rain.png'))
        break;
      case ".//src//assets//Images&Icons//storm.png":
      case './/src//assets//Images&Icons//storm.gif':
        setimage(prevImage => (prevImage === './/src//assets//Images&Icons//storm.png' ? './/src//assets//Images&Icons//storm.gif' : './/src//assets//Images&Icons//storm.png'))
        break;
      case ".//src//assets//Images&Icons//snowflake.png":
      case './/src//assets//Images&Icons//snowflake.gif':
        setimage(prevImage => (prevImage === './/src//assets//Images&Icons//snowflake.png' ? './/src//assets//Images&Icons//snowflake.gif' : './/src//assets//Images&Icons//snowflake.png'))
        break;
      default:
        setimage(prevImage => (prevImage === './/src//assets//Images&Icons//sun.png' ? './/src//assets//Images&Icons//sun.gif' : './/src//assets//Images&Icons//sun.png'));
    }
  }


  useEffect(() => {
    async function fetchLocation() {
      try {
        const response = await fetch('https://ipinfo.io/json');
        const data = await response.json();
        setRegion(data.city);
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    }

    getLocation = fetchLocation();
  }, []);
  useEffect(() => {
    async function fetchTemprature() {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${region}&appid=6f91af6659e7ff593706d48284a1f61e`);
        const data = await response.json();
        setTemp(Math.round(data.main.temp) + "°C");
        switch (data.weather[0].icon) {
          case "01d":
          case "01n":
            setimage('.//src//assets//Images&Icons//sun.png');
            break;
          case "02d":
          case "02n":
          case "03d":
          case "03n":
          case "50d":
          case "50n":
            setimage('.//src//assets//Images&Icons//cloudy.png');
            break;
          case "09d":
          case "09n":
          case "10d":
          case "10n":
            setimage('.//src//assets//Images&Icons//rain.png');
            break;
          case "11d":
          case "11n":
            setimage('.//src//assets//Images&Icons//storm.png');
            break;
          case "13d":
          case "13n":
            setimage('.//src//assets//Images&Icons//snowflake.png');
            break;
          default:
            setimage('.//src//assets//Images&Icons//sun.png');

        }
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    }

    fetchTemprature();
  }, [region]);

  return (
    <div className='container d-flex align-items-center'>
      <div className='child-box rounded-3' style={{ opacity: `${state}`, backgroundColor:props.background === '#F2EAD3' ? '#F2EAD3' : '#2c2c2e'}}>

      </div>
      <div className='parent-box rounded-4 d-flex align-items-center justify-content-evenly p-2' style={{backgroundColor:props.background === '#F2EAD3' ? '#F2EAD3' : '#2c2c2e'}}>
        <span className='aero' onClick={toggleState} style={{ cursor: 'pointer' }}><img src=".\src\assets\Images&Icons\Previous.png" alt="Previous" style={{ width: '15px', transform: `rotate(${rotation}deg)` }} /></span>
        <img onMouseEnter={imageHover} onMouseLeave={imageHover} src={`${image}`} alt="sunny" style={{ width: '50px' }} />
        <div className="info d-flex flex-column">
          <span className='font-light'>{region}</span>
          <span className='font-medium'>{temp}</span>
          <span className='font-10px'><a href="https://sarfaraz0115.github.io/weather-cast/" target='_blank'>More on weathercast.com</a></span>
        </div>
        <img onClick={getLocation} className='pb-42' src="\src\assets\Images&Icons\target.png" alt="getLocation" />
      </div>
    </div>
  )
}

export default Weather
