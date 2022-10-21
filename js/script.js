const closeMenu = document.querySelector('.close-menu');
const nav = document.querySelector('nav');
const burgerMenu = document.querySelector('.mobile-menu');

function toggleMenu() {
  nav.classList.toggle('nav-show');
}

if (burgerMenu) {
  burgerMenu.addEventListener('click', toggleMenu);
}

if (closeMenu) {
  closeMenu.addEventListener('click', toggleMenu);
}

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav-item')) {
    toggleMenu();
  }
});

const speakers = [
  {
    image: './assets/doctor1.jpg',
    name: 'Dr.Tom Stewart',
    organization: 'Leading Neurologist',
    description:
      'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.',
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
      'Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages ​.',
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
      'He led open source projects at the Mozilla Foundation and joined CC as CEO in 2014. He has been active in open movements such as open government and open source.',
  },
];

const body = document.querySelector('body');
const speakersSection = document.createElement('div');

speakersSection.setAttribute('class', 'section speakers');

const speakersSectionTitle = document.createElement('div');
speakersSectionTitle.setAttribute('class', 'title speakers-title');
speakersSectionTitle.innerHTML = '<span>Featred speakers</span>';

const speakersSectionContent = document.createElement('div');
speakersSectionContent.setAttribute('class', 'content speakers-content');

function AppendSpeakerItem(Speakers) {
  // eslint-disable-next-line no-restricted-syntax
  for (const element of Speakers) {
    const speakerItem = document.createElement('div');
    speakerItem.setAttribute('class', 'speaker-item');
    speakerItem.innerHTML = `<img class="speaker-item-img" src=${element.image} alt="speaker1" />
<div class="speaker-item-info">
<h4 class="speaker-name">${element.name}</h4>
          <p class="speaker-organize">${element.organization}</p>
          <hr />
          <p class="speaker-desc">
           ${element.description}
          </p>
</div>
          `;

    speakersSectionContent.append(speakerItem);
  }
}

AppendSpeakerItem(speakers);

const morebtn = document.createElement('a');
morebtn.setAttribute('class', 'more-btn');
morebtn.innerText = 'more';

morebtn.addEventListener('click', () => {
  const content = document.querySelector('.speakers-content');

  const h = content.offsetHeight;

  speakersSectionContent.style.maxHeight = `${h * 2}px`;

  if (content.offsetHeight >= 1100) {
    morebtn.classList.add('more-btn-none');
  }
});

speakersSection.append(speakersSectionTitle);
speakersSection.append(speakersSectionContent);
speakersSection.append(morebtn);
body.insertBefore(speakersSection, body.children[2]);
