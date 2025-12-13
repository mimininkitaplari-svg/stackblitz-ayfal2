export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f0f0f] text-white px-4">
      
      <img
        src="/sphere.png"
        alt="sphere"
        className="w-48 h-48 mb-6 opacity-90"
      />

      <h1 className="text-3xl font-semibold mb-8 tracking-wide">
        ayfal-app
      </h1>

      <button className="px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition">
        Başla
      </button>

    </div>
  );
}
