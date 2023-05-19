let images = [
  {
    img_url: "https://i1.sndcdn.com/artworks-000555002412-054ojp-t500x500.jpg",
    alt_text: "Chilling Scenery",
  },
  {
    img_url:
      "https://i1.sndcdn.com/artworks-0Y5dJDUVkYrzU55m-NaG8Wg-t500x500.jpg",
    alt_text: "Chilling Man",
  },
  {
    img_url: "https://i.ytimg.com/vi/SKNCfiLZigI/maxresdefault.jpg",
    alt_text: "Chilling Room",
  },
];

function addImages(image, description) {
    $(`#gallery`).append(`
        <div class="gallery-item">
            <figure><img src="${image}" alt="${description}"></figure>
        </div>
    `);
}

$(document).ready(function() {
    images.forEach((image) => {
        addImages(image.img_url, image.alt_text);
    });
});
