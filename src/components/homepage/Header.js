import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useNavigate } from "react-router-dom"

function Header() {
    const history = useNavigate()
    const doSomething = () => {
        
        history("/captcha")
        


    }
    const doThis=()=>{
        alert('First U have to sign in');
        history("/");
    }
    return (
        <div className='header'>

            <img
                className="header_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Honeywell_logo.svg/2560px-Honeywell_logo.svg.png"
                onClick="location.href = 'https://www.honeywell.com/us/en';"
                alt=""
            ></img>




            <div className='header_search'>
                <input className='header_searchInput' type='text'></input>
                <SearchIcon
                    className='header_searchIcon' />
            </div>

            <nav>
                <ul>
                    <li onClick={doThis}><b>Home </b></li>
                    <li className="dropdown">
                        <a onClick={doThis}><b>About</b></a>
                        <ul className="dropdown-menu">
                            <li><a onClick={doThis} color='white'><b>Careers</b></a></li>
                            <li><a onClick={doThis}><b>Company</b></a></li>
                        </ul>
                    </li>
                    <li><a onClick={doThis}><b>Contact</b></a></li>
                </ul>
            </nav>

            <div className='header_nav' >

                <div className='header_option'id='signin'>
                    <span className='header_optionLineOne'><b><i>Hello guest</i></b></span>
                    <a href="" onClick={doSomething}><b>Sign in </b></a>
                </div>

            </div>

        </div>
    );
}

export default Header
