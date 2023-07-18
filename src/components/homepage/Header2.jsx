import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useNavigate } from "react-router-dom"

function Header2(props) {
    const myObject=props;
    const history = useNavigate()
    console.log(props);
    const doSomething = () => {
        
        history("/captcha")
        


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
                    <li><a href="https://www.honeywell.com/us/en"><b>Home </b></a></li>
                    <li className="dropdown">
                        <a href="https://www.honeywell.com/us/en/company/about-us"><b>About</b></a>
                        <ul className="dropdown-menu">
                            <li><a href="https://careers.honeywell.com/cz/cz" color='white'><b>Careers</b></a></li>
                            <li><a href="https://www.honeywell.com/us/en/company/about-us"><b>Company</b></a></li>
                        </ul>
                    </li>
                    <li><a href="https://www.honeywell.com/us/en/contact"><b>Contact</b></a></li>
                </ul>
            </nav>

            <div className='header_nav' >

                <div className='header_option'id='signin'>
                    <span className='header_optionLineOne'><b><i>Welcome </i><div style={{ color: 'blue', fontWeight: 'bold', fontSize: '20px' }}>{JSON.stringify(myObject.props)}</div></b></span>
                    
                </div>

            </div>

        </div>
    );
}

export default Header2
