# PRD --- Website Sanggar Pesona Budaya

**Versi:** 1.0\
**Jenis produk:** Website company profile statis\
**Platform:** Web responsif\
**Teknologi:** HTML, CSS, JavaScript\
**Lokasi identitas:** Metro, Lampung

## 1. Latar Belakang

Sanggar Pesona Budaya memerlukan media digital yang dapat memperkenalkan
profil, layanan, dokumentasi seni, dan informasi kontak kepada calon
pelanggan serta masyarakat umum. Website dirancang sebagai pelengkap
kanal media sosial, bukan pengganti media sosial tersebut.

## 2. Tujuan Produk

1.  Menyajikan informasi resmi sanggar dalam satu tempat.
2.  Menampilkan kualitas dan ragam kegiatan melalui dokumentasi visual.
3.  Mendorong pengunjung menghubungi sanggar untuk bertanya atau memesan
    layanan.
4.  Memberikan pengalaman yang baik pada layar ponsel maupun desktop.

## 3. Persona Pengguna

### Persona A --- Penyelenggara Acara

Membutuhkan informasi layanan pertunjukan, contoh dokumentasi, dan
kontak untuk meminta ketersediaan serta penawaran.

### Persona B --- Calon Penyewa Kostum

Ingin melihat pilihan kostum, memahami cara penyewaan, dan menghubungi
pengelola.

### Persona C --- Masyarakat Umum

Ingin mengenal profil sanggar, kegiatan, dan kontribusinya terhadap
pelestarian budaya.

## 4. Ruang Lingkup MVP

### Termasuk

-   Satu halaman utama dengan beberapa bagian.
-   Navigasi ke Beranda, Tentang, Layanan, Galeri, dan Kontak.
-   Hero/banner visual.
-   Profil singkat sanggar.
-   Daftar layanan.
-   Galeri foto interaktif.
-   Tombol WhatsApp.
-   Tautan Instagram dan Google Maps.
-   Desain responsif.
-   Animasi ringan dan aksesibilitas dasar.

### Tidak termasuk

-   Database dan backend.
-   Login atau registrasi akun.
-   Panel admin/CMS.
-   Pemesanan dan pembayaran online.
-   Pengelolaan stok kostum.
-   Chat langsung di dalam website.
-   Integrasi API pihak ketiga yang memerlukan server.

## 5. Struktur dan Kebutuhan Fungsional

  -----------------------------------------------------------------------
  ID                Fitur             Kebutuhan         Prioritas
  ----------------- ----------------- ----------------- -----------------
  FR-01             Navigasi          Pengunjung dapat  Tinggi
                                      berpindah ke      
                                      bagian utama      
                                      melalui menu.     

  FR-02             Hero              Menampilkan nama  Tinggi
                                      sanggar,          
                                      ringkasan, gambar 
                                      utama, dan CTA.   

  FR-03             Profil            Menampilkan       Tinggi
                                      deskripsi sanggar 
                                      yang telah        
                                      disetujui.        

  FR-04             Layanan           Menampilkan jenis Tinggi
                                      layanan dan       
                                      deskripsi         
                                      singkat.          

  FR-05             Galeri            Menampilkan       Tinggi
                                      dokumentasi foto  
                                      kegiatan dan      
                                      kostum.           

  FR-06             Lightbox          Foto dapat        Sedang
                                      diperbesar dan    
                                      ditutup kembali.  

  FR-07             WhatsApp          CTA membuka       Tinggi
                                      WhatsApp dengan   
                                      pesan awal yang   
                                      relevan.          

  FR-08             Media sosial      Tautan Instagram  Tinggi
                                      membuka akun      
                                      resmi sanggar.    

  FR-09             Lokasi            Tautan peta       Sedang
                                      mengarahkan ke    
                                      lokasi yang       
                                      benar.            

  FR-10             Responsif         Layout            Tinggi
                                      menyesuaikan      
                                      ponsel, tablet,   
                                      dan desktop.      

  FR-11             Menu mobile       Menu dapat dibuka Tinggi
                                      dan ditutup pada  
                                      layar kecil.      

  FR-12             Kembali ke atas   Pengunjung dapat  Rendah
                                      kembali ke bagian 
                                      atas dengan       
                                      cepat.            
  -----------------------------------------------------------------------

## 6. Kebutuhan Nonfungsional

-   **Performa:** ukuran gambar dioptimalkan dan animasi tidak
    berlebihan.
