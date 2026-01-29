# Perbaikan Slider Mobile - Teks Hilang Saat Scroll

## Masalah yang Ditemukan

Teks dalam slider hilang saat scroll pada mobile karena beberapa faktor:

1. **Owl Carousel Animation** - JavaScript mengatur opacity menjadi 0 saat transisi slide (file `main.js` baris 136-157)
2. **Overflow Hidden** - Owl Carousel menggunakan `overflow: hidden` pada `.owl-stage-outer` yang memotong konten
3. **Display Table-Cell** - Properti `display: table-cell` dengan `vertical-align: middle` tidak stabil pada mobile saat scroll

## Solusi yang Diterapkan

### 1. Override Owl Carousel Styles (responsive.css)

```css
/* Force overflow visible untuk mencegah konten terpotong */
.homepage-slider,
.homepage-slider .owl-stage-outer,
.homepage-slider .owl-stage,
.homepage-slider .owl-item,
.homepage-slider .single-homepage-slider {
  overflow: visible !important;
}
```

### 2. Ubah Display ke Flexbox

```css
/* Ganti dari table-cell ke flexbox yang lebih stabil */
.homepage-slider .hero-text {
  display: flex !important;
  align-items: center;
  justify-content: center;
  min-height: 100vh !important;
}

.homepage-slider .hero-text-tablecell {
  display: block !important;
}
```

### 3. Force Opacity & Visibility

```css
/* Paksa semua teks tetap terlihat, override animasi Owl */
.homepage-slider .hero-text-tablecell .subtitle,
.homepage-slider .hero-text-tablecell h1,
.homepage-slider .hero-btns,
.homepage-slider .hero-text-tablecell *,
.homepage-slider .hero-text * {
  opacity: 1 !important;
  visibility: visible !important;
  transform: none !important;
}
```

## Cara Verifikasi

1. Buka website di browser mobile atau gunakan Chrome DevTools (F12)
2. Toggle device emulation (icon smartphone di DevTools)
3. Pilih device mobile (contoh: iPhone 12 Pro)
4. Refresh halaman
5. Scroll ke bawah perlahan
6. **Hasil yang diharapkan**: Teks slider tetap terlihat dengan jelas, tidak hilang atau fade out

## Catatan Teknis

- Fix ini spesifik untuk viewport mobile (`@media max-width: 767px`)
- Tidak mempengaruhi tampilan desktop
- Menggunakan `!important` untuk memastikan override dari Owl Carousel berhasil
- Transform di-disable untuk mencegah rendering issue yang menyebabkan teks menghilang

## File yang Diubah

`assets/css/responsive.css` - Baris 472-510
