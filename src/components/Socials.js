import "./Socials.scss";

function Socials () {
  return (
    <nav className="socials">
      <ul className="socials__menu">
        <li className="socials__menuItem">
          <a href="/" className="socials__menuLink"><i class="fab fa-twitter"></i></a>
          <a href="/" className="socials__menuLink"><i class="fab fa-twitch"></i></a>
          <a href="/" className="socials__menuLink"><i class="fab fa-reddit-alien"></i></a>
          <a href="/" className="socials__menuLink"><i class="fab fa-bitcoin"></i></a>
          <a href="/" className="socials__menuLink"><i class="fas fa-dot-circle"></i></a>
        </li>
      </ul>
    </nav>
  )
}

export default Socials;