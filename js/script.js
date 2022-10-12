const btnMenu = document.querySelector('.humburger');
const myoverlay = document.querySelector('#myoverlay');
const body = document.querySelector('body');
const navbar = document.querySelector('.navbar-nav');
const navlink = document.querySelectorAll('.nav-link');
const myportfolio = document.getElementById('portfolio');

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

// Details Pop-Up section
const portfolioObj = [
  {
    workCardClass: 'work-section work-1',
    mobileImg: '',
    desktopImg: 'img/1.Snapshoot Portfolio.png',
    separatorImg: 'img/separator-icon.png',
    projectName: 'Tonic',
    companyName: 'Canopy',
    position: 'Back End Dev',
    projectYear: 2015,
    projectDetails: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectTools: ['html', 'Ruby on rails', 'css', 'javaScript'],
    projectBtnText : 'See Project',
    modalBtnText: 'See Live',
    codeBtnText: 'See Source'
  },
  {
    workCardClass: 'work-section reverse work-2',
    mobileImg: '',
    desktopImg: 'img/2.Snapshoot Portfolio.png',
    separatorImg: 'img/separator-icon.png',
    projectName: 'Multi-Post Stories',
    companyName: 'FACEBOOK',
    position: 'Full Stack Dev',
    projectYear: 2015,
    projectDetails: 'Experimental content creation feature that allows users' +
    'to add to an existing story over the course of a day without spamming their friends.',
    projectTools: ['html', 'Ruby on rails', 'css', 'javaScript'],
    projectBtnText : 'See Project',
    modalBtnText: 'See Live',
    codeBtnText: 'See Source'
  },
  {
    workCardClass: 'work-section work-3',
    mobileImg: '',
    desktopImg: 'img/Snapshoot Portfolio5.png',
    separatorImg: 'img/separator-icon.png',
    projectName: 'Facebook 360',
    companyName: 'FACEBOOK',
    position: 'Full Stack Dev',
    projectYear: 2015,
    projectDetails: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR',
    projectTools: ['html', 'Ruby on rails', 'css', 'javaScript'],
    projectBtnText : 'See Project',
    modalBtnText: 'See Live',
    codeBtnText: 'See Source'
  },
  {
    workCardClass: 'work-section work-4 reverse',
    mobileImg: '',
    desktopImg: 'img/ubersnapshot.png',
    separatorImg: 'img/separator-icon.png',
    projectName: 'Uber Navigation',
    companyName: 'Uber',
    position: 'Lead Developer',
    projectYear: 2018,
    projectDetails: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    projectTools: ['html', 'Ruby on rails', 'css', 'javaScript'],
    projectBtnText : 'See Project',
    modalBtnText: 'See Live',
    codeBtnText: 'See Source'

  }
]

let workCard = '';

for(let portfolio of portfolioObj){
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
      <a class="work-button" id="${portfolioObj.indexOf(portfolio).projectBtnText}" href="${portfolioObj.indexOf(portfolio)}">${portfolio.projectBtnText}</a>
  </div>
</div>
</div>
`;
}

myportfolio.innerHTML = workCard;

// Popup window

