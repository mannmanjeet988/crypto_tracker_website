import React from "react"
import "./styles.css"
import TemporaryDrawer from "./drawer"
import Button from "../Button"
import { Link } from "react-router-dom"


function Header(){
    return(
        <div className="navbar">
                   <h1 className="logo">
                        CryptoTracker<span style={{color:"var(--blue)"}}>.</span>
                   </h1>
                   <div className="links">
                   {/* <Link to="/"><p className="link">Home</p> </Link>
                        <Link to="/"><p className="link">Compare</p></Link>
                        <Link to="/"><p className="link">Watchlist</p></Link>
                        <Link to="/">
                          <Button text={"Dashboard"}/>
                        </Link> */}
                        <a href="/"><p className="link">Home</p> </a>
                        <a href="/"><p className="link">Compare</p></a>
                        <a href="/"><p className="link">Watchlist</p></a>
                        <a href="/">
                          <Button 
                          text={"Dashboard"}
                          outlined={true}
                          />
                        </a>
                   </div>
                   <div className="mobile-drawer">
                     <TemporaryDrawer/>
                   </div>
        </div>
    )
}

export default Header