function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-black/40 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        <h1 className="text-3xl font-bold">
          PromptCraft <span className="text-blue-500">AI</span>
        </h1>

        <button className="bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
          Generate
        </button>

      </div>
    </nav>
  );
}

export default Navbar;