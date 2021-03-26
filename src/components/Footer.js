import "./Footer.scss";

function Footer ({header, link}) {
  return (
    <div className="footer">
      <p className="footer__header">{header}</p>
      <a className="footer__link" href="/">{link}</a>
    </div>
  )
}

export default Footer;