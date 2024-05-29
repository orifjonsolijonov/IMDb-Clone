// importing the necessary icons
import Logo from "/assets/Logo.svg";
import arrow from "/assets/icons/arrow.svg";
import search from "/assets/icons/search.svg";
import watchlist from "/assets/icons/watchList.svg";
import user from "/assets/icons/user.svg";
import mode from "/assets/icons/mode.svg";

// importing styles
import "./navbar.css";

function Navbar() {
  const navlinks = [
    "Movies",
    "TV shows",
    "Celebs",
    "Watch",
    "Awards",
    "Community",
  ];

  return (
    <header>
      <div className="container">
        <a href="#">
        <img src={Logo} alt="logo" />
        </a>
        <nav>
          <ul>
            {navlinks.map((link, index) => (
              <li key={index}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="searchArea">
          <div className="searchAreaDropDown_All">
            <p>All</p>
            <img src={arrow} alt="arrow" />
          </div>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search IMDb"
          />
          <img src={search} alt="search" />
        </div>
        <div className="watchList">
          <img src={watchlist} alt="watchlist" />
          <p>Watchlist</p>
        </div>
        <div className="user">
          <img src={user} alt="user" />
          <p>User</p>
        </div>
        <div className="lang">
          <p>EN</p>
          <img src={arrow} alt="arrow" />
        </div>

        <img src={mode} alt="mode" className="themeMode" />
      </div>
    </header>
  );
}

export default Navbar;
