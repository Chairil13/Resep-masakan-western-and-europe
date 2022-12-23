const play = document.getElementById("button");

const svgContainer = document.getElementById("svg");
const animItem = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: "svg",
  loop: false,
  autoplay: false,
  path: "https://assets2.lottiefiles.com/packages/lf20_u4yrau.json",
});

play.addEventListener("click", () => {
  svgContainer.classList.remove("hide");
  animItem.goToAndPlay(1, true);
});

animItem.addEventListener("complete", () => {
  svgContainer.classList.add("hide");
});
