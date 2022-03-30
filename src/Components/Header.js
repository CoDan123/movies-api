import {ReactChild, useState} from 'react';
import './Header.css';

const Header = (props) => {
    const [headerSearch, setHeaderSearch] = useState('');
   

    return (
        <div className='header-section'>
            <div className="logo-container" onClick={props.logoToHome}>
                <h1><i className="fas fa-film"></i>Movies</h1>
            </div>

            <div className="navigation">
                <h3 onClick={props.getTrending}>Trending <i className="fas fa-fire"></i></h3>
            </div>

            <div className={props.displayType !== 'home'? 'form has-searched' : 'hidden-form'}>
                        <input onChange={(e) => setHeaderSearch(e.target.value)} type="text" placeholder="Search here..."/>
                        <button onClick={props.handleSearch}>Search</button>
                </div>
        </div>
    )
}

export default Header;