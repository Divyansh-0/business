/* eslint-disable jsx-a11y/role-has-required-aria-props */
import "./Contact.css";
import Head from "../../components/Head";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <Head title="Get in Touch" image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum itaque
        cumque, quae ad molestias, natus vero beatae placeat fuga dolores, non
        asperiores quos!
      </Head>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:#" target="_blank" rel="noreferrer noopener">
              <MdEmail />
            </a>
            <a href="mailto:#" target="_blank" rel="noreferrer noopener">
              <BsMessenger />
            </a>
            <a href="mailto:#" target="_blank" rel="noreferrer noopener">
              <IoLogoWhatsapp />
            </a>
          </div>
          <div className="contact_mail">
            <form className="contact_form">
              <span className="contact_form-title">Send Us A Message</span>
              <div
                className="wrap-input validate-input"
                data-validate="Name is required"
              >
                <label className="label-input" for="name">
                  Full name
                </label>
                <input
                  id="name"
                  className="input100"
                  type="text"
                  name="name"
                  placeholder="Enter your name..."
                />
                <span className="focus-input"></span>
              </div>
              <div
                className="wrap-input validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <label className="label-input" for="email">
                  Email Address
                </label>
                <input
                  id="email"
                  className="input100"
                  type="text"
                  name="email"
                  placeholder="Enter your email..."
                />
                <span className="focus-input100"></span>
              </div>

              <div
                className="wrap-input validate-input"
                data-validate="Message is required"
              >
                <label className="label-input" for="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="input100"
                  name="message"
                  placeholder="Type your message here..."
                ></textarea>
                <span className="focus-input100"></span>
              </div>
              <div className="container-contact100-form-btn">
                <button className="contact100-form-btn">Send</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
