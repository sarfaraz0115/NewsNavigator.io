import React, {useState} from 'react'
import './Navbar.css'
import {NavLink,Link} from "react-router-dom";

const Navbar = (props) => {

    return (
        <>
            <nav className="navbar navbar-expand-lg p-sticky" style={{ backgroundColor: props.background, color: props.fontColor}}>
                <div className="container-fluid" >
                    <Link className="navbar-brand fw-bolder" style={{color:props.fontColor}} to="/">NewsNavigator.io</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item d-flex gap-3 align-items-center">
                                <NavLink className="text-decoration-none" style={{color:props.fontColor}} aria-current="page" to="/">Home</NavLink>
                                <NavLink className="text-decoration-none" style={{color:props.fontColor}} to="/general">General</NavLink>
                                <NavLink className="text-decoration-none" style={{color:props.fontColor}} to="/business">Business</NavLink>
                                <NavLink className="text-decoration-none" style={{color:props.fontColor}} to="/sport">Sports</NavLink>
                                <NavLink className="text-decoration-none" style={{color:props.fontColor}} to="/entertainment">Entertainment</NavLink>
                                <NavLink className="text-decoration-none" style={{color:props.fontColor}} to="/technology">Technology</NavLink>
                                <NavLink className="text-decoration-none" style={{color:props.fontColor}} to="/health">Health</NavLink>
                                <NavLink className="text-decoration-none" style={{color:props.fontColor}} to="/science">Science</NavLink>
                            </li>
                        </ul>
                            <img onClick={props.changeMode} src={props.modeIcon} alt="mode-dayOrNight" style={{width:'35px', transition:'transform 1s ease',transform:`rotate(${props.rotate})`}}/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
