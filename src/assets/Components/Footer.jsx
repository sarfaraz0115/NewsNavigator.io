import React from 'react'
import './Footer.css'

const Footer = (props) => {
  return (
    <div className='p-1 d-flex align-items-center justify-content-between' style={{backgroundColor:props.background, color:'#6B7380'}}>
      <div className="d-flex align-items-center justify-content-start">
        <div className="Logo m-2">
            <img src={props.background === '#1f1f1f' ? ".//src//assets//Images&Icons//WhiteLogo.png" : ".//src//assets//Images&Icons//BlackLogo.png"} alt="NewsNavigator.io" style={{width:'16vw'}}/>
        </div>
        <div className="copyright">
            <span>| &copy; 2024 newsnavigator.io</span>
        </div>
        </div>
        <div className="Social-Media">
            <img src=".\src\assets\Images&Icons\socialMediaIcons.png" alt="social-media" style={{width : '8vw', cursor : 'pointer'}}/>
        </div>
    </div>
  )
}

export default Footer
