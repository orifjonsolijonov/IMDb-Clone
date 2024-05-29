import moviesDropdown_img from "/assets/moviesDropdown_img.png"
import "./navbar.css";

function moviesDropdown() {
  const links1 = ["Top 250 Movies", "Most Popular Movies", "Top Box Office"];
  const links2 = [
    "Release Calendar",
    "Browse Movies by Genre",
    "Movie News",
    "Showtimes and Tickets",
    "India Movie Spotlight",
  ];


  return (
    <section className="movies">
      <div className="leftLinksSide">
        <div className="links">
            <ul>
                {links1.map((link, index) => (
                  <li key={index}>
                    <a href="#">{link}</a>
                  </li>
                ))}
            </ul>
        </div>
        <div className="links">
            <ul>
                {links2.map((link, index) => (
                  <li key={index}>
                    <a href="#">{link}</a>
                  </li>
                ))}
            </ul>
        </div>
      </div>
      <div className="rightImgSide">
        <img src={moviesDropdown_img} alt="img" className="moviesDropdown_img"/>
      </div>
    </section>
  );
}

export default moviesDropdown;