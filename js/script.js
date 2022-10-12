import portfolioObj from "./projectsData.js";
const btnMenu = document.querySelector(".humburger");
const myoverlay = document.querySelector("#myoverlay");
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar-nav");
const navlink = document.querySelectorAll(".nav-link");
const myportfolio = document.getElementById("portfolio");
const modalContainer = document.getElementById("modal-section");

// Menu item function
btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("active");
  navbar.classList.toggle("active");
  myoverlay.classList.toggle("overlay");
  body.classList.toggle("overflow");
});

navlink.forEach((nav) => {
  nav.addEventListener("click", () => {
    myoverlay.classList.toggle("overlay");
    btnMenu.classList.toggle("active");
    navbar.classList.toggle("active");
    body.classList.toggle("overflow");
  });
});

let workCard = "";
let modalCard = "";
let projectsId = [];
let projectTitles = [];
let companies = [];

for (let portfolio of portfolioObj) {
  projectsId.push(portfolioObj.indexOf(portfolio));
  projectTitles.push(portfolio.projectName);
  companies.push(portfolio.companyName);
  workCard += `
  <div class="${portfolio.workCardClass}">
  <img class="snap" src="${portfolio.desktopImg}" alt="Snapshot of Project">
  <div class="work-section-content">
  <div class="card-body">
      <h2 class="card-title">${portfolio.projectName}</h2>
      <div class="work-details">
            <p class="work-description">${portfolio.companyName}</p>
            <img class="separator-icon" src="${portfolio.separatorImg}" alt="separator-icon">
            <h3>${portfolio.position}</h3>
            <img class="separator-icon" src="${portfolio.separatorImg}" alt="separator-icon">
            <h3>${portfolio.projectYear}</h3>
      </div>
      <p class="work-writeup">${portfolio.projectDetails}</p>
      <ul class="work-tools">
        <li class="tool">${portfolio.projectTools[0]}</li>
        <li class="tool">${portfolio.projectTools[1]}</li>
        <li class="tool">${portfolio.projectTools[2]}</li>
        <li class="tool">${portfolio.projectTools[3]}</li>
      </ul>
      <button data-set=${portfolio.id} class="work-button project-card-btn">${portfolio.projectBtnText}</button>
  </div>
</div>
</div>
`;
}

myportfolio.innerHTML = workCard;

const cardBtns = document.querySelectorAll(".project-card-btn");
cardBtns.forEach((btn, index) => {
  console.log(index);
  btn.addEventListener("click", (e) => {
    if (projectsId.includes(parseInt(e.target.dataset.set) - 1)) {
      modalCard = `
      <div class="modal">
      <div class="card-body">
        <span class="close-button">&times;</span>
        <h2 class="card-title">${projectTitles[index]}</h2>
        <div class="work-details">
          <p class="work-description">${companies[index]}</p>
          <img
            class="separator-icon"
            src="img/separator-icon.png"
            alt="separator-icon"
          />
          <h3>Back End Dev</h3>
          <img
            class="separator-icon"
            src="img/separator-icon.png"
            alt="separator-icon"
          />
          <h3>2015</h3>
        </div>
      </div>
      <img
        class="snap"
        src="img1.Snapshoot Portfolio.png"
        alt="Snapshot of Project"
      />

      <div class="work-section-content">
        <p class="work-writeup">
          A daily selection of privately personalized reads; no accounts or
          sign-ups required.
        </p>
        <div class="card-body">
          <ul class="work-tools">
            <li class="tool">html</li>
            <li class="tool">css</li>
            <li class="tool">javaScript</li>
          </ul>
          <a class="work-button" href=""
            >See Live
            <img src="img/live-icon.png" alt="See live project icon"
          /></a>
          <a class="work-button" href=""
            >See Source
            <img src="img/github-icon.png" alt="See source code icon"
          /></a>
        </div>
      </div>
    </div>
      `;
      modalContainer.innerHTML = modalCard;
      modalContainer.style.left = "0";
    }
  });
});
