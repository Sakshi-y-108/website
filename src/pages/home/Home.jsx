import React from "react";
import "./Home.css";
import ProductList from "../../components/productlist/ProductList";
function Home() {
  return (
    <>
      <main className="main">
        <div className="container-img"></div>
      </main>
      <section className="grid-section">
        <div className="grid-item">
          <img src="./images/image_deco14.jpg" alt="Placeholder Image 1" />
          <h4>Wedding</h4>
          <p>
            Join us in celebrating the union of two souls in love. Cherish the
            moments and create lasting memories.
          </p>
        </div>
        <div className="grid-item">
          <img src="./images/image_deco9.jpg" alt="Placeholder Image 2" />
          <h4>Birthday</h4>
          <p>
            Celebrate another year of life with joy, laughter, and lots of cake!
            Let's make this birthday unforgettable.
          </p>
        </div>
        <div className="grid-item">
          <img src="./images/image_deco15.jpg" alt="Placeholder Image 3" />
          <h4>Engagement</h4>
          <p>
            Celebrate the promise of a new beginning. Join us for an evening of
            love, laughter, and celebration.
          </p>
        </div>
      </section>

      <section className="grid-section-home">
        <div className="left-content">
          <span>Welcome</span>
          <h1>Hello, I am Decoration Events planner</h1>
          <p>
            "Elegant Decorations offers bespoke event decor services,
            specializing in transforming spaces with exquisite floral
            arrangements, lighting designs, and themed decor. Our team's
            creativity, attention to detail, and professionalism ensure
            memorable and enchanting experiences for every client. From weddings
            to corporate events, we tailor decorations to suit individual styles
            and themes, delivering visually stunning and cohesive settings. With
            a focus on quality craftsmanship and customization, Elegant
            Decorations brings visions to life, creating immersive and
            unforgettable atmospheres. Contact us today to elevate your event
            with our creative expertise and personalized touch."
          </p>
        </div>
        <div className="right-carousel">
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="3000">
                <img
                  src="./images/image_deco8.jpg"
                  className="d-block carusel_image"
                  alt="Image 1"
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  src="./images/image_deco9.jpg"
                  className="d-block carusel_image"
                  alt="Image 2"
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  src="./images/image_deco11.jpg"
                  className="d-block carusel_image"
                  alt="Image 3"
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  src="./images/image_deco12.jpg"
                  className="d-block carusel_image"
                  alt="Image 4"
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  src="./images/image_deco13.jpg"
                  className="d-block carusel_image"
                  alt="Image 5"
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  src="./images/image_deco15.jpg"
                  className="d-block carusel_image"
                  alt="Image 6"
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  src="./images/image_deco17.jpg"
                  className="d-block carusel_image"
                  alt="Image 7"
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  src="./images/q.jpg"
                  className="d-block carusel_image"
                  alt="Image 8"
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  src="./images/h.jpg"
                  className="d-block carusel_image"
                  alt="Image 9"
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  src="./images/image_deco10.jpg"
                  className="d-block carusel_image"
                  alt="Image 10"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      <ProductList />
    </>
  );
}

export default Home;
