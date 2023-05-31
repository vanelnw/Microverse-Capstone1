const doctors = [
  {
    image: './assets/doctor1.jpg',
    name: 'Dr.Tom Stewart',
    organization: 'Leading Neurologist',
    description:
      'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing,.',
  },
  {
    image: './assets/doctor3.jpg',
    name: 'Dr. Anna Walker',
    organization: 'Traumatologist',
    description:
      "As the author of <Digital Art Art of Our Time>, he opened 'Art Center Nabi', Korea's first digital art institution in 2000, and is currently serving.",
  },
  {
    image: './assets/doctor2.jpg',
    name: 'Dr. Paul Ford',
    organization: 'Cardiac Surgeon',
    description:
      "By developing Asia's first Internet protocol network SDN and leading Korea's first private line Internet connection in 1990.",
  },

  {
    image: './assets/doctor5.jpg',
    name: 'Dr. Sarah Snow',
    organization: 'Pediatrician',
    description:
    'She led open source projects at the Mozilla Foundation and joined CC as CEO in 2014. He has been active in open movements.',
  },
  {
    image: './assets/doctor4.jpg',
    name: 'Dr. Andrew Green',
    organization: 'Dermatologist',
    description:
      "European integration and online youth participation in politics and democracy are major concerns, and a report has been published that will potentially affect the revision of the EU's copyright law in July.",
  },

  {
    image: './assets/doctor6.jpg',
    name: 'Dr. Sandra Wok',
    organization: 'Gynicologist',
    description:
      'Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages ​.',
  },
];

const closeMenuButton = document.querySelector('.mobile-menu-close');
const nav = document.querySelector('.nav-bar');
const navLinks = document.querySelectorAll('.nav-item a');
const burgerMenuButton = document.querySelector('.mobile-menu-toggle');

function toggleMenu() {
  nav.classList.toggle('active');
}

if (burgerMenuButton) {
  burgerMenuButton.addEventListener('click', toggleMenu);
}

if (closeMenuButton) {
  closeMenuButton.addEventListener('click', toggleMenu);
}

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('nav-item')) {
    toggleMenu();
  }
});

navLinks.forEach((link) => {
  if (link.pathname === window.location.pathname) {
    link.parentElement.classList.add('active');
  }
});

const doctorsSection = document.querySelector('.doctors');
const doctorsSectionTitle = document.createElement('div');
doctorsSectionTitle.classList.add('doctors-title');
doctorsSectionTitle.innerHTML = '<span class="section-title">Featured Speakers</span> <span class="line"></span>';

const doctorsSectionContent = document.createElement('div');
doctorsSectionContent.classList.add('content', 'doctors-content');

let displayedDoctors = window.innerWidth >= 768 ? doctors.length : 2;
let startDoctorToAdd = 0;

function createDoctorItem(doctor) {
  const doctorItem = document.createElement('div');
  doctorItem.classList.add('doctor-item');
  doctorItem.innerHTML = `
    <img class="doctor-item-img" src=${doctor.image} alt="doctor" />
    <div class="doctor-item-info">
      <h4 class="doctor-name">${doctor.name}</h4>
      <p class="doctor-organize">${doctor.organization}</p>
      <hr />
      <p class="doctor-desc">${doctor.description}</p>
    </div>
  `;
  return doctorItem;
}

function appendDoctorItems(doctors) {
  if (!Array.isArray(doctors) || !doctors.length) {
    return;
  }
  doctors.slice(startDoctorToAdd, displayedDoctors).forEach((doctor) => {
    const doctorItem = createDoctorItem(doctor);
    doctorsSectionContent.append(doctorItem);
  });
}

appendDoctorItems(doctors);

const moreButton = document.createElement('a');
moreButton.setAttribute('class', 'more-btn');
moreButton.innerHTML = `
  <p>MORE</p> 
  <img class="down-arrow" src="./assets/icons/down-arrow.png" /> 
`;

moreButton.addEventListener('click', () => {
  startDoctorToAdd = displayedDoctors;
  displayedDoctors += 2;
  appendDoctorItems(doctors);
  if (displayedDoctors >= doctors.length) {
    moreButton.classList.add('more-btn-none');
  }
});

function handleResize() {
  if (window.innerWidth >= 768) {
    displayedDoctors = doctors.length;
    doctorsSectionContent.innerHTML = '';
    appendDoctorItems(doctors);
    moreButton.classList.add('more-btn-none');
  } else {
    displayedDoctors = 2;
    doctorsSectionContent.innerHTML = '';
    appendDoctorItems(doctors);
    moreButton.classList.remove('more-btn-none');
  }
}

window.addEventListener('resize', handleResize);

doctorsSection.append(doctorsSectionTitle);
doctorsSection.append(doctorsSectionContent);
doctorsSection.append(moreButton);
