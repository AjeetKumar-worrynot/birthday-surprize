import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero">
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        Happy Birthday My Queen ❤️
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        Today is not just your birthday...
        <br />
        It is a celebration of the most beautiful person in my life.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="heroQuote"
      >
        "Every love story is beautiful,
        <br />
        but ours is special"
      </motion.div>
    </section>
  );
}
