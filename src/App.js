import './App.css';
import Content from './components/Content';
import Exchange from './components/Exchange';
import Footer from './components/Footer';
import Info from './components/Info';
import Navigator from './components/Navigator';
import Socials from './components/Socials';

function App() {
  return (
    <div className="App">
      <section className="box">
      <header>
        <Navigator />
        <Socials />
      </header>
        <Content />
        <img className="box__image" src="./images/icon.png" alt=""/>
        <wrapper className="info__wrapper">
          <div className="info__left">
            <p className="info__copy">Dappy is light wallet powered by Blockstack. It uses Gaia decentralized storage and encryption option. Dappy doesn't store or proceed user private key, the all data are securely stored in the Gaia. Dappy was created by the BC Net that trust in crypto and decentralized applications.</p>
            <Info header="Free and open source" text="Fully open and transparent wallet. Our code is open source and trusted by Blockstack Team." image="./images/image4.png" />
            <Info header="Free and open source" image="./images/image3.png" />
          </div>
          <div className="info__right">
            <Info header="Multi-currencies" text="Receive, send and store the most popular coins, like Bitcoin, Ethereum, Litecoin, Dash and lots more." image="./images/image6.png" />
            <Info header="Tokens" text="Full support for any tokens on Ethereum network. Bitcoin tokens (Omnilayer) is coming soon." image="./images/image5.png" />
            <Exchange header="Exchange" text="In-app exchange is supported by ShapeShift, it allows to convert coins to each other in the most intuitive and easiest way." image="./images/image2.png" />
          </div>
        </wrapper>

          <footer>
            <div className="footer__left">
              <Footer header="About" link="Introducing"/>
              <Footer link="Terms of Service" />
              <Footer link="Privacy Policy" />
            </div>
            <div className="footer__middle">
              <Footer header="Contact" link="hello@dappywallet.com"/>
              <div class="footer__socials">
              <a href="/" className="footer__social"><i class="fab fa-twitter"></i></a>
              <a href="/" className="footer__social"><i class="fab fa-twitch"></i></a>
              <a href="/" className="footer__social"><i class="fab fa-reddit-alien"></i></a>
              <a href="/" className="footer__social"><i class="fab fa-bitcoin"></i></a>
              <a href="/" className="footer__social"><i class="fas fa-dot-circle"></i></a>
            </div>
            </div>
            <div className="footer__right">
              <Footer header="Newsletter" link="Please enter your e-mail if want to receive updates."/>
            </div>

          
          </footer>

      </section>

    </div>
  );
}

export default App;
