# 🔧 Troubleshooting YouTube Video Popup

## Masalah Saat Ini

Video YouTube tidak bisa di-load dalam popup dengan error: "Terjadi error. Coba lagi nanti"

## Kemungkinan Penyebab

### 1. **Video Embed Restrictions** (Paling Sering)

YouTube memiliki setting yang mengontrol apakah video bisa di-embed atau tidak.

**Solusi:**

1. Buka video di YouTube: https://youtu.be/_uZ_2XwMsOI
2. Klik tombol **"Share"** di bawah video
3. Klik **"Embed"**
4. Jika muncul pesan error atau tidak ada opsi embed, berarti video ini **tidak bisa di-embed**

**Jika tidak bisa di-embed:**

- Video nya harus diupload ulang dengan settings berbeda, ATAU
- Gunakan video lain yang allow embedding

### 2. **Video Privacy Settings**

Video harus **Public** atau **Unlisted**, tidak boleh **Private**

**Cara cek:**

1. Buka YouTube Studio
2. Pilih video tersebut
3. Pastikan Visibility = **Public** atau **Unlisted**

### 3. **YouTube "Made for Kids" Restriction**

Video yang ditandai "Made for Kids" tidak bisa di-embed di website eksternal

**Cara fix:**

1. YouTube Studio > Video > Edit
2. Ubah "Audience" setting ke **Not made for kids**
3. Save

## Solusi Cepat: Test dengan Video Lain

Untuk memastikan popup nya berfungsi, coba ganti dengan video YouTube yang pasti bisa di-embed:

**Video Test (Video Gekari yang lain):**
Pakai video dari channel @gekari_imanuel_nongsa yang lain yang pastikan:

- ✅ Public/Unlisted
- ✅ Not made for kids
- ✅ Embedding allowed

## Cara Ganti Video

Ganti URL di `index_2.html` baris 185:

```html
<a
  href="https://www.youtube.com/embed/VIDEO_ID_BARU?autoplay=1"
  class="video-play-btn popup-youtube"
></a>
```

Ganti `VIDEO_ID_BARU` dengan ID video yang baru.

## Next Steps

1. **Cek video settings** di YouTube Studio
2. **Test embed** di YouTube.com/embed/VIDEO_ID secara langsung di browser
3. **Jika masih error**, kasih tau saya dan coba video YouTube lain
