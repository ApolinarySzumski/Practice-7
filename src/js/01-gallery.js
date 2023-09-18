import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map((item) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href=${item.original} target='_blank'>
      <img
        class="gallery__image"
        src=${item.preview}
        data-source=${item.original}
        alt=${item.description}
      />
    </a>
  </div>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

const handleClick = (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src=${e.target.dataset.source} width="800" height="600">
`);
  instance.show();
  gallery.addEventListener(
    "keydown",
    (e) => {
      if (e.key === "Escape") {
        instance.close();
      }
    },
    { once: true },
  );
};

gallery.addEventListener("click", handleClick);
