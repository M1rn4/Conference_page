// eslint-disable-next-line no-unused-vars
const programs = {
  id: ['1', '2', '3', '4', '5'],
  icon: ['./javascript/images/program_icon_01.png',
    './javascript/images/program_icon_02.png',
    './javascript/images/program_icon_03.png',
    './javascript/images/program_icon_04.png',
    './javascript/images/program_icon_05.png'],
  title: ['Lecture', 'Exhibition', 'Forum', 'Workshop', 'CC Ignite'],
  description_icon: ['lecture icon', 'CC Exhibition icon', 'Forum icon', 'Workshop icon', 'CC Ignite icon'],
  description: ['Lisen to the speakers of various contries  about this topic'],
};
// eslint-disable-next-line no-unused-vars
const programsection = document.querySelector('#Program');
// eslint-disable-next-line no-plusplus
for (let i = 0; i < programs.id.length; i++) {
  // eslint-disable-next-line no-restricted-syntax, no-plusplus, no-const-assign, no-console
  programsection.innerHTML += `
    <div class="program_card" id="${programs.id[i]}">
      <img src="${programs.icon[i]}" alt="${programs.description_icon[i]}">
      <h5>${programs.title[i]}</h5>
      <p class="parr_program">${programs.description[0]}</p>
    </div>
  `;
}
