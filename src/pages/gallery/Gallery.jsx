import React from "react";
import "./Gallery.css";
function Gallery() {
  const images = [
    "images/image_deco2.jpg",
    "images/b1.4.webp",
    "images/j.jpg",
    // Add all your image filenames here
    "images/image_deco3.jpg",
    "images/b1.1.jpg",
    "images/k.jpg",
    "images/image_deco4.jpg",
    "images/c1.3.jpg",
    "images/l.jpg",
    "images/image_deco5.jpg",
    "images/e1.2.jpg",
    "images/m.jpg",
    "images/image_deco6.jpg",
    "images/e1.4.jpg",
    "images/n.jpg",
    "images/image_deco7.jpg",
    "images/c1.jpg",
    "images/p1.2.jpg",
    "images/image_deco8.jpg",
    "images/p1.3.jpg",
    "images/p.jpg",
    "images/image_deco9.jpg",
    "images/m5.jpg",
    "images/q.jpg",
    "images/image_deco10.jpg",
    "images/m1.5.jpg",
    "images/r.jpg",
    "images/image_deco11.jpg",
    "images/m1.2.jpg",
    "images/image_deco13.jpg",
    // Add up to 30 images
  ];

  return (
    <>
      <main>
        <section class="gallery-section">
          <div class="gallery-content">
            <h1>Gallery</h1>
            <p>This is the Gallery page content.</p>
          </div>
        </section>
        <section className="image-grid">
          {images.map((src, index) => (
            <div className="grid-item" key={index}>
              <img src={src} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default Gallery;
