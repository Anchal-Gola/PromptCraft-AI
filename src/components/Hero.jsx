function Hero() {
  return (
    <section className="max-w-5xl mx-auto text-center pt-24 px-6">
      <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">
        ✨ AI Powered Image Generation
      </span>

      <h1 className="text-6xl md:text-7xl font-extrabold mt-8 leading-tight">
        Turn Your
        <span className="text-blue-500"> Imagination </span>
        Into Art
      </h1>

      <p className="mt-8 text-zinc-400 text-lg max-w-2xl mx-auto">
        Create realistic, anime, fantasy and digital artwork in seconds using AI.
      </p>

      <div className="mt-10 flex justify-center gap-4">
        <button className="bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
          Start Creating
        </button>

        <button className="border border-zinc-700 px-8 py-4 rounded-xl hover:bg-zinc-900 transition">
          Explore Gallery
        </button>
      </div>
    </section>
  );
}

export default Hero;