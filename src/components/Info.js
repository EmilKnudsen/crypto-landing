import "./Info.scss";

function Info({ header, text, image }) {
	return (
		<div className="info">
			<h3 className="info__header">{header}</h3>
			<img className="info__image" src={image} alt="" />
			<p className="info__text">{text}</p>
		</div>
	);
}

export default Info;
