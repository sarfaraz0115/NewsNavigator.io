import React from 'react'
import Weather from './Weather'
import './TopDiv.css'

const TopDiv = (props) => {
  const date = new Date();
  return (
    <div className='top-div d-flex justify-content-evenly align-items-center my-4' style={{backgroundColor:`${props.background}`, color:`${props.fontColor}`}}>
        <div className="upper d-flex flex-column">
          <h2>Your Briefing</h2>
          <span className='font-light' style={{color:`${props.fontColor}`}}>{date.toLocaleDateString()}</span>
          <span className='font-light' style={{color:`${props.fontColor}`}}>Total results : {props.totalResults}</span>
        </div>
        <div>
        <Weather background={props.secondaryBg}/>
        </div>
    </div>
  )
}

export default TopDiv
