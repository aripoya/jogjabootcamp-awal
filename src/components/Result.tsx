import type { ResultCategory, UserData } from '../types';
import type { Product } from '../services/api';

interface ResultProps {
  result: ResultCategory;
  score: number;
  userData: UserData;
  products: Product[];
}

export default function Result({ result, score, userData, products }: ResultProps) {
  const whatsappMessage = encodeURIComponent(
    `Halo Jogjabootcamp! Saya ${userData.name}, hasil quiz saya Level ${result.level} (${result.title}). Saya ingin konsultasi lebih lanjut.` 
  );
  const whatsappLink = `https://wa.me/6281234567890?text=${whatsappMessage}`;

  return (
    <div className="max-w-2xl mx-auto animate-fadeIn">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">{result.emoji}</div>
        <div className="inline-block px-4 py-1 bg-gold/20 text-gold font-semibold rounded-full text-sm mb-4">
          Level {result.level} • Skor: {score}/24
        </div>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-navy-primary mb-2">
          {result.subtitle}
        </h1>
        <h2 className="text-xl text-gold font-semibold">
          {result.title}
        </h2>
      </div>
      
      <div className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white rounded-2xl p-6 mb-8">
        <p className="text-lg leading-relaxed">
          Hai <strong>{userData.name}</strong>! 🎉
        </p>
        <p className="mt-3 text-white/90 leading-relaxed">
          {result.message}
        </p>
      </div>
      
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
        <h3 className="font-heading text-xl font-semibold text-navy-primary mb-4">
          📋 Rekomendasi untuk Anda:
        </h3>
        <div className="space-y-3">
          {result.recommendations.map((rec, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-2xl">{rec.icon}</span>
              <span className="text-gray-700">{rec.text}</span>
            </div>
          ))}
        </div>
      </div>
      
      {products.length > 0 && (
        <div className="bg-gradient-to-br from-gold/10 to-gold/5 border-2 border-gold/30 rounded-2xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🎁</span>
            <h3 className="font-heading text-2xl font-bold text-navy-primary">
              Hadiah Spesial untuk Anda!
            </h3>
          </div>
          <p className="text-gray-700 mb-6">
            Sebagai apresiasi telah mengikuti quiz ini, kami berikan <strong className="text-gold">produk digital GRATIS</strong> yang disesuaikan dengan level bisnis Anda:
          </p>
          <div className="space-y-4">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border-2 border-gold/20 hover:border-gold hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-navy-primary mb-2">
                      📦 {product.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">
                      {product.description}
                    </p>
                  </div>
                  <a
                    href={product.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 bg-gradient-to-r from-gold to-gold-hover text-navy-primary font-bold px-6 py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
                  >
                    ⬇️ Download
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center">
            💡 Produk ini sudah dikirim juga ke email Anda: <strong>{userData.email}</strong>
          </p>
        </div>
      )}
      
      <div className="bg-gold/10 border-l-4 border-gold rounded-r-lg p-5 mb-8">
        <p className="text-navy-primary italic leading-relaxed">
          "Kurnia Sari butuh 6 tahun dari website sederhana sampai 10 outlet dengan sistem digital terintegrasi. Transformasi adalah marathon, bukan sprint."
        </p>
        <p className="text-gold font-semibold mt-2">— Jogjabootcamp</p>
      </div>
      
      <div className="space-y-4">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-gradient-to-r from-gold to-gold-hover text-navy-primary font-bold text-lg py-4 rounded-xl text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          💬 Konsultasi via WhatsApp
        </a>
        <a
          href="https://jogjabootcamp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-navy-primary text-white font-bold text-lg py-4 rounded-xl text-center hover:bg-navy-secondary transition-colors"
        >
          🎓 Lihat Kelas di Jogjabootcamp
        </a>
      </div>
      
      <div className="text-center mt-8 pt-8 border-t border-gray-200">
        <p className="text-gray-600 mb-4">Bagikan quiz ini ke teman pengusaha:</p>
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => {
              navigator.clipboard.writeText('https://awal.jogjabootcamp.com');
              alert('Link berhasil dicopy!');
            }}
            className="px-6 py-2 border-2 border-navy-primary text-navy-primary rounded-lg hover:bg-navy-primary hover:text-white transition-colors"
          >
            📋 Copy Link
          </button>
        </div>
      </div>
    </div>
  );
}
