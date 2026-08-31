// Tunggu hingga seluruh elemen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  const themeBtn = document.getElementById('themeToggle');
  const root = document.documentElement;
  const swatches = document.querySelectorAll('.swatch');

  // Pengecekan: Jika elemen tidak ditemukan, tampilkan error di Console
  if (!toggle || !links || !themeBtn || !root || swatches.length === 0) {
    console.error("Gagal memuat elemen! Pastikan ID di HTML dan JS cocok, dan file script.js terhubung dengan benar.");
    return;
  }

  // 1. Mobile Menu Toggle
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
    });
  });

  // 2. Dark/Light Mode
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let theme = prefersDark ? 'dark' : 'light';
  root.setAttribute('data-theme', theme);

  themeBtn.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', theme);
  });

  // 3. Color Palette
  swatches.forEach(sw => {
    sw.addEventListener('click', () => {
      const palette = sw.dataset.palette;
      
      // Jika amber, hapus atribut data-palette agar kembali ke warna default
      root.setAttribute('data-palette', palette === 'amber' ? '' : palette);
      
      // Update status tombol yang aktif
      swatches.forEach(s => s.setAttribute('aria-pressed', s === sw ? 'true' : 'false'));
    });
  });
});