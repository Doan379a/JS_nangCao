function createImage(imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", () => {
      document.querySelector(".image").replaceWith(img);
      resolve(img);
    });

    img.addEventListener("error", () => {
      reject(new Error("Image loading failed"));
    });

    document.querySelector(".image").style.display = "none";
    document.body.insertAdjacentElement("beforeend", img);
  });
}

createImage("path_to_image1.jpg")
  .then((img) => {
    setTimeout(() => {
      img.style.display = "none";
      return createImage("path_to_image2.jpg");
    }, 2000);
  })
  .then((img) => {
    setTimeout(() => {
      img.style.display = "none";
    }, 2000);
  })
  .catch((error) => console.error(error));
