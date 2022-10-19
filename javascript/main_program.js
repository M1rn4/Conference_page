// eslint-disable-next-line no-unused-vars
const programs = {
  id: ['1', '2', '3', '4', '5'],
  icon: ['./javascript/images/lecture_icon.svg', './javascript/images/exhibition_icon.svg', './javascript/images/forum_icon.svg', './javascript/images/workshop_icon.svg', './javascript/images/ignite_icon.svg'],
  title: ['Lecture', 'CC Exhibition', 'Forum', 'Workshop', 'CC Ignite'],
  description_icon: ['lecture icon', 'CC Exhibition icon', 'Forum icon', 'Workshop icon', 'CC Ignite icon'],
  description: ['Lisen to the speakers of various contries  about this topic'],
};
// eslint-disable-next-line no-unused-vars
const programsection = document.querySelector('#Program');
// eslint-disable-next-line no-restricted-syntax, no-plusplus, no-const-assign
for (let i = 0; i < programs.id.length; i++) {
  // eslint-disable-next-line no-console
  programsection.innerHTML += `
    <div class="program_card" id="${programs.id[i]}">
    <img src="${programs.icon[i]}" alt="${programs.description_icon[i]}">
    <h3>${programs.title[i]}</h3>
    <p class="parr_program">${programs.description[0]}<p>
  </div>
  `;
}
