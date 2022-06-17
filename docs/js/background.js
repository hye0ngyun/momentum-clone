const images = [];
const hours = new Date().getHours();
for (let i = 1; i <= 10; i++) {
  if (hours <= 12) {
    // 오전
    images.push(`morning (${i}).jpg`);
  } else if (hours <= 18) {
    // 오후
    images.push(`afternoon (${i}).jpg`);
  } else {
    // 저녁
    images.push(`evening (${i}).jpg`);
  }
}
const todaysImageIndex = Math.floor(Math.random() * images.length);

const elemImage = document.createElement("img");
elemImage.setAttribute("id", "bg-img");
elemImage.src = `./img/${images[todaysImageIndex]}`;
document.querySelector("#main-wrap").append(elemImage);
