import type { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    encouragement: "💡 Setiap perjalanan 1000 km dimulai dari langkah pertama. Tidak masalah Anda baru bermimpi atau sudah berjalan — yang penting Anda di sini sekarang!",
    question: "Apa status usaha Anda saat ini?",
    options: [
      { text: "Masih ide/rencana, belum mulai sama sekali", score: 0 },
      { text: "Baru mulai usaha (< 1 tahun)", score: 1 },
      { text: "Usaha sudah berjalan 1-3 tahun", score: 2 },
      { text: "Usaha sudah berjalan > 3 tahun", score: 3 },
    ],
  },
  {
    id: 2,
    encouragement: "💡 Belum punya online presence? Tidak apa-apa! Kurnia Sari juga mulai dari website sederhana. Yang penting adalah kemauan untuk mulai.",
    question: "Bagaimana kehadiran online bisnis Anda?",
    options: [
      { text: "Belum ada sama sekali (belum punya usaha / offline total)", score: 0 },
      { text: "Baru WhatsApp pribadi untuk jualan", score: 1 },
      { text: "Sudah punya WhatsApp Business / media sosial aktif", score: 2 },
      { text: "Sudah punya website / toko online (Shopee, Tokopedia, dll)", score: 3 },
    ],
  },
  {
    id: 3,
    encouragement: "💡 Jujur soal pencatatan itu butuh keberanian. Banyak pengusaha sukses mengaku dulu juga tidak catat apa-apa. Tapi mereka berubah — dan Anda juga bisa!",
    question: "Bagaimana Anda mencatat keuangan bisnis?",
    options: [
      { text: "Tidak dicatat / campur dengan uang pribadi", score: 0 },
      { text: "Dicatat manual di buku / notes HP", score: 1 },
      { text: "Pakai Excel / Google Sheets", score: 2 },
      { text: "Pakai aplikasi/software akuntansi", score: 3 },
    ],
  },
  {
    id: 4,
    encouragement: "💡 Banyak yang omset besar tapi bingung ke mana uangnya. Kalau Anda belum tahu profit Anda — itu wajar! Justru itu yang akan kita perbaiki bersama.",
    question: "Apakah Anda tahu berapa profit bersih bisnis Anda per bulan?",
    options: [
      { text: "Tidak tahu / belum punya usaha", score: 0 },
      { text: "Kira-kira tahu, tapi tidak pasti", score: 1 },
      { text: "Tahu angkanya, tapi hitungnya manual", score: 2 },
      { text: "Tahu pasti, ada laporan rutin setiap bulan", score: 3 },
    ],
  },
  {
    id: 5,
    encouragement: "💡 Semua masih di kepala Anda? Itu artinya bisnis belum bisa jalan tanpa Anda. Tenang, kita akan bantu Anda membangun sistem — step by step.",
    question: "Bagaimana operasional bisnis Anda berjalan?",
    options: [
      { text: "Belum ada usaha / semua masih saya sendiri", score: 0 },
      { text: "Ada yang bantu, tapi tidak ada SOP tertulis", score: 1 },
      { text: "Ada SOP sederhana, tapi belum pakai sistem digital", score: 2 },
      { text: "Sudah pakai sistem (POS, inventory, dll)", score: 3 },
    ],
  },
  {
    id: 6,
    encouragement: "💡 Belum pernah iklan? Tidak masalah! Lebih baik belajar dulu daripada buang uang tanpa strategi. Di sini kita mulai dari fundamental.",
    question: "Bagaimana aktivitas digital marketing Anda?",
    options: [
      { text: "Belum ada / tidak tahu caranya", score: 0 },
      { text: "Posting di sosmed kadang-kadang, belum konsisten", score: 1 },
      { text: "Aktif posting, kadang pakai iklan berbayar", score: 2 },
      { text: "Ada strategi konten rutin + iklan dengan target jelas", score: 3 },
    ],
  },
  {
    id: 7,
    encouragement: "💡 Data tercecer di mana-mana? Anda tidak sendiri! Ini masalah umum. Kabar baiknya: ini bisa diperbaiki dengan sistem yang tepat.",
    question: "Bagaimana kondisi data dan sistem bisnis Anda?",
    options: [
      { text: "Belum ada data / belum mulai usaha", score: 0 },
      { text: "Data ada tapi tercecer (WA, notes, kertas)", score: 1 },
      { text: "Data terkumpul tapi di banyak aplikasi berbeda", score: 2 },
      { text: "Data terintegrasi dalam satu sistem", score: 3 },
    ],
  },
  {
    id: 8,
    encouragement: "💡 Belum pernah pakai AI? Justru ini peluang besar! Anda akan belajar cara pakai AI untuk bisnis — dari nol sampai mahir.",
    question: "Apakah Anda sudah memanfaatkan AI (seperti ChatGPT) untuk bisnis?",
    options: [
      { text: "Belum pernah / tidak tahu caranya", score: 0 },
      { text: "Pernah coba-coba, tapi belum rutin", score: 1 },
      { text: "Pakai untuk beberapa hal (konten, ide, dll)", score: 2 },
      { text: "Sudah rutin pakai AI untuk produktivitas bisnis", score: 3 },
    ],
  },
];
