# Sanggar Pesona Budaya — Website Company Profile

Website profil resmi **Sanggar Pesona Budaya**, sebuah sanggar seni dan budaya tradisional yang berbasis di **Kota Metro, Lampung**.

Website ini dikembangkan sebagai website statis (*front-end only*) yang elegan, responsif, berkecepatan tinggi, dan dapat langsung dijalankan secara lokal di browser mana pun tanpa memerlukan instalasi database, server backend, atau dependensi build tool yang rumit.

---

## 1. Identitas Visual & Desain

- **Warna Utama:** Marun (`#680E1D`) — melambangkan keanggunan dan kewibawaan budaya.
- **Warna Aksen:** Emas (`#CFA83B`) — melambangkan kemegahan tradisi tapis dan mahkota Siger Lampung.
- **Warna Latar:** Putih Gading / Cream (`#FAF7F2`) — memberikan nuansa hangat dan ramah pembaca.
- **Warna Kontras:** Hitam / Charcoal (`#1C1917`) — ketegasan tipografi dan kontras visual.
- **Tipografi:**
  - Heading: *Playfair Display* (Serif bernuansa klasik, artistik, dan berbudaya).
  - Body Text: *Plus Jakarta Sans* (Sans-serif modern, bersih, dan sangat mudah dibaca).

---

## 2. Fitur-Fitur Utama (Sesuai PRD)

| Kode FR | Fitur | Keterangan |
|---|---|---|
| **FR-01** | Navigasi Halus | Menu sticky dengan efek glassmorphism, *scroll spy* otomatis, dan navigasi ramah keyboard. |
| **FR-02** | Hero Banner | Tampilan visual nama sanggar, slogan budaya, ornamen Tapis Lampung, serta *call-to-action* (CTA) ganda. |
| **FR-03** | Profil Sanggar | Informasi profil sanggar, sejarah, dan 4 pilar dedikasi pelestarian seni budaya di Metro, Lampung. |
| **FR-04** | Daftar Layanan | 4 layanan utama (Pertunjukan Tari, Sewa Baju Adat & Profesi, Kelas Pelatihan, Sewa Baju Adat & Profesi Anak) lengkap dengan tombol pesan WhatsApp instan per layanan. |
| **FR-05** | Galeri Video | Grid pemutar video HTML5 responsif yang menampilkan rekaman pementasan tari dan kegiatan sanggar (video1.mp4 s/d video4.mp4). |
| **FR-07** | Integrasi WhatsApp | Tombol CTA langsung dan formulir konsultasi interaktif yang otomatis menyusun pesan rapi untuk dikirim ke WhatsApp pengelola. |
| **FR-08** | Media Sosial | Tautan resmi akun Instagram Sanggar Pesona Budaya dengan atribut keamanan `noopener noreferrer`. |
| **FR-09** | Lokasi & Peta | Tampilan lokasi Kota Metro, Lampung dengan embed Google Maps yang responsif dan interaktif. |
| **FR-10** | Tampilan Responsif | Uji responsivitas menyeluruh pada layar ponsel (360px+), tablet (768px), laptop (1024px), dan desktop lebar tanpa overflow horizontal. |
| **FR-11** | Menu Mobile | Hamburger drawer menu yang mulus dan otomatis menutup saat link diklik atau tombol Escape ditekan. |
| **FR-12** | Tombol Kembali ke Atas | Tombol *Back-to-Top* dinamis yang muncul mulus saat halaman di-scroll ke bawah. |

---

## 3. Struktur Direktori

```text
sanggar-pesona-budaya/
├── index.html                           # Halaman utama website (HTML5 Semantik)
├── css/
│   └── style.css                        # Lembar gaya utama (CSS3 Modern & Responsif)
├── js/
│   └── script.js                        # Logika interaktif (Vanilla JavaScript ES6+)
├── assets/
│   ├── images/
│   │   ├── hero-right.png               # Foto utama pementasan/identitas untuk banner hero
│   │   ├── tentang.jpg                  # Foto resmi bagian Profil Sanggar (Tentang Kami)
│   │   ├── pertunjukan-senitari/        # Foto dokumentasi pertunjukan tari (gambar1.jpg s/d gambar4.jpg)
│   │   ├── sewa-baju/                   # Foto koleksi sewa baju adat & profesi (sewa1.jpg s/d sewa4.jpg)
│   │   ├── kelas-pelatihan-tari/        # Foto sesi latihan & pembinaan tari (tari1.jpg s/d tari4.jpg)
│   │   ├── baju-adat-profesi-anak/      # Foto dokumentasi kostum anak (anak1.jpg s/d anak4.jpg)
│   │   ├── logo.png                     # Logo resmi Sanggar Pesona Budaya
│   │   ├── logo-sanggar.png             # Master logo resolusi tinggi
│   │   ├── logo-footer.png              # Banner landscape identitas sanggar
│   │   ├── siger-ornament.svg           # Pembatas artistik ornamen Siger Lampung
│   │   ├── pattern-tapis.svg            # Motif tapis geometris untuk latar hero
│   │   ├── layanan-1.svg s/d 4.svg      # Ilustrasi visual kartu layanan
│   │   └── galeri-1.svg s/d 8.svg       # Dokumentasi visual galeri per kategori
│   ├── video/                           # Rekaman video pementasan & kegiatan (video1.mp4 s/d video4.mp4)
├── PRD-Sanggar-Pesona-Budaya.md         # Dokumen Kebutuhan Produk (PRD)
├── Rancangan-Website-Sanggar-Pesona-Budaya.md # Dokumen Arsitektur & Perancangan
└── README.md                            # Panduan pengoperasian dan kustomisasi
```

