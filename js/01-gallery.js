import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const photo = galleryItems
  .map(
    (item) => `<li class="gallery__item">
        <a class="gallery__link" href="javascript:void(0)">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", photo); // Insert element and display

/* EVENT DELEGATION */
gallery.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    const viewImage = event.target.getAttribute("data-source");
    const instance = basicLightbox.create(`<img
      src="${viewImage}" width="800" height="600"
    />`);
    instance.show();
  }
});

console.log(galleryItems);
