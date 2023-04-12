import Head from "../../components/Head";
import HeaderImage from "../../images/header_bg_3.jpg";

import "./Gallery.css";

const Gallery = () => {
  const galleryLength = 15;
  const images = [];

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }

  return (
    <>
      <Head title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sunt
        rem eaque deserunt, fugiat nemo eum exercitationem molestias asperiores
        excepturi voluptatem, architecto similique laborum! Sunt sint nam
        consequatur accusantium. Quod iusto quo ea corporis sint.
      </Head>
      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`Gallery ${index + 1}`} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
