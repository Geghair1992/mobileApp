import React from 'react'
import home from '../../assets/img/home.svg'
import setting from '../../assets/img/setting.svg'
import search from '../../assets/img/search.svg'
import styles from './Navbar.module.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                   <Link to="/">
                   <img src={home} alt="home"/>
                   </Link>
                </li>

                <li>
                   <Link to="/setting">
                   <img src={setting} alt="setting"/>
                   </Link>
                </li>
           
                <li>
                  <Link to="/search">
                  <img src={search} alt="search"/>
                  </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
