import './Header.css';

const Header = (props) => {
   
    return (
        <div className='header-section'>
            <div className="logo-container" onClick={props.logoToHome}>
                <h1><i className="fas fa-film"></i>Movies</h1>
            </div>

            <div className="navigation">
                <h3 onClick={props.getTrending}>Trending <i className="fas fa-fire"></i></h3>
            </div>
        </div>
    )
}

export default Header;