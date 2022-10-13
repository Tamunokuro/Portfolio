const btnMenu = document.querySelector('.humburger');
const myoverlay = document.querySelector('#myoverlay');
const navbar = document.querySelector('.navbar-nav');
const navlink = document.querySelectorAll('.nav-link');
const modalContainer = document.getElementById('modal-section');
const body = document.querySelector('body');
// Menu item function
btnMenu.addEventListener('click', () => {
  btnMenu.classList.toggle('active');
  navbar.classList.toggle('active');
  myoverlay.classList.toggle('overlay');
  body.classList.toggle('overflow');
});

navlink.forEach((nav) => {
  nav.addEventListener('click', () => {
    myoverlay.classList.toggle('overlay');
    btnMenu.classList.toggle('active');
    navbar.classList.toggle('active');
    body.classList.toggle('overflow');
  });
});

let card = '';
let modalCard = '';

const portfolioObj = [
  {
    id: '1',
    workCardClass: 'work-section work-1',
    mobileImg: '',
    desktopImg: './img/1.Snapshoot Portfolio.png',
    separatorImg: './img/separator-icon.png',
    projectName: 'Tonic',
    companyName: 'Canopy',
    position: 'Back End Dev',
    projectYear: 2015,
    projectDetails:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectTools: ['html', 'Ruby on rails', 'css', 'javaScript'],
    projectBtnText: 'See Project',
    modalBtnText: 'See Live',
    codeBtnText: 'See Source',
    sourceCode: 'https://github.com/Tamunokuro/Portfolio',
  },
  {
    id: '2',
    workCardClass: 'work-section reverse work-2',
    mobileImg: '',
    desktopImg: './img/2.Snapshoot Portfolio.png',
    separatorImg: './img/separator-icon.png',
    projectName: 'Multi-Post Stories',
    companyName: 'FACEBOOK',
    position: 'Full Stack Dev',
    projectYear: 2015,
    projectDetails:
      'Experimental content creation feature that allows users'
      + 'to add to an existing story over the course of a day without spamming their friends.',
    projectTools: ['html', 'Ruby on rails', 'css', 'javaScript'],
    projectBtnText: 'See Project',
    modalBtnText: 'See Live',
    codeBtnText: 'See Source',
    sourceCode: 'https://github.com/Tamunokuro/Portfolio',
  },
  {
    id: '3',
    workCardClass: 'work-section work-3',
    mobileImg: '',
    desktopImg: './img/Snapshoot Portfolio5.png',
    separatorImg: './img/separator-icon.png',
    projectName: 'Facebook 360',
    companyName: 'FACEBOOK',
    position: 'Full Stack Dev',
    projectYear: 2015,
    projectDetails:
      'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR',
    projectTools: ['html', 'Ruby on rails', 'css', 'javaScript'],
    projectBtnText: 'See Project',
    modalBtnText: 'See Live',
    codeBtnText: 'See Source',
    sourceCode: 'https://github.com/Tamunokuro/Portfolio',
  },
  {
    id: '4',
    workCardClass: 'work-section work-4 reverse',
    mobileImg: '',
    desktopImg: './img/ubersnapshot.png',
    separatorImg: './img/separator-icon.png',
    projectName: 'Uber Navigation',
    companyName: 'Uber',
    position: 'Lead Developer',
    projectYear: 2018,
    projectDetails:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    projectTools: ['html', 'Ruby on rails', 'css', 'javaScript'],
    projectBtnText: 'See Project',
    modalBtnText: 'See Live',
    codeBtnText: 'See Source',
    sourceCode: 'https://github.com/Tamunokuro/Portfolio',
  },
];

const myportfolio = document.getElementById('portfolio');

portfolioObj.forEach((child, index) => {
  card = `
  <div class="${child.workCardClass}">
  <img class="snap" src="${child.desktopImg}" alt="Snapshot of Project">
  <div class="work-section-content">
  <div class="card-body">
      <h2 class="card-title">${child.projectName}</h2>
      <div class="work-details">
            <p class="work-description">${child.companyName}</p>
            <img class="separator-icon" src="${child.separatorImg}" alt="separator-icon">
            <h3>${child.position}</h3>
            <img class="separator-icon" src="${child.separatorImg}" alt="separator-icon">
            <h3>${child.projectYear}</h3>
      </div>
      <p class="work-writeup">${child.projectDetails}</p>
      <ul class="work-tools">
        <li class="tool">${child.projectTools[0]}</li>
        <li class="tool">${child.projectTools[1]}</li>
        <li class="tool">${child.projectTools[2]}</li>
        <li class="tool">${child.projectTools[3]}</li>
      </ul>
      <button data-set=${[index]} class="work-button project-card-btn">${child.projectBtnText}</button>
  </div>
</div>
</div>
`;
  myportfolio.innerHTML += card;
});

const cardBtns = document.querySelectorAll('.project-card-btn');
cardBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const index = e.target.dataset.set;
    const project = portfolioObj[index];
    modalCard = `
      <div class="modal">
      <div class="card-body">
        <span class="close-button">&times;</span>
        <h2 class="card-title">${project.projectName}</h2>
        <div class="work-details">
          <p class="work-description">${project.companyName}</p>
          <img
            class="separator-icon"
            src="img/separator-icon.png"
            alt="separator-icon"
          />
          <h3>${project.position}</h3>
          <img
            class="separator-icon"
            src="img/separator-icon.png"
            alt="separator-icon"
          />
          <h3>${project.projectYear}</h3>
        </div>
      </div>
      <img
        class="snap"
        src="${project.desktopImg}"
        alt="Snapshot of Project"
      />

      <div class="work-section-content">
        <p class="work-writeup">
        ${project.projectDetails}
        </p>
        <div class="card-body">
          <ul class="work-tools">
            <li class="tool">${project.projectTools[0]}</li>
            <li class="tool">${project.projectTools[1]}</li>
            <li class="tool">${project.projectTools[2]}</li>
            <li class="tool">${project.projectTools[3]}</li>
          </ul>
          <a class="work-button" href=""
            >See Live
            <img src="img/live-icon.png" alt="See live project icon"
          /></a>
          <a class="work-button" href='${project.sourceCode}' target= '_target'>See Source
            <img src="img/github-icon.png" alt="See source code icon"
          /></a>
        </div>
      </div>
    </div>
      `;
    modalContainer.innerHTML = modalCard;
    modalContainer.style.left = '0';
    const closeBtn = document.querySelector('.close-button');
    closeBtn.addEventListener('click', () => {
      modalContainer.style.left = '-100%';
    });
    modalContainer.addEventListener('click', () => {
      modalContainer.style.left = '-100%';
    });
  });
});