const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxHelp = document.getElementById('lightbox-help');
const closeBtn = document.querySelector('.lightbox-close');

function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightboxImg.classList.remove('zoomed');
    lightboxHelp.textContent = 'Toca la carta para acercar';
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = '';
    document.body.style.overflow = '';
}

document.querySelectorAll('.menu-open').forEach(function (btn) {
    btn.addEventListener('click', function () {
        const img = btn.querySelector('img');
        openLightbox(img.src, img.alt);
    });
});

lightboxImg.addEventListener('click', function () {
    const zoomed = lightboxImg.classList.toggle('zoomed');
    lightboxHelp.textContent = zoomed
        ? 'Desliza para moverte · Toca para alejar'
        : 'Toca la carta para acercar';
});

closeBtn.addEventListener('click', closeLightbox);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lightbox.hidden) {
        closeLightbox();
    }
});
