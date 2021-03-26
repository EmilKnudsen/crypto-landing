import "./Navigator.scss";

function Navigator () {
  return (
    <nav className="navigator">
      <ul className="navigator__menu">
        <li className="navigator__menuItem">
          <a href="/" className="navigator__menuIcon"><i class="fas fa-grip-horizontal"></i>Dappy</a>
          <a href="/" className="navigator__menuLink">How it works</a>
          <a href="/" className="navigator__menuLink">Blog</a>
          <a href="/" className="navigator__menuLink">Support</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigator;