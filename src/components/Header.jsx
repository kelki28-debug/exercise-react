import React, {Component} from 'react'
import './Header.css'


class Header extends Component{
    render(){
        return(
            <header className="header">
            <div className="header-nav">
            <div className="logo">
                <a href="/" className="link">
                    Ngopi Dulu
                </a>
            </div>
            <nav className="navigation">
                    <ul className='item'>
                        <li className='items'>Menu</li>
                        <li className='items'>Menu</li>
                        <li className='items'>Menu</li>
                    </ul>
            </nav>
        </div>
         <div className="text">
             <h1>
                Ngopi Doeloe
             </h1>
             <p>authenthic indonesian coffee</p>
             <p>traditional and brew</p>
         </div>
        </header>
        )
    }
    
}

export default Header;