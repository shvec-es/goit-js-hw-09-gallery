import refs from './refs';

export function onCloseModalWindow() {
    refs.lightboxDiv.classList.remove('is-open');
    refs.lightboxImg.src = "";
}