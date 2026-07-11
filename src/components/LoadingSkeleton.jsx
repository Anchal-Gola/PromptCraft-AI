function LoadingSkeleton() {
  return (
    <section className="max-w-5xl mx-auto mt-12 px-6 pb-20">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 animate-pulse">

        <div className="h-[450px] rounded-2xl bg-zinc-800"></div>

        <div className="flex justify-end gap-4 mt-6">
          <div className="w-32 h-12 bg-zinc-800 rounded-xl"></div>
          <div className="w-32 h-12 bg-zinc-800 rounded-xl"></div>
        </div>

      </div>
    </section>
  );
}

export default LoadingSkeleton;