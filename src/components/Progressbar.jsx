function ProgressBar({ progress }) {
  return (
    <div className="max-w-5xl mx-auto mt-8 px-6">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">

        <div className="flex justify-between mb-3">
          <p className="text-blue-400 font-medium">
           {/* Generating your masterpiece... */}
          </p>

          <span className="text-sm text-zinc-400">
            {progress}%
          </span>
        </div>

        <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-zinc-500 text-sm mt-3">
          Please wait while AI creates your image...
        </p>

      </div>
    </div>
  );
}

export default ProgressBar;