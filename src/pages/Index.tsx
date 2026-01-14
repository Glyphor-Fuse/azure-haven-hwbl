import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/motion/Reveal';
import { SignatureInteraction } from '../components/effects/SignatureInteraction';

// Colors from CSS:
// --bg: #F9F7F2
// --accent: #B08D74
// --deep-sea: #1A2E35
// --text: #2C2C2C

const Index = () => {
  return (
    <div className="bg-[#F9F7F2] text-[#2C2C2C] font-sans min-h-screen overflow-x-hidden antialiased leading-relaxed">
      {/* Fonts Injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Montserrat:wght@100;300;600;900&display=swap');
        
        .font-serif {
          font-family: 'Cormorant Garamond', serif;
        }
        .font-sans {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full px-[5%] py-10 flex justify-between items-center z-50 mix-blend-difference text-white">
        <div className="font-serif text-[2rem] font-semibold tracking-[0.2em]">
          AURA
        </div>
        <div className="hidden md:flex gap-12 uppercase text-[0.7rem] tracking-[0.2em]">
          <a href="#" className="hover:opacity-70 transition-opacity">Retreats</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Spa</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Living</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="h-screen flex items-center justify-center relative overflow-hidden">
        <motion.img 
          src="https://images.unsplash.com/photo-1519449556851-5720b33024e7?q=80&w=2071&auto=format&fit=crop"
          alt="Mediterranean Coast"
          className="absolute w-[110%] h-[110%] object-cover -z-10 brightness-[0.85]"
          initial={{ scale: 1, x: 0, y: 0 }}
          animate={{ 
            scale: [1, 1.1], 
            x: ["0%", "-2%"], 
            y: ["0%", "-2%"] 
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "reverse", 
            ease: "linear" 
          }}
        />
        <div className="text-center text-white max-w-[800px] z-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-[0.8rem] font-light tracking-[0.5em] uppercase mb-4"
          >
            The Art of Being
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="font-serif text-[clamp(4rem,12vw,10rem)] leading-[0.9] font-light uppercase"
          >
            STILLNESS<br/>FOUND
          </motion.h1>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-[10vw] px-[5%] relative grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-0">
        <div className="md:col-start-2 md:col-end-7 z-10">
          <Reveal>
            <h2 className="font-serif text-[3rem] md:text-[4rem] leading-[1.1] mb-8 text-[#1A2E35] uppercase font-light">
              Where the Sea<br/>Greets the Soul
            </h2>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-[1.1rem] font-light max-w-[400px]">
              Nestled on the rugged southern limestone cliffs of Puglia, AURA is a sanctuary designed for profound reconnection. Here, time is measured only by the movement of the sun and the rhythm of the Adriatic tides.
            </p>
          </Reveal>
        </div>
        <div className="md:col-start-7 md:col-end-13 relative md:pl-[5vw]">
          <Reveal delay={0.6}>
            <img 
              src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop" 
              alt="Luxury stone architecture" 
              className="w-full h-[60vh] object-cover shadow-[50px_50px_100px_rgba(0,0,0,0.05)]"
            />
          </Reveal>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-[10vw] px-[5%] relative bg-[#1A2E35] text-[#E2DFD8]">
        <div className="mb-20 flex items-baseline gap-8">
          <span className="text-[1rem] font-thin opacity-50">01</span>
          <h2 className="font-serif text-[2rem] md:text-[3rem] font-light uppercase tracking-widest">Pathways to Clarity</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[ 
            { title: "Solar Yoga", desc: "Morning sessions on white stone terraces as the Mediterranean sun rises, focusing on fluid movement and breathwork.", btn: "Explore Program" },
            { title: "Elemental Detox", desc: "A holistic nutritional journey utilizing local organic harvests, sea minerals, and ancient Sicilian herbal wisdom.", btn: "View Menu" },
            { title: "Deep Silence", desc: "Guided meditative walks through centuries-old olive groves, designed to quiet the mind and heighten the senses.", btn: "Learn More" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="border-t border-[rgba(255,255,255,0.1)] pt-8"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="font-serif text-[2.5rem] mb-6 font-light uppercase">{item.title}</h3>
              <p className="text-[0.9rem] font-light opacity-80 mb-8">{item.desc}</p>
              <a 
                href="#" 
                className="inline-block px-10 py-4 border border-[#B08D74] text-[#B08D74] uppercase text-[0.7rem] tracking-[0.2em] transition-all duration-400 hover:bg-[#B08D74] hover:text-white"
              >
                {item.btn}
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Spa Preview Section */}
      <section className="py-[10vw] px-[5%] relative flex flex-col md:flex-row items-center gap-[10%]">
        <div className="max-w-[500px] mb-8 md:mb-0">
          <Reveal>
            <h2 className="font-serif text-[3.5rem] text-[#B08D74] mb-8 font-light uppercase">
              The Thalasso Ritual
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-light mb-12">
              Utilizing the curative powers of the Mediterranean, our spa offers heated seawater pools, volcanic mud wraps, and salt-air inhalation therapy in a cathedral of stone.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <a 
              href="#" 
              className="inline-block px-10 py-4 border border-[#1A2E35] text-[#1A2E35] uppercase text-[0.7rem] tracking-[0.2em] transition-all duration-400 hover:bg-[#1A2E35] hover:text-white"
            >
              Book a Treatment
            </a>
          </Reveal>
        </div>
        <motion.img 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Spa" 
          className="w-full md:w-[45%] h-[50vh] md:h-[70vh] object-cover rounded-t-[50%]"
        />
      </section>

      {/* Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vw] p-[2vw]">
        <div className="h-[80vh] overflow-hidden relative group">
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop" 
            alt="Italy View" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-[80vh] overflow-hidden relative group">
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?q=80&w=2072&auto=format&fit=crop" 
            alt="Pool" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-[60vh] md:col-span-2 overflow-hidden relative group">
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            src="https://images.unsplash.com/photo-1502675135487-e971002a6adb?q=80&w=2072&auto=format&fit=crop" 
            alt="Coastal Sunset" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="pt-32 pb-16 px-[5%] bg-white text-center">
        <Reveal>
          <h2 className="font-serif text-[6vw] font-light mb-16 text-[#1A2E35] uppercase">
            Begin Your Journey
          </h2>
        </Reveal>
        <p className="font-thin tracking-[0.3em] uppercase">
          Inquire for 2025/2026 Season
        </p>
        <div className="flex justify-center gap-16 mt-16 text-[0.7rem] uppercase tracking-[0.2em]">
          <a href="#" className="hover:text-[#B08D74] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[#B08D74] transition-colors">Journal</a>
          <a href="#" className="hover:text-[#B08D74] transition-colors">Newsletter</a>
        </div>
        <p className="mt-24 text-[0.6rem] opacity-40">
          &copy; 2025 AURA WELLNESS. PUGLIA, ITALIA.
        </p>
      </footer>
    </div>
  );
};

export default Index;
