import {
  FaHeart,
  FaCrown,
  FaHandsHelping,
  FaSmile,
  FaStar,
  FaHome,
} from 'react-icons/fa';

export default function LoveLetter() {
  return (
    <section className="letter">
      {' '}
      <div className="letterHeader">
        {' '}
        <FaCrown className="titleIcon" /> <h2>To My Beautiful Queen</h2>{' '}
      </div>
      <p className="intro">
        Happy Birthday to the most precious person in my life.
      </p>
      <p>
        There are many people who come into our lives, but very few become our
        comfort, our strength, our peace, and our home.
        <strong> You are all of that and more to me.</strong>
      </p>
      <div className="lovePoints">
        <div className="point">
          <FaHome />
          <span>You became my home.</span>
        </div>

        <div className="point">
          <FaHeart />
          <span>You became my happiness.</span>
        </div>

        <div className="point">
          <FaHandsHelping />
          <span>You became my strength.</span>
        </div>

        <div className="point">
          <FaStar />
          <span>You became my guiding light.</span>
        </div>
      </div>
      <p>
        You are not only the love of my life; you are also the person who cares
        for me with a warmth that often reminds me of a second mother.
      </p>
      <p>
        The way you worry about me when I am tired, the way you encourage me
        when I feel weak, the way you celebrate my smallest achievements, and
        the way you stand beside me during difficult times are gifts I can never
        fully repay.
      </p>
      <div className="quoteBox">
        <p>When I forget to take care of myself, you remind me.</p>
        <p>When I lose confidence, you believe in me.</p>
        <p>When life becomes difficult, you become my strength.</p>
      </div>
      <p>
        Your love is not just seen in grand moments. It is felt in the smallest
        things:
      </p>
      <ul className="loveList">
        <li>Your thoughtful messages</li>
        <li>Your genuine concern</li>
        <li>Your endless patience</li>
        <li>Your kindness and understanding</li>
        <li>Your beautiful heart</li>
      </ul>
      <p>Thank you for every smile that brightened my darkest days.</p>
      <p>Thank you for every hug that brought me peace.</p>
      <p>Thank you for every memory that became a treasure.</p>
      <p>Thank you for loving me exactly as I am.</p>
      <div className="ending">
        <FaHeart className="endingHeart" />

        <h3>Yesterday • Today • Tomorrow • Forever</h3>

        <h1>I Love You More Than Words Can Ever Express</h1>
      </div>
    </section>
  );
}
