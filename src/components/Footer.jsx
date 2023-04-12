import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaLinkedin, FaFacebookF } from "react-icons/fa";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Logo" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eum
            architecto ad in neque soluta adipisci reiciendis, quo aliquam
            culpa.
          </p>
          <div className="footer__socials">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer nopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer nopener"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer nopener"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer nopener"
            >
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Case Studies</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Communities</Link>
          <Link to="/s">FAQs</Link>
        </article>
        <article>
          <h4>Get in Touch</h4>

          <Link to="/contact">Contact Us</Link>
          <Link to="/s">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>Made with ❤️ 2023 &copy;</small>
      </div>
    </footer>
  );
};

export default Footer;
