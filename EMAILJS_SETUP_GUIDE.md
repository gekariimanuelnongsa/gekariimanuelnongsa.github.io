# 📧 Cara Setup EmailJS untuk Contact Form

## Langkah 1: Buat Akun EmailJS

1. Buka https://www.emailjs.com/
2. Klik "Sign Up" dan daftar dengan email **gekariimanuel@gmail.com**
3. Buka email Anda dan klik link verifikasi
4. Login ke dashboard EmailJS

---

## Langkah 2: Connect Email Service

1. Di dashboard, klik **"Email Services"** di menu kiri
2. Klik **"Add New Service"**
3. Pilih **"Gmail"**
4. Klik **"Connect Account"** dan login dengan **gekariimanuel@gmail.com**
5. Berikan izin akses
6. **PENTING**: Copy dan simpan **Service ID** yang muncul (contoh: `service_abc123`)

---

## Langkah 3: Buat Email Template

1. Klik **"Email Templates"** di menu kiri
2. Klik **"Create New Template"**
3. Isi form template dengan:

**Template Name**: `Contact Form Gekari`

**Subject**:

```
Pesan dari Website - {{subject}}
```

**Content** (Body):

```
Nama: {{name}}
Email: {{email}}
No. Telp: {{phone}}
Subjek: {{subject}}

Pesan:
{{message}}

---
Dikirim dari Contact Form Website Gekari Imanuel Nongsa
```

4. Di bagian **Settings**, pastikan:
   - **To Email**: `gekariimanuel@gmail.com`
   - **From Name**: `Website Gekari Nongsa`
   - **Reply To**: `{{email}}` (agar bisa reply langsung ke pengirim)

5. Klik **"Save"**
6. **PENTING**: Copy dan simpan **Template ID** (contoh: `template_xyz789`)

---

## Langkah 4: Dapatkan Public Key

1. Klik **"Account"** di menu kiri
2. Klik tab **"General"**
3. Scroll ke bagian **"API Keys"**
4. **PENTING**: Copy dan simpan **Public Key** Anda (contoh: `abcdef1234567890`)

---

## Langkah 5: Update Code dengan Kredensial Anda

Buka file: `assets/js/form-validate.js`

Di baris 5-7, **ganti** 3 nilai ini dengan kredensial Anda:

```javascript
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY_HERE"; // Ganti dengan Public Key Anda
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID_HERE"; // Ganti dengan Service ID Anda
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID_HERE"; // Ganti dengan Template ID Anda
```

**Contoh setelah diganti:**

```javascript
const EMAILJS_PUBLIC_KEY = "abcdef1234567890";
const EMAILJS_SERVICE_ID = "service_abc123";
const EMAILJS_TEMPLATE_ID = "template_xyz789";
```

---

## Langkah 6: Test Contact Form

1. Buka website Anda
2. Pergi ke halaman **Kontak**
3. Isi form dengan data test
4. Klik **Kirim**
5. Tunggu pesan sukses muncul
6. Cek email **gekariimanuel@gmail.com** - seharusnya ada email masuk!

---

## ✅ Selesai!

Contact form Anda sekarang sudah bisa mengirim email! 🎉

**Free Plan EmailJS:**

- 200 email per bulan
- Sudah lebih dari cukup untuk website gereja

**Jika ada masalah:**

- Pastikan ketiga kredensial sudah benar
- Buka Console di browser (F12) untuk lihat error
- Pastikan internet connection stable
