export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-6xl font-bold">
          Turn Long Videos Into Viral Shorts
        </h1>

        <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
          Upload any video and let AI find the best moments,
          generate captions, and create viral-ready clips
          automatically.
        </p>

        <div className="mt-10">
          <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold">
            Start Free
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-800 rounded-xl">
            <h3 className="text-xl font-bold">AI Clip Detection</h3>
            <p className="mt-3 text-gray-400">
              Automatically find the most engaging moments.
            </p>
          </div>

          <div className="p-6 border border-gray-800 rounded-xl">
            <h3 className="text-xl font-bold">Auto Captions</h3>
            <p className="mt-3 text-gray-400">
              Generate stylish captions instantly.
            </p>
          </div>

          <div className="p-6 border border-gray-800 rounded-xl">
            <h3 className="text-xl font-bold">One Click Export</h3>
            <p className="mt-3 text-gray-400">
              Export TikTok, Reels and Shorts formats.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}