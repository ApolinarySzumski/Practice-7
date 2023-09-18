import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map((item) => {
    return `<li>
    <a class="gallery__item" href=${item.original}>
  <img class="gallery__image" src=${item.preview} alt=${item.description} />
</a>
</li>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
