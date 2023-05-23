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
  {
    img_url:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.pxhere.com%2Fphotos%2Fec%2F52%2Fgin_and_tonic_drink_happy_hour_grunge_glass_gin_alcohol_fresh-778213.jpg!d&f=1&nofb=1&ipt=2b7f486f1f9fc7054e9e3f2b1e5873975058dc6d774923452f405d1f4c67b817&ipo=images",
    alt_text: "Chilling Drink",
  },
  {
    img_url:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F05%2F09%2F14%2F31%2Fnature-759768_640.jpg&f=1&nofb=1&ipt=14b78096ade2e8ae252643a4f564c6cb553150ce4d6ccd954d6300ae04ee27e2&ipo=images",
    alt_text: "Chilling Guys",
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
