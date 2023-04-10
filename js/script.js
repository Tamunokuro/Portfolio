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
    desktopImg: './img/todo-list-snippet.png',
    separatorImg: './img/separator-icon.png',
    projectName: 'Minimal Todo List App',
    companyName: 'Microverse',
    position: 'Front End Developer',
    projectYear: 2022,
    projectDetails:
      'This is an interactive todo app built with html, css and javascript to help organize your daily activities.',
    projectTools: ['html', 'css', 'javaScript'],
    projectBtnText: 'See Project',
    modalBtnText: 'See Live',
    codeBtnText: 'See Source',
    sourceCode: 'https://github.com/Tamunokuro/todo-list',
    seelive: 'https://tamunokuro.github.io/todo-list/dist/',
  },
  {
    id: '2',
    workCardClass: 'work-section reverse work-2',
    mobileImg: '',
    desktopImg: './img/budgetlyapp.png',
    separatorImg: './img/separator-icon.png',
    projectName: 'Budgetly',
    companyName: 'Microverse',
    position: 'Full Stack Dev',
    projectYear: 2023,
    projectDetails:
      'Budgetly is a Ruby on Rails mobile application for managing user expenses',
    projectTools: ['html', 'Ruby on rails', 'css', 'javaScript'],
    projectBtnText: 'See Project',
    modalBtnText: 'See Live',
    codeBtnText: 'See Source',
    sourceCode: 'https://github.com/Tamunokuro/Budget-app',
    seelive: 'https://budgetly-app.onrender.com/',
  },
  {
    id: '3',
    workCardClass: 'work-section work-3',
    mobileImg: '',
    desktopImg: './img/music-summit.png',
    separatorImg: './img/separator-icon.png',
    projectName: 'Music Summit website',
    companyName: 'Microverse',
    position: 'Full Stack Dev',
    projectYear: 2023,
    projectDetails:
      'Music summit website is was developed to showcase an annual music festival for drum lovers in Africa',
    projectTools: ['html', 'css', 'javaScript'],
    projectBtnText: 'See Project',
    modalBtnText: 'See Live',
    codeBtnText: 'See Source',
    sourceCode: 'https://github.com/Tamunokuro/music-summit',
    seelive: 'https://tamunokuro.github.io/music-summit',
  },
  {
    id: '4',
    workCardClass: 'work-section work-4 reverse',
    mobileImg: '',
    desktopImg: './img/covid19-news.png',
    separatorImg: './img/separator-icon.png',
    projectName: 'COVID-19 News',
    companyName: 'Microverse',
    position: 'Full Stack Dev',
    projectYear: 2023,
    projectDetails:
      'COVID-19 News is a react application that shows the latest COVID-19 news in all countries around the world. This project was built with React bootstrap, React and Redux',
    projectTools: ['html', 'bootstrap', 'React'],
    projectBtnText: 'See Project',
    modalBtnText: 'See Live',
    codeBtnText: 'See Source',
    sourceCode: 'https://github.com/Tamunokuro/COVID-19-metrics-app',
    seelive: 'https://covid-19-news.onrender.com/',
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
      <ul id='language-list'>
      </ul>
      <button data-set=${[index]} class="work-button project-card-btn">${child.projectBtnText}</button>
  </div>
</div>
</div>
`;
  myportfolio.innerHTML += card;
  const ul = document.createElement('ul');
  ul.classList.add('work-tools');
  child.projectTools.forEach((tool) => {
    const liElement = document.createElement('li');
    liElement.setAttribute('class', 'tool');
    liElement.innerHTML = `${tool}`;
    ul.appendChild(liElement);
  });
  const ulOrg = document.getElementById('language-list');
  ulOrg.replaceWith(ul);
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
          <ul id='language-list'>
      
          </ul>
          <a class="work-button" href='${project.seelive}' target='_blank'
            >See Live
            <img src="img/live-icon.png" alt="See live project icon"
          /></a>
          <a class="work-button" href='${project.sourceCode}' target= '_blank'>See Source
            <img src="img/github-icon.png" alt="See source code icon"
          /></a>
        </div>
      </div>
    </div>
      `;
    modalContainer.innerHTML = modalCard;

    const ulElement = document.createElement('ul');
    ulElement.classList.add('work-tools');
    project.projectTools.forEach((tool) => {
      const liElement = document.createElement('li');
      liElement.setAttribute('class', 'tool');
      liElement.innerHTML = `${tool}`;
      ulElement.appendChild(liElement);
    });
    const ulOriginal = document.getElementById('language-list');
    ulOriginal.replaceWith(ulElement);
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

// Form validation
const form = document.querySelector('form');
const emailInput = document.getElementById('mail');
const mailError = document.querySelector('.error');

const emailCaseChecker = () => {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    mailError.innerText = 'Email should be in lower case';
  } else {
    mailError.innerText = '';
    form.submit();
  }
};

form.addEventListener('submit', (e) => {
  emailCaseChecker();
  e.preventDefault();
});

// Local Storage
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('msg');

const store = () => {
  const contactFormData = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem('contactFormData', JSON.stringify(contactFormData));
};

nameInput.addEventListener('keyup', store);
emailInput.addEventListener('keyup', store);
messageInput.addEventListener('keyup', store);

const contactInfo = JSON.parse(localStorage.getItem('contactFormData'));

if (contactInfo) {
  nameInput.value = contactInfo.name;
  emailInput.value = contactInfo.email;
  messageInput.value = contactInfo.message;
}