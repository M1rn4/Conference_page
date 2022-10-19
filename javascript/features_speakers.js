// eslint-disable-next-line no-unused-vars
const speaker = {
  id: ['1', '2', '3', '4', '5', '6'],
  img: ['./javascript/images/spk1.png', './javascript/images/spk2.png',
    './javascript/images/spk3.png', './javascript/images/spk4.png',
    './javascript/images/spk5.png', './javascript/images/spk6.png'],
  description: ['speaker1', 'speaker2', 'speaker3',
    'speaker4', 'speaker5', 'speaker6'],
};

// eslint-disable-next-line camelcase
const speakers_join = document.querySelector('#speakers');
// eslint-disable-next-line no-console
console.log('hola');
// eslint-disable-next-line no-restricted-syntax, no-plusplus, no-const-assign
for (let i = 0; i < (speaker.id.length) / 2; i++) {
  // eslint-disable-next-line no-console, no-unused-vars
  speakers_join.innerHTML += `
  <div class="img_join" id="${speaker.id[i]}">
    <img src="${speaker.img[i * 2]}" alt="${speaker.description[i * 2]}">
    <img src="${speaker.img[i * 2 + 1]}" alt="${speaker.description[i * 2 + 1]}">
  </div>
  `;
}