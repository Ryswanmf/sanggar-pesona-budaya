/**
 * SANGGAR PESONA BUDAYA - METRO, LAMPUNG
 * Main Interactive Script (Vanilla JavaScript ES6+)
 * 
 * Fitur:
 * 1. Mobile Hamburger Menu Toggle & Accessible Focus
 * 2. Sticky Navbar with Scroll State
 * 3. Active Nav Link on Scroll Spy (Intersection Observer)
 * 4. Galeri Kategori Filter (Semua, Pertunjukan, Kostum, Latihan, Kegiatan)
 * 5. Lightbox Modal Interaktif (Keyboard support: ArrowLeft, ArrowRight, Esc)
 * 6. Generator Pesan WhatsApp Otomatis (Form Konsultasi & Tombol Layanan)
 * 7. Tombol Kembali ke Atas (Back-to-Top)
 * 8. Scroll Reveal Animations
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ========================================================================
  // Konfigurasi Resmi Sanggar
  // (Dapat disesuaikan oleh pengelola sanggar sesuai kebutuhan)
  // ========================================================================
  const SANGGAR_CONFIG = {
    // Nomor WhatsApp resmi dalam format internasional tanpa tanda plus atau strip (62...)
    whatsappNumber: '6281272000000',
    sanggarName: 'Sanggar Pesona Budaya Metro',
    instagramUsername: 'sanggarpesonabudaya',
    address: 'Gg. Ikhlas 4, Metro, Kec. Metro Pusat, Kota Metro, Lampung 34121',
    plusCode: 'V8F3+3GW, Metro'
  };

  // ========================================================================
  // 1. Mobile Hamburger Menu
  // ========================================================================
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    const toggleMenu = (open) => {
      const isActive = open !== undefined ? open : !navMenu.classList.contains('is-active');
      menuToggle.classList.toggle('is-active', isActive);
      navMenu.classList.toggle('is-active', isActive);
      menuToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
      document.body.style.overflow = isActive ? 'hidden' : '';
    };

    menuToggle.addEventListener('click', () => toggleMenu());

    // Tutup menu saat salah satu link navigasi diklik
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('is-active')) {
          toggleMenu(false);
        }
      });
    });

    // Tutup menu bila klik di luar navbar pada mode mobile
    document.addEventListener('click', (e) => {
      if (
        navMenu.classList.contains('is-active') &&
        !navMenu.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {
        toggleMenu(false);
      }
    });

    // Tutup menu bila menekan tombol Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('is-active')) {
        toggleMenu(false);
      }
    });
  }

  // ========================================================================
  // 2. Sticky Navbar & Header Scroll State
  // ========================================================================
  const siteHeader = document.querySelector('.site-header');

  const handleHeaderScroll = () => {
    if (!siteHeader) return;
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // ========================================================================
  // 3. Active Nav Link on Scroll Spy
  // ========================================================================
  const sections = document.querySelectorAll('section[id]');

  const observeSections = () => {
    const scrollPosition = window.scrollY + 140;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (matchingLink) {
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach((l) => l.classList.remove('active'));
          matchingLink.classList.add('active');
        }
      }
    });
  };

  window.addEventListener('scroll', observeSections, { passive: true });

  // ========================================================================
  // 4. Manajemen Pemutar Video Galeri (Hentikan video lain saat satu berputar)
  // ========================================================================
  const videoPlayers = document.querySelectorAll('.video-player');
  videoPlayers.forEach((video) => {
    video.addEventListener('play', () => {
      videoPlayers.forEach((otherVideo) => {
        if (otherVideo !== video && !otherVideo.paused) {
          otherVideo.pause();
        }
      });
    });
  });

  // ========================================================================
  // 6. WhatsApp Integration & Form Konsultasi
  // ========================================================================

  // Tombol Layanan Cepat (Direct WhatsApp CTA)
  const serviceWhatsAppBtns = document.querySelectorAll('.js-service-wa');
  serviceWhatsAppBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceName = btn.getAttribute('data-service-name') || 'Layanan Sanggar';
      const message = `Halo ${SANGGAR_CONFIG.sanggarName},\n\nSaya tertarik untuk bertanya dan konsultasi mengenai *${serviceName}*. Mohon informasi ketersediaan jadwal, ketentuan, dan penawaran resminya.\n\nTerima kasih!`;
      const waUrl = `https://wa.me/${SANGGAR_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  });

  // Tombol Hero & Floating WhatsApp CTA
  const heroWhatsAppBtn = document.getElementById('heroWaBtn');
  if (heroWhatsAppBtn) {
    heroWhatsAppBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const message = `Halo ${SANGGAR_CONFIG.sanggarName},\n\nSaya ingin konsultasi mengenai layanan pertunjukan tari / sewa kostum adat di Kota Metro, Lampung.\n\nMohon informasi lebih lanjut. Terima kasih!`;
      const waUrl = `https://wa.me/${SANGGAR_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  }

  // Formulir Konsultasi Interaktif
  const consultationForm = document.getElementById('consultationForm');
  if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('formName')?.value.trim() || '';
      const phone = document.getElementById('formPhone')?.value.trim() || '';
      const service = document.getElementById('formService')?.value || 'Konsultasi Umum';
      const eventDate = document.getElementById('formDate')?.value || '-';
      const notes = document.getElementById('formNotes')?.value.trim() || 'Tidak ada catatan tambahan';

      if (!name) {
        alert('Mohon masukkan nama lengkap Anda.');
        document.getElementById('formName')?.focus();
        return;
      }

      const formattedMessage = [
        `*FORM KONSULTASI - ${SANGGAR_CONFIG.sanggarName.toUpperCase()}*`,
        `----------------------------------------`,
        `*Nama Pengirim:* ${name}`,
        `*No. Kontak:* ${phone || '-'}`,
        `*Kebutuhan Layanan:* ${service}`,
        `*Perkiraan Tanggal Acara:* ${eventDate}`,
        `*Catatan Tambahan:* ${notes}`,
        `----------------------------------------`,
        `Halo Sanggar Pesona Budaya Metro, saya telah mengisi formulir konsultasi ini melalui website resmi. Mohon informasi penawaran dan jadwalnya. Terima kasih!`
      ].join('\n');

      const waUrl = `https://wa.me/${SANGGAR_CONFIG.whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  }

  // ========================================================================
  // 7. Tombol Kembali ke Atas (Back-to-Top)
  // ========================================================================
  const backToTopBtn = document.getElementById('backToTopBtn');

  if (backToTopBtn) {
    window.addEventListener(
      'scroll',
      () => {
        if (window.scrollY > 350) {
          backToTopBtn.classList.add('is-visible');
        } else {
          backToTopBtn.classList.remove('is-visible');
        }
      },
      { passive: true }
    );

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ========================================================================
  // 8. Dynamic Copyright Year
  // ========================================================================
  const currentYearElem = document.getElementById('currentYear');
  if (currentYearElem) {
    currentYearElem.textContent = new Date().getFullYear();
  }

  // ========================================================================
  // 9. Automatic Slideshow untuk Card Layanan (Pertunjukan Tari & Baju Anak)
  // ========================================================================
  const serviceSliders = document.querySelectorAll('.service-slider');
  serviceSliders.forEach((slider, sliderIdx) => {
    const slides = slider.querySelectorAll('.service-slide');
    const dots = slider.querySelectorAll('.slider-dot');
    if (slides.length <= 1) return;

    let currentSlide = 0;
    let slideTimer = null;
    // Beri sedikit selisih ritme pergeseran (3.2 detik & 3.8 detik)
    const intervalDuration = 3200 + (sliderIdx * 500);

    const updateSlide = (nextIndex) => {
      slides[currentSlide].classList.remove('is-active');
      if (dots[currentSlide]) dots[currentSlide].classList.remove('is-active');

      currentSlide = (nextIndex + slides.length) % slides.length;

      slides[currentSlide].classList.add('is-active');
      if (dots[currentSlide]) dots[currentSlide].classList.add('is-active');
    };

    const startTimer = () => {
      if (!slideTimer) {
        slideTimer = setInterval(() => {
          updateSlide(currentSlide + 1);
        }, intervalDuration);
      }
    };

    const stopTimer = () => {
      if (slideTimer) {
        clearInterval(slideTimer);
        slideTimer = null;
      }
    };

    startTimer();

    // Jeda saat cursor berada di atas foto dan lanjutkan kembali saat keluar
    slider.addEventListener('mouseenter', stopTimer);
    slider.addEventListener('mouseleave', startTimer);

    // Navigasi manual via klik dot
    dots.forEach((dot, index) => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        updateSlide(index);
        stopTimer();
        startTimer();
      });
    });

    // Jeda otomatis jika tab browser sedang tidak aktif
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stopTimer();
      } else {
        startTimer();
      }
    });
  });
});
