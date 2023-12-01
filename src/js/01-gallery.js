// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const marcupConteiner = document.querySelector('.gallery');
const cardsMarcup = createMarcup(galleryItems);

marcupConteiner.insertAdjacentHTML('beforeend', cardsMarcup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '400',
});

function createMarcup(images) {
  const marcup = images.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`;
  });
  return marcup.join('');
}
