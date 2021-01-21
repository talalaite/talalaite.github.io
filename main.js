const card = document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".title");
const logo = document.querySelector(".logo img");
const description = document.querySelector(".info h3");
const portfolio = document.querySelector(".portfolio a");
const cv = document.querySelector(".cv a");
const contacts = document.querySelector(".contacts a");

container.addEventListener("mousemove", (e) => {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis * -1}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
  card.style.transition = "all 0.2s ease";

  title.style.transform = "translateZ(150px)";
  logo.style.transform = "translateZ(200px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  portfolio.style.transform = "translateZ(100px)";
  cv.style.transform = "translateZ(100px)";
  contacts.style.transform = "translateZ(100px)";
});

container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  title.style.transform = "translateZ(0px)";
  logo.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  portfolio.style.transform = "translateZ(0px)";
  cv.style.transform = "translateZ(0px)";
  contacts.style.transform = "translateZ(0px)";
});
