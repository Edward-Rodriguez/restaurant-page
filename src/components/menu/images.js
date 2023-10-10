import data_images from './images-info.json';

(function setImageLocalPath() {
  data_images.forEach((image) => {
    // name of image in json = filename of image
    image.localpath = require(`./${image.name}`);
  });
})();

export default data_images;
