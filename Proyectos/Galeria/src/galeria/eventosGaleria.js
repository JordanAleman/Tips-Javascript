const galeria = document.querySelector("#galeria");
const closeGalleryButton = [
    document.querySelector(".galeria__btn"),
    document.querySelector(".galeria__overlay"),
];

closeGalleryButton.forEach((element) =>
    element.addEventListener("click", () => {
        galeria.classList.remove("galeria--active");
        document.body.style.overflow = "";
    })
);