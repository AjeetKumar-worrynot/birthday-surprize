import { useState } from 'react';
import Confetti from 'react-confetti';
import { FaGift, FaPlayCircle, FaHeart } from 'react-icons/fa';
import birthdayVideo from '../assets/videos/birthday-surprise.mp4';
import photo1 from '../assets/photo1.jpeg';
import photo2 from '../assets/photo2.jpeg';
import photo3 from '../assets/photo3.jpeg';
import photo4 from '../assets/photo4.jpeg';
import photo5 from '../assets/photo5.jpeg';
import photo6 from '../assets/photo6.jpeg';
import photo7 from '../assets/photo7.jpeg';
import photo8 from '../assets/photo8.jpeg';
import photo9 from '../assets/photo9.jpeg';
import photo10 from '../assets/photo10.jpeg';

export default function FinalGift() {
  const [open, setOpen] = useState(false);

  return (
    <section className="gift">
      {open && (
        <Confetti
          recycle={true}
          numberOfPieces={400}
        />
      )}

      {!open && (
        <div className="giftBoxContainer">
          <button
            className="giftBtn"
            onClick={() => setOpen(true)}
          >
            <FaGift />
            <span>Open Your Birthday Surprise</span>
          </button>
        </div>
      )}

      {open && (
        <div className="surpriseContainer">
          <div className="videoCard">
            <div className="videoHeader">
              <FaPlayCircle />
              <h2>A Special Video Just For You</h2>
            </div>

            <video
              controls
              autoPlay
              muted
              playsInline
              className="birthdayVideo"
            >
              <source
                src={birthdayVideo}
                type="video/mp4"
              />
            </video>
          </div>

          <div className="photoCollage">
            <img
              src={photo1}
              alt="Memory 1"
            />
            <img
              src={photo7}
              alt="Memory 7"
            />
            <img
              src={photo8}
              alt="Memory 8"
            />
            <img
              src={photo3}
              alt="Memory 3"
            />
            <img
              src={photo5}
              alt="Memory 5"
            />
            <img
              src={photo6}
              alt="Memory 6"
            />
            <img
              src={photo9}
              alt="Memory 9"
            />
            <img
              src={photo10}
              alt="Memory 10"
            />
          </div>

          <div className="finalLoveMessage">
            <FaHeart className="loveIcon" />

            <h1>Happy Birthday My Beautiful Queen</h1>

            <h3>Thank You For Every Beautiful Memory</h3>

            <h2>You Will Always Be My Wife</h2>
          </div>
        </div>
      )}
    </section>
  );
}
