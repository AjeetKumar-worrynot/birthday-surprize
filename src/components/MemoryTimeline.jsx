import {
  FaHeart,
  FaRing,
  FaCamera,
  FaCrown,
  FaStar,
  FaGift,
} from 'react-icons/fa';

import photo1 from '../assets/photo1.jpeg';
import photo2 from '../assets/photo2.jpeg';
import photo3 from '../assets/photo3.jpeg';
import photo4 from '../assets/photo4.jpeg';
import photo5 from '../assets/photo5.jpeg';
import photo7 from '../assets/photo7.jpeg';
import photo9 from '../assets/photo9.jpeg';

export default function MemoryTimeline() {
  return (
    <section className="timeline">
      ```
      <div className="timelineTitle">
        <FaHeart className="mainHeart" />
        <h2>Our Beautiful Love Story</h2>
        <p>
          Every photo holds a memory. Every memory holds a feeling. Every
          feeling leads back to you.
        </p>
      </div>
      <div className="premiumCard reverse">
        <div className="imageSection">
          <img
            src={photo7}
            alt=""
          />
        </div>

        <div className="contentSection">
          <FaHeart className="cardIcon" />

          <h3>The Day I Fell For You</h3>

          <p>
            Somewhere between our conversations, your smile, and your beautiful
            heart, I realized that you had become the most important person in
            my world.
          </p>

          <span className="dateTag">My Heart Chose You ❤️</span>
        </div>
      </div>
      <div className="premiumCard">
        <div className="imageSection">
          <img
            src={photo2}
            alt=""
          />
        </div>

        <div className="contentSection">
          <FaRing className="cardIcon" />

          <h3>My First Proposal To My Queen</h3>

          <p>
            One of the most nervous, exciting, and happiest moments of my life.
            Because this was the moment I asked my heart's favorite person to be
            part of my forever.
          </p>

          <span className="dateTag">The Day Forever Started 👑</span>
        </div>
      </div>
      <div className="premiumCard reverse">
        <div className="imageSection">
          <img
            src={photo9}
            alt=""
          />
        </div>

        <div className="contentSection">
          <FaCamera className="cardIcon" />

          <h3>Our Favorite Memories</h3>

          <p>
            Every photo tells a story. Every smile captures happiness. Every
            moment reminds me how lucky I am to walk through life with you.
          </p>

          <span className="dateTag">Countless Beautiful Memories ✨</span>
        </div>
      </div>
      <div className="premiumCard">
        <div className="imageSection">
          <img
            src={photo4}
            alt=""
          />
        </div>

        <div className="contentSection">
          <FaCrown className="cardIcon" />

          <h3>Happy Birthday My Queen</h3>

          <p>
            Today is not only your birthday. It is the celebration of the woman
            who fills my life with happiness, peace, laughter, and endless love.
          </p>

          <p>
            Thank you for every smile. Thank you for every hug. Thank you for
            every memory. Thank you for being you.
          </p>

          <span className="dateTag">My Queen • My Home • My Forever ❤️</span>
        </div>
      </div>
      <div className="finalMessage">
        <FaGift className="giftIcon" />

        <h2>To The Love Of My Life</h2>

        <p>
          If I had one wish, it would be to relive every beautiful moment we
          have shared together.
        </p>

        <p>
          And if life gave me another chance, I would still choose you. Again.
          Again. And Forever.
        </p>

        <h1>Happy Birthday My Beautiful Queen ❤️</h1>
      </div>
    </section>
  );
}
