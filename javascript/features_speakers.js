// eslint-disable-next-line no-unused-vars
const speaker = {
  id: ['1', '2', '3', '4', '5', '6'],
  name: ['Yochai Benkler', 'Kilnam Chon',
    'Sohyeong Noh', 'Julia Reda',
    'Lila Tretikov', 'Ryan Merkley'],
  img: ['./javascript/images/spk1.png', './javascript/images/spk2.png',
    './javascript/images/spk3.png', './javascript/images/spk4.png',
    './javascript/images/spk5.png', './javascript/images/spk6.png'],
  description_icon: ['speaker1', 'speaker2', 'speaker3',
    'speaker4', 'speaker5', 'speaker6'],
  description: ['Professor at Harvard Law School',
    'Emeritus Professor, Korea Advanced Institute of Science and Technology (KAIST)',
    'Art Center Nabi Director, CC Korea Director',
    'Head of the Young Pirates of Europe',
    'Secretary General of the Wikimedia Foundation',
    'Creative Commons CEO, Former Mozilla Foundation COO'],
  text: ['Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia. ',
    'By developing Asias first Internet protocol network SDN and leading Koreas first private line Internet connection in 1990, it ushered in the era of the Internet in earnest.',
    'As the author of <Digital Art Art of Our Time>, he opened "Art Center Nabi", Koreas first digital art institution in 2000, and is currently serving.',
    'European integration and online youth participation in politics and democracy are major concerns, and a report has been published that will potentially affect the revision of the EU copyright law in July.',
    'Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia',
    'He has been active in open movements such as open government and open source.'],
};

// eslint-disable-next-line camelcase
const speakers_join = document.querySelector('#speakers');
// eslint-disable-next-line no-unused-vars, camelcase
function speakers_for(val) {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < val; i++) {
    speakers_join.innerHTML += `
        <div class="img_join_1" id="${speaker.id[i * 2]}">
          <div class="card_speaker">
            <img src="${speaker.img[i * 2]}" alt="${speaker.description_icon[i * 2]}">
            <div class="text_speakers">
              <h4>${speaker.name[i * 2]}</h4>
              <h3>${speaker.description[i * 2]}</h3>
              <p>${speaker.text[i * 2]}</p>    
            </div>
          </div>
          <div class="card_speaker">
            <img src="${speaker.img[i * 2 + 1]}" alt="${speaker.description_icon[i * 2 + 1]}">
            <div class="text_speakers">
              <h4>${speaker.name[i * 2 + 1]}</h4>
              <h3>${speaker.description[i * 2 + 1]}</h3>
              <p>${speaker.text[i * 2 + 1]}</p>   
            </div>
          </div>
        </div>
        `;
  }
}
speakers_for(3);