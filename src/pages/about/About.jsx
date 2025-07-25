import React from "react";
import "./About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
function About() {
  return (
    <>
      <main>
        <section class="about-section">
          <div class="about-content">
            <h1>About</h1>
            <p>This is the about page content.</p>
          </div>
        </section>

        <section id="about">
          <div class="about_container">
            <div className="about_buss">
              <div className="about_frist_left">
                <h1>Welcome to Your Event Decor Business!</h1>
                <p>
                  At Your Event Decor Business, we specialize in creating
                  stunning and memorable stage decorations for weddings,
                  birthdays, engagements, and various special events. With years
                  of experience and a passion for creativity, we turn your
                  vision into reality and make your event truly extraordinary.
                </p>
              </div>
              <div className="about_frist_right">
                <img src="./images/11.jpg" alt="no image" />
              </div>
            </div>
            <div className="about_second">
              <h2>Our Mission</h2>
              <p>
                Our mission is to bring joy, beauty, and elegance to every
                celebration. We believe that attention to detail and
                personalized touches make all the difference, and we strive to
                exceed your expectations with our exceptional decor services.
              </p>

              <h2>Why Choose Us</h2>
              <ul>
                <li>Experienced and dedicated team</li>
                <li>Customized designs tailored to your preferences</li>
                <li>High-quality materials and craftsmanship</li>
                <li>Attention to detail and professionalism</li>
                <li>Affordable prices and flexible packages</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="team">
          <div class="team_container">
            <h2>Meet Our Decoration Team</h2>
            <p>
              Meet the creative minds behind our stunning event decorations. Our
              team is dedicated to bringing your vision to life with their
              expertise and passion for design.
            </p>
            <div class="team-grid">
              <div class="team-member">
                <img src="images/sk.jpg" alt="no image" />
                <h3>Member 1</h3>
                <p>Soniya Kumari</p>
              </div>
              <div class="team-member">
                <img src="images/ds.jpg" alt="no image" />
                <h3>Member 2</h3>
                <p>Dimple Sharma</p>
              </div>
              <div class="team-member">
                <img src="images/sy.jpg" alt="no image" />
                <h3>Member 3</h3>
                <p>Sakshi Yadav</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
