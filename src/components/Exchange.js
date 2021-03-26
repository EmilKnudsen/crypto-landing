import "./Exchange.scss";

function Exchange ({header, text, image}) {
  return (
    <div className="exchange">
      <h3 className="exchange__header">{header}</h3>
      <p className="exchange__text">{text}</p>
      <img className="exchange__image" src={image} alt=""/>
      </div>
  )
}

export default Exchange;