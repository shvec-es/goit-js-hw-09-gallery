import refs from './js/refs';
const { galleryContainer, lightboxDiv, lightboxImg, modalCloseBtn } = refs;
import { galleryMarkup } from './js/create-gallery-items-in-html';

galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);

import { onGalleryContainerClick } from './js/on-gallery-container-click';

modalCloseBtn.addEventListener('click', onCloseModalWindow);
lightboxDiv.addEventListener('click', (ev) => {
    if (ev.target.classList.contains('lightbox__overlay')) {
        onCloseModalWindow()
    }
});

window.addEventListener('keydown', (ev) => {
    if (ev.code === 'Escape') {
        onCloseModalWindow()
    }
})

import { onCloseModalWindow } from './js/on-close-modal-window';