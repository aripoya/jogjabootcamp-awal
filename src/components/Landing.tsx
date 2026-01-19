interface LandingProps {
  onStart: () => void;
}

export default function Landing({ onStart }: LandingProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-primary via-navy-secondary to-navy-primary flex items-center justify-center p-4">
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-gold/20 rounded-full" />
      <div className="absolute bottom-20 right-10 w-48 h-48 border-2 border-white/10 rounded-full" />
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="inline-block px-4 py-2 bg-gold/20 border border-gold/30 rounded-full mb-6">
          <span className="text-gold font-semibold text-sm tracking-wide">
            🎯 QUIZ GRATIS • 3 MENIT
          </span>
        </div>
        
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Di Mana Posisi <span className="text-gold">Bisnis Anda</span> Sekarang?
        </h1>
        
        <p className="text-xl text-white/80 mb-8 leading-relaxed">
          Quiz singkat 8 pertanyaan untuk mengetahui langkah transformasi digital yang tepat untuk Anda.
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 text-left border border-white/20">
          <h3 className="text-gold font-semibold text-lg mb-3">🎯 Jujur adalah Langkah Pertama</h3>
          <p className="text-white/90 leading-relaxed">
            Tidak ada jawaban benar atau salah. Yang ada hanya jawaban <strong>JUJUR</strong>.
          </p>
          <p className="text-white/80 mt-3 leading-relaxed">
            Mengakui posisi Anda saat ini bukan kelemahan — ini adalah <strong className="text-gold">keberanian pertama</strong> untuk bergerak maju. Setiap pengusaha sukses pernah ada di titik nol.
          </p>
          <p className="text-white/80 mt-3 leading-relaxed">
            Kami di sini bukan untuk menghakimi, tapi untuk <strong>membantu Anda naik ke level berikutnya</strong>, di mana pun Anda mulai hari ini.
          </p>
        </div>
        
        <button
          onClick={onStart}
          className="bg-gradient-to-r from-gold to-gold-hover text-navy-primary font-bold text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          Mulai Quiz →
        </button>
        
        <div className="flex justify-center gap-8 mt-10 text-white/60 text-sm">
          <span>✓ Gratis 100%</span>
          <span>✓ Tanpa login</span>
          <span>✓ Hasil instan</span>
        </div>
      </div>
    </div>
  );
}
