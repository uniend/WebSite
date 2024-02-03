const img = ["cat1.jpg", "cat2.jpg", "cat3.jpg"];

//변수의 값이 변경되었다고 해서 그 변수를 이용하는 다른 부분이 자동으로 업데이트되지는 않습니다.
// 하나 변경됐다고 다 변경되면 성능에 문제가 발생, 따라서 명시적으로 변경을 지시해야한다.

function RandomNum() {
  return Math.trunc(Math.random() * img.length) + 1;
}

function chageImg() {
  let number = RandomNum();
  bgImg.src = `img/cat${number}.jpg`;
}

const bgImg = document.createElement("img");
const bgOveray = document.createElement("div");
bgImg.alt = "cat";
bgImg.className = "bg";
bgOveray.className = "bg_overay";
document.body.prepend(bgImg);
document.body.prepend(bgOveray);

chageImg();
setInterval(chageImg, 2000);
