import type { ResultCategory } from '../types';

export const resultCategories: ResultCategory[] = [
  {
    level: 0,
    emoji: "🌱",
    title: "Belum Mulai",
    subtitle: "Anda adalah Calon Pengusaha!",
    message: "Anda punya mimpi dan keberanian untuk memulai. Itu sudah modal besar! Sekarang saatnya mengubah ide menjadi aksi. Tidak perlu langsung sempurna — mulai kecil, validasi, dan bertumbuh.",
    recommendations: [
      { icon: "📚", text: "Materi: Bangun Pondasi Bisnis dari Nol" },
      { icon: "✅", text: "Checklist: Validasi Ide Bisnis" },
      { icon: "💬", text: "Gabung komunitas calon pengusaha" },
    ],
    minScore: 0,
    maxScore: 4,
  },
  {
    level: 1,
    emoji: "🌿",
    title: "Baru Mulai",
    subtitle: "Anda Sudah Berani Memulai!",
    message: "Banyak orang hanya bermimpi, Anda sudah ACTION. Itu luar biasa! Fokus Anda sekarang: stabilkan operasional dan mulai pencatatan. Jangan dulu mikir scale — kuatkan dulu fondasi.",
    recommendations: [
      { icon: "📚", text: "Materi: Pencatatan Keuangan untuk Pemula" },
      { icon: "✅", text: "Checklist: Pondasi Bisnis Tahun Pertama" },
      { icon: "💬", text: "Konsultasi: Review bisnis Anda" },
    ],
    minScore: 5,
    maxScore: 8,
  },
  {
    level: 2,
    emoji: "🪴",
    title: "Sudah Jalan (Offline)",
    subtitle: "Bisnis Anda Sudah Terbukti!",
    message: "Anda sudah bertahan dan berjalan — itu bukti bisnis Anda punya value. Sekarang saatnya hadir online. Bukan untuk ganti offline, tapi untuk MENGUATKAN. Ingat: digital adalah asuransi bisnis.",
    recommendations: [
      { icon: "📚", text: "Materi: Go Digital Pertama untuk UMKM" },
      { icon: "✅", text: "Checklist: Langkah Pertama Hadir Online" },
      { icon: "🛠️", text: "Tools: Setup WhatsApp Business + Google Business" },
    ],
    minScore: 9,
    maxScore: 12,
  },
  {
    level: 3,
    emoji: "🌳",
    title: "Digital Marketing Aktif",
    subtitle: "Anda Sudah Go Digital!",
    message: "Hebat! Anda sudah jualan online dan aktif di digital. Tapi... apakah pencatatan dan sistem Anda sudah rapi? Banyak yang jago marketing tapi profit bocor karena tidak ada sistem. Saatnya rapikan operasional!",
    recommendations: [
      { icon: "📚", text: "Materi: Digitalisasi Operasional Bisnis" },
      { icon: "🛠️", text: "Tools: NotaKu untuk pencatatan otomatis" },
      { icon: "✅", text: "Checklist: Audit Sistem Operasional" },
    ],
    minScore: 13,
    maxScore: 16,
  },
  {
    level: 4,
    emoji: "🌲",
    title: "Full Digital, Belum Efisien",
    subtitle: "Anda Sudah Advanced!",
    message: "Bisnis Anda sudah digital dari hulu ke hilir. Impressive! Tantangan Anda sekarang: efisiensi. Bagaimana AI bisa membantu Anda bekerja lebih cepat dan lebih cerdas? Saatnya naik level!",
    recommendations: [
      { icon: "📚", text: "Materi: AI untuk Bisnis - Produktivitas 10x" },
      { icon: "🛠️", text: "Tools: Integrasi & Otomasi dengan AI" },
      { icon: "💬", text: "Mastermind: Diskusi dengan pengusaha digital lain" },
    ],
    minScore: 17,
    maxScore: 20,
  },
  {
    level: 5,
    emoji: "🚀",
    title: "Siap Scale",
    subtitle: "Anda Siap Terbang!",
    message: "Sistem rapi, digital matang, AI sudah dipakai. Anda di top tier! Pertanyaannya sekarang: mau scale ke mana? Ekspansi produk? Buka cabang? Franchise? Mari diskusi strategi pertumbuhan Anda.",
    recommendations: [
      { icon: "💬", text: "Konsultasi 1-on-1 dengan praktisi" },
      { icon: "👥", text: "Mastermind Group eksklusif" },
      { icon: "📚", text: "Materi: Scaling Strategy untuk UMKM Digital" },
    ],
    minScore: 21,
    maxScore: 24,
  },
];

export const getResultByScore = (score: number): ResultCategory => {
  return resultCategories.find(
    (cat) => score >= cat.minScore && score <= cat.maxScore
  ) || resultCategories[0];
};
