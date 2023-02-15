import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryPreview = document.querySelector('.gallery');
galleryPreview.innerHTML = galleryItems.reduce(
  (html, current) =>
    html +
    `<a class="gallery__item" href="${current.original}">
  <img 
  class="gallery__image" 
  src="${current.preview}" 
  alt="${current.description}" />
</a>`,
  ''
);

let gallery = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
