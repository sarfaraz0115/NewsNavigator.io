import React ,{useState} from 'react'
import './NewsItems.css'
import Placeholder from './Placeholder';

const NewsItems = (props) => {
    const [cardLoaded, setCardLoaded] = useState(false);
    const handleCardLoad = () => {
        setTimeout(() => {
            setCardLoaded(true);
        }, 500);
    };
    const months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];
    let date = months[(new Date(props.publishedAt).getMonth())] + ' ' + (new Date(props.publishedAt).getDate()) + '-' + (new Date(props.publishedAt).getFullYear()) + '  ' + new Date(props.publishedAt).toLocaleTimeString([],{hour : '2-digit',minute : '2-digit' , second : '2-digit', hour12 : true}).toLowerCase();
    return (
        <div>
            {!cardLoaded && <Placeholder background={props.background}/>}
            <div className="card" onLoad={handleCardLoad} style={{ width: '20rem', display: cardLoaded ? 'block' : 'none', backgroundColor:props.background ===  '#1f1f1f' ? '#1f1f1f' : 'white',color:props.fontColor}}>
                <img src={props.urlToImage} className="card-img-top" alt="Card" />
                <div className="card-body">
                    <span className="badge" style={{backgroundColor:'#c95252'}}>{props.source}</span>
                    <h5 className="card-title" style={{marginTop:'6px'}}>{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text"><small style={{color:props.background ===  '#1f1f1f' ? 'white':'', opacity:'0.6'}}>by {props.author?props.author:'unknown'} on {date}</small></p>
                    <a href={props.url} className="btn btn-primary" style={{backgroundColor : props.background === '#F2EAD3' ? '#f2f2f2': '#303030' , color:props.background === '#F2EAD3' ? '#444746' : '', fontWeight:'500', border:'none'}}>Read more</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItems
