import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function RamBarkhaneLuxury() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [collectionOpen, setCollectionOpen] = useState(false);

  const artworks = [
    {
      title: "Resurgence – A Strong Comeback",
      medium: "Acrylic on Canvas",
      dimensions: "36 x 48 in",
      price: "$12,000",
      img: "/art1.jpg",
    },
    {
      title: "Whispers of Infinity",
      medium: "Mixed Media on Canvas",
      dimensions: "40 x 40 in",
      price: "$9,500",
      img: "/art2.jpg",
    },
    {
      title: "Golden Horizon",
      medium: "Acrylic & Gold Leaf",
      dimensions: "30 x 40 in",
      price: "$15,000",
      img: "/art3.jpg",
    },
  ];

  return (
    <div className="bg-black text-white font-serif">
      {/* Banner Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Slideshow placeholder */}
        <div className="absolute inset-0 bg-[url('/banner1.jpg')] bg-cover bg-center animate-pulse opacity-70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wide">
            Where Art Meets Luxury
          </h1>
          <p className="text-xl md:text-2xl italic">
            Original Abstract Masterpieces of Ram Barkhane
          </p>
        </div>
      </section>

      {/* Artist Portrait & Statement */}
      <section className="py-16 text-center max-w-3xl mx-auto px-6">
        <img
          src="/portrait.jpg"
          alt="Ram Barkhane"
          className="mx-auto mb-6 rounded-full w-48 h-48 object-cover border-4 border-gray-600 shadow-lg"
        />
        <p className="text-lg md:text-xl leading-relaxed">
          Transforming emotions into timeless abstract masterpieces — bespoke art
          for the world's most refined homes, offices, and private estates.
        </p>
      </section>

      {/* Navigation */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => setCollectionOpen(!collectionOpen)}
          className="bg-white text-black px-4 py-2 rounded-2xl shadow-lg font-medium"
        >
          View the Collection
        </button>
        {collectionOpen && (
          <div className="mt-2 bg-gray-900 border border-gray-700 rounded-lg p-4 text-left space-y-2">
            <a href="#masterpiece" className="block hover:text-gray-300">
              The Masterpiece Collection
            </a>
            <a href="#limited" className="block hover:text-gray-300">
              Limited Edition Luxe Collection
            </a>
            <a href="#modern" className="block hover:text-gray-300">
              Modern Elegance Collection
            </a>
          </div>
        )}
      </div>

      <div className="fixed top-6 right-6 z-50">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Hamburger Menu */}
      {menuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          className="fixed inset-y-0 right-0 w-80 bg-gray-950 p-8 z-40 space-y-8 overflow-y-auto"
        >
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            Modern Visionary | Creator of Cracturism & Floating Dotism | Master of
            Abstract Elegance
            <br />
            <br />
            Ram Barkhane is celebrated as a modern master of abstract emotion,
            whose pioneering styles—Cracturism and Floating Dotism—have redefined
            the language of contemporary art. Since 2011, he has devoted his life
            to creating artworks that are not merely paintings, but luxurious
            statements of sophistication, designed to elevate the most refined
            living and working spaces.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Studio</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            [High-quality studio photography + 1000 words of content on creative
            process, methodology, philosophy, journey, evolution, and behind-the-scenes
            insights.]
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Contact</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Ram Barkhane <br />
            E6/95 Shalimar Homes Flat No. 6 <br />
            Arera Colony, Bhopal <br />
            Madhya Pradesh, India <br />
            PIN- 462016 <br />
            Email: rambarkhane9371@gmail.com
          </p>
        </motion.div>
      )}

      {/* Featured Collection Gallery */}
      <section id="masterpiece" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Collection</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {artworks.map((art, idx) => (
            <div key={idx} className="space-y-4">
              <img
                src={art.img}
                alt={art.title}
                className="rounded-2xl shadow-lg w-full object-cover"
              />
              <h3 className="text-2xl font-semibold">{art.title}</h3>
              <p className="text-gray-400 text-sm">{art.medium}</p>
              <p className="text-gray-400 text-sm">{art.dimensions}</p>
              <p className="text-lg">{art.price}</p>
              <a
                href="https://wa.me/9200636667"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-6 py-2 rounded-2xl font-medium shadow hover:bg-gray-200"
              >
                Purchase
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
