import Hero from './components/Hero';
import LoveLetter from './components/LoveLetter';
import MemoryTimeline from './components/MemoryTimeline';
import FinalGift from './components/FinalGift';

function App() {
  return (
    <>
      <div className="hearts">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${8 + Math.random() * 8}s`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>
      <Hero />
      <LoveLetter />
      <MemoryTimeline />
      <FinalGift />
    </>
  );
}

export default App;
