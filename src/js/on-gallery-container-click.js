import { getModalOpenOnClick } from './get-modal-open-on-click';

export function onGalleryContainerClick(ev) {
    ev.preventDefault();
    if (!ev.target.classList.contains('gallery__image')) {
        return;
    }

    const modalOpenEl = ev.target.dataset.source;
    getModalOpenOnClick(modalOpenEl);
}
