import "../assets/css/nav.css"; 

export default function Navbar() {
    return (
      <nav className="nav">
        <div className="logo">Moje Logo</div>
        <ul className="menu">
          <li><a href="#">Strona Główna</a></li>
          <li><a href="#">O nas</a></li>
          <li><a href="#">Usługi</a></li>
          <li><a href="#">Kontakt</a></li>
        </ul>
        <div className="burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    );
  }
  