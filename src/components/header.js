import { useState } from 'react';
import './header.css';

function Header() {
    const [navOpen, setNavOpen] = useState(false);
    let toggleNav = () => {
        setNavOpen(!navOpen);
    }
    return (
        <header>
            <div className='title-hamburger-cont'>
                <h1>CSS Loaders</h1>
                <div className='hamburger-btn' onClick={toggleNav}>
                    <div></div><div></div><div></div>
                </div>
            </div>
            <nav isopen={navOpen.toString()}>
                <ul>
                    <li>
                        <a href="">Check it on GitHub</a>
                    </li>
                    <li>
                        <a href="https://www.douglasvg.com">More projects</a>
                    </li>
                </ul>
            </nav>
            
        </header>
    )
}

export default Header;