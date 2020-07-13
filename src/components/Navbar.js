import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm px-sm-5">
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <a href='/Mobiles' className="nav-link text-light ">
                            Mobiles
                        </a>
                    </li>
                    <li className="nav-item ml-5">
                        <a href='/Men' className="nav-link text-light ">
                            Men
                        </a>
                    </li>
                    <li className="nav-item ml-5">
                        <a href='/Womwn' className="nav-link text-light ">
                            Women
                        </a>
                    </li>
                    <li className="nav-item ml-5">
                        <a href='/Kids' className="nav-link text-light ">
                            Kids
                        </a>
                    </li>
                </ul>
            </nav>

        )
    }
}

export default Navbar;