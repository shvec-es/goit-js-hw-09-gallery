import refs from './refs';

export function getModalOpenOnClick(elem) {
    refs.lightboxDiv.classList.add('is-open');
    refs.lightboxImg.setAttribute('src', elem);
}