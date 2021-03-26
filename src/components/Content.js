import "./Content.scss";

function Content({ link }) {
	return (
		<div className="content">
			<h1 className="content__header">
				Create your first <br />
				decentralized wallet
			</h1>
			<p className="content__copy">
				The easiest way to manage <br />
				multiple cryptocurrency assets
			</p>
			<a
				href="/"
				className="content__link"
				//eslint-disable-next-line
				onClick={() => gtag("event", "select_content", { "content_type": link, "test-type": "B" })}
			>
				CREATE WALLET
			</a>
		</div>
	);
}

export default Content;
