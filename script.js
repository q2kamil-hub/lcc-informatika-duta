document.addEventListener('DOMContentLoaded', function () {

    // ambil semua tombol menu utama
    const menuBtns = document.querySelectorAll('.menu-btn');

    // ambil semua overlay submenu
    const overlays = document.querySelectorAll('.submenu-overlay');

    // fungsi untuk menutup semua overlay dan menghapus class active
    function closeAllOverlays() {
        overlays.forEach(ov => ov.classList.remove('open'));
        menuBtns.forEach(btn => btn.classList.remove('active'));
    }

    // event listener setiap tombol
    menuBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const targetId = this.dataset.target; // misal "sub-sistem"
            const targetOverlay = document.getElementById(targetId);

            // jika overlay yang dimaksud sudah terbuka, tutup semua
            if (targetOverlay && targetOverlay.classList.contains('open')) {
                closeAllOverlays();
                return;
            }

            // tutup semua overlay terlebih dahulu
            closeAllOverlays();

            // buka overlay target
            if (targetOverlay) {
                targetOverlay.classList.add('open');
                this.classList.add('active');
            }
        });
    });

    // opsional: klik di luar menu untuk menutup overlay (user experience)
    document.addEventListener('click', function (e) {
        const menuWrap = document.querySelector('.menu-wrap');
        // jika klik terjadi di luar .menu-wrap, tutup semua
        if (menuWrap && !menuWrap.contains(e.target)) {
            closeAllOverlays();
        }
    });

    console.log('EduInformatika siap! overlay menu aktif.');
});