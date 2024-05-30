import React from "react";
import "./About.css";
import Head from "../../components/Head";
import HeaderImage from "../../images/header_bg_1.jpg";

const About = () => {
  return (
    <>
      <Head title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        voluptas corrupti unde enim esse nemo beatae debitis harum perspiciatis
        accusantium, architecto inventore?
      </Head>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={""} alt="Story" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur nisi provident eligendi commodi nesciunt, quos ipsum
              praesentium ullam illum ratione asperiores, accusantium impedit
              facere deleniti. Consequuntur asperiores, iure soluta
              exercitationem vero, officia maiores sit rerum quis ea quisquam
              voluptate quae deleniti quidem hic.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              labore inventore eius numquam assumenda alias, temporibus ea enim
              saepe tempora ex ipsum, repudiandae soluta, omnis culpa quasi odio
              eum doloribus tempore earum!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
              perspiciatis fuga nobis dolorem illo velit. Quisquam perspiciatis
              reprehenderit ducimus veritatis totam harum praesentium?
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur nisi provident eligendi commodi nesciunt, quos ipsum
              praesentium ullam illum ratione asperiores, accusantium impedit
              facere deleniti. Consequuntur asperiores, iure soluta
              exercitationem vero, officia maiores sit rerum quis ea quisquam
              voluptate quae deleniti quidem hic.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              labore inventore eius numquam assumenda alias, temporibus ea enim
              saepe tempora ex ipsum, repudiandae soluta, omnis culpa quasi odio
              eum doloribus tempore earum!
            </p>
          </div>
          <div className="about__section-image">
            <img src={""} alt="Story" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={""} alt="Story" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur nisi provident eligendi commodi nesciunt, quos ipsum
              praesentium ullam illum ratione asperiores, accusantium impedit
              facere deleniti. Consequuntur asperiores, iure soluta
              exercitationem vero, officia maiores sit rerum quis ea quisquam
              voluptate quae deleniti quidem hic.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              labore inventore eius numquam assumenda alias, temporibus ea enim
              saepe tempora ex ipsum, repudiandae soluta, omnis culpa quasi odio
              eum doloribus tempore earum!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
              perspiciatis fuga nobis dolorem illo velit. Quisquam perspiciatis
              reprehenderit ducimus veritatis totam harum praesentium?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