---

## 4. Cara Menjalankan Website Secara Lokal

1. **Buka Langsung:**
   - Cukup klik dua kali (*double click*) file `index.html` pada File Explorer, atau klik kanan lalu pilih *Open With* browser favorit Anda (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).
2. **Menggunakan Live Server (Opsional):**
   - Jika menggunakan VS Code, instal ekstensi *Live Server* lalu klik tombol *Go Live* di pojok kanan bawah.
   - Atau jalankan server statis sederhana via terminal:
     ```bash
     python -m http.server 8000
     ```
     Lalu buka `http://localhost:8000` di browser.

---

## 5. Panduan Kustomisasi Konten & Kontak

### A. Mengubah Nomor WhatsApp Resmi
Buka file `js/script.js` pada baris ke-24:
```javascript
const SANGGAR_CONFIG = {
  // Ganti dengan nomor WhatsApp aktif pengelola (format: 628...)
  whatsappNumber: '6281272000000',
  sanggarName: 'Sanggar Pesona Budaya Metro',
  instagramUsername: 'sanggarpesonabudaya',
  address: 'Gg. Ikhlas 4, Metro, Kec. Metro Pusat, Kota Metro, Lampung 34121'
};
```
Nomor ini akan otomatis digunakan oleh seluruh tombol pemesanan layanan, form konsultasi, dan tombol floating WhatsApp. Anda juga dapat memperbarui teks nomor yang tampil di `index.html` pada bagian `#kontak` dan `footer`.

### B. Mengubah / Menambah Foto Dokumentasi Asli
1. Siapkan foto dokumentasi sanggar (format `.jpg`, `.jpeg`, `.png`, atau `.webp`).
2. Masukkan foto ke dalam folder `assets/images/`.
3. Buka file `index.html` pada bagian `<section id="galeri">`, lalu ganti atribut `src` pada elemen `<img>`:
   ```html
   <div class="gallery-item" data-category="pertunjukan" data-category-label="Pertunjukan Tari">
     <img src="assets/images/foto-asli-tari.jpg" alt="Pementasan Tari Siger Penguten">
     ...
   </div>
   ```
4. Kategori yang tersedia: `pertunjukan`, `kostum`, `latihan`, dan `kegiatan`.

### C. Mengubah Akun Instagram
Ganti `https://instagram.com/sanggarpesonabudaya` di file `index.html` dengan tautan URL akun Instagram resmi sanggar.

### D. Mengubah Lokasi Google Maps
Pada bagian `<section id="kontak">`, cari tag `<iframe>` dan ganti nilai atribut `src` dengan embed link resmi dari Google Maps lokasi studio sanggar Anda (*Bagikan -> Sematkan Peta*).

---

## 6. Panduan Publikasi ke Hosting Statis

Website ini siap dipublikasikan ke layanan hosting statis gratis maupun berbayar:
- **GitHub Pages:** Unggah repo ke GitHub, aktifkan *GitHub Pages* dari menu *Settings* -> *Pages* -> pilih *Branch main/root*.
- **Netlify / Vercel:** Drag-and-drop seluruh folder `sanggar-pesona-budaya` langsung ke dashboard Netlify/Vercel.
- **cPanel / Web Hosting:** Unggah seluruh file dan folder langsung ke direktori `public_html/`.

---

## 7. Lisensi & Hak Cipta

© 2026 **Sanggar Pesona Budaya**. Seluruh hak cipta dilindungi undang-undang.
Didedikasikan untuk pelestarian seni dan kebudayaan daerah Lampung di Kota Metro.