-   **Kompatibilitas:** mendukung browser modern seperti Chrome, Edge,
    Firefox, dan Safari.
-   **Responsivitas:** tidak menimbulkan scroll horizontal pada lebar
    layar umum.
-   **Aksesibilitas:** kontras teks memadai, gambar memiliki teks
    alternatif, tombol dapat digunakan dengan keyboard, dan fokus
    terlihat.
-   **Keamanan:** tidak mengumpulkan data sensitif. Tautan eksternal
    dibuka dengan atribut keamanan yang sesuai bila menggunakan tab
    baru.
-   **Pemeliharaan:** CSS dan JavaScript dipisahkan dari HTML agar mudah
    diubah.

## 7. Alur Pengguna Utama

1.  Pengunjung membuka website.
2.  Pengunjung melihat identitas dan foto utama sanggar.
3.  Pengunjung membaca profil atau melihat layanan.
4.  Pengunjung menelusuri galeri dokumentasi.
5.  Pengunjung memilih tombol WhatsApp atau tautan kontak.
6.  Pengunjung melanjutkan percakapan dan proses pemesanan di luar
    website.

## 8. Konten dan Data

Konten yang harus dikonfirmasi sebelum publikasi: - Logo dan nama
resmi. - Profil, sejarah, visi, dan misi. - Nama layanan serta
deskripsi. - Harga atau ketentuan sewa jika ditampilkan. - Foto dan
video yang boleh dipublikasikan. - Nomor WhatsApp aktif. - URL Instagram
resmi. - Alamat dan tautan Google Maps. - Informasi prestasi dan
pengalaman yang dapat diverifikasi.

Jangan menampilkan harga, testimoni, jumlah anggota, prestasi, atau
klaim lain tanpa data yang telah disetujui pengelola.

## 9. Panduan UI

-   Gunakan marun sebagai warna utama, emas sebagai aksen, putih gading
    untuk latar terang, dan hitam untuk kontras.
-   Gunakan foto asli sanggar sebagai prioritas.
-   Pastikan teks di atas foto tetap terbaca melalui overlay atau latar
    kontras.
-   Buat CTA utama jelas, misalnya "Konsultasi via WhatsApp".
-   Hindari terlalu banyak animasi, ornamen, dan jenis huruf.
-   Gunakan komponen yang konsisten untuk tombol, judul bagian, dan
    galeri.

## 10. Rencana Pengujian

-   Uji semua tautan navigasi.
-   Uji menu hamburger pada ponsel.
-   Uji buka/tutup lightbox menggunakan mouse, keyboard, dan tombol
    Escape.
-   Uji tautan WhatsApp, Instagram, dan Maps.
-   Uji layout pada lebar 360 px, 768 px, 1024 px, dan desktop.
-   Pastikan gambar memiliki alt text dan tidak pecah.
-   Periksa konsol browser untuk kesalahan JavaScript.
-   Periksa ejaan, kontak, dan keakuratan informasi sebelum publikasi.

## 11. Kriteria Penerimaan

MVP dapat diterima apabila: - Semua bagian inti tampil dan berfungsi. -
Navigasi dan interaksi utama dapat digunakan. - Tidak ada tautan kontak
yang salah. - Layout responsif dan tidak memiliki overflow horizontal. -
Galeri bekerja pada perangkat umum. - Informasi profil sudah disetujui
pengelola. - Website dapat dijalankan langsung secara lokal dengan
membuka `index.html`.

## 12. Tahapan Pengerjaan

1.  Konfirmasi konten, kontak, dan aset visual.
2.  Buat kerangka HTML.
3.  Bangun sistem visual dan responsivitas CSS.
4.  Tambahkan interaksi menggunakan JavaScript.
5.  Uji fungsi dan tampilan pada beberapa ukuran layar.
6.  Ganti konten contoh dengan konten resmi.
7.  Publikasikan ke hosting statis bila telah disetujui.

## 13. Risiko dan Asumsi

-   Foto yang tersedia mungkin memiliki resolusi atau izin penggunaan
    yang berbeda.
-   Informasi layanan dan harga dapat berubah, sehingga perlu
    dikonfirmasi sebelum dipublikasikan.
-   Karena tidak ada backend, konten harus diperbarui manual.
-   Tombol WhatsApp hanya membuka aplikasi atau situs WhatsApp;
    pemesanan tidak tersimpan di website.
