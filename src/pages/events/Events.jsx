import React from "react";
import "./Events.css";
function Events() {
  return (
    <main className="events_main">
      <section className="events_section">
        <div class="events-content">
          <h1>Events</h1>
          <p>This is the Events page content.</p>
        </div>
      </section>

      <section id="event-content-section">
        <div class="content-block events_frist">
          <div class="events_text">
            <h2>Birthday</h2>
            <p>
              The birthday event kicks off with a warm welcome and introduction
              of the celebrant, sharing fun anecdotes. Ice breakers, such as
              name tags with fun facts and a photo booth, set the stage for
              mingling. Activities include a trivia quiz about the celebrant and
              a treasure hunt with prizes. Guests enjoy a variety of dishes and
              specialty drinks, highlighted by a memorable cake-cutting
              ceremony. Entertainment features live music, dancing, and a
              karaoke session. Special moments include heartfelt toasts, a
              slideshow of the celebrant's life, and opening gifts. A surprise
              guest adds excitement. The event concludes with a thank you
              speech, a group photo, and goodie bags for guests, ensuring
              everyone leaves with cherished memories.
            </p>
          </div>
          <div class="image">
            <img src="./images/image_deco8.jpg" alt="Placeholder Image 1" />
          </div>
        </div>
        <div class="content-block reverse events_second">
          <div class="image">
            <img src="./images/image_deco15.jpg" alt="Placeholder Image 2" />
          </div>
          <div class="events_text">
            <h2>Engagement</h2>
            <p>
              Guests are warmly welcomed to the engagement celebration, where
              the couple makes a joyful entrance. The host shares the couple's
              love story, followed by heartfelt speeches and the exchange of
              engagement rings. Guests mingle, enjoying hors d'oeuvres and
              drinks, with a photo booth for capturing memories. Background
              music sets a relaxed mood, while a trivia game and slideshow
              entertain. A delicious dinner is served, accompanied by more
              toasts and speeches from loved ones. The evening concludes with
              the couple's thank you speech, expressing gratitude. Guests
              receive engagement-themed favors, leaving with cherished memories
              of a love-filled celebration
            </p>
          </div>
        </div>
        <div class="content-block events_third">
          <div class="events_text">
            <h2>Wedding</h2>
            <p>
              The wedding begins with guests being warmly greeted and seated,
              followed by the officiant's welcome and the bride's grand
              entrance. The couple exchanges heartfelt vows, shares their first
              kiss, and is pronounced married, to the applause of their guests.
              The reception starts with a cocktail hour, leading to the
              newlyweds' lively entrance and their first dance. Speeches and
              toasts from family and friends add a personal touch. Guests enjoy
              a delicious dinner and the cake-cutting ceremony. Entertainment
              includes a live band or DJ and traditional wedding games. Candid
              moments are captured by a photographer, with a photo booth for
              guest fun. The event concludes with thank yous from the couple,
              distribution of wedding favors, and a grand exit, marking the
              start of their new life together.
            </p>
          </div>
          <div class="image">
            <img src="./images/image_deco17.jpg" alt="Placeholder Image 3" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Events;
