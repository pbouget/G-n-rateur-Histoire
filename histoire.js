
const customName = document.getElementById('customname');
console.log("prénom : ",customName);
const randomize = document.getElementById('randomize');
console.log("randomize : ",randomize);
const story = document.querySelector('.texte');
console.log("visibility :",story);

// méthode pour choisir aléatoirement un des éléments d'un tableau reçu en paramètre.
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// le texte à afficher
const storyText = "Il faisait 94 degrés à l’extérieur, lorsque  :insertx: décida de partir se promener. Arrivé à :inserty:, il est resté pétrifié pendant quelques instants, puis :insertz:. Philippe a tout vu et n'a pas été surpris. — :insertx: avait beaucoup grossi. Il pesait renviron 300 tonnes.";
const insertX = ['Emmanuel Macron', 'Jean-Luc Mélenchon', 'Tom Cruise'];
const insertY = ["l\'Elysée", "Disneyland", "la plage"];
const insertZ = ['partit en sautant à cloche pied', 'se mit à chanter', 'se mit à danser la java'];

// on lance la fonction generer()
randomize.addEventListener('click', generer);

function generer() {
  // déclaration et affectation d'une nouvelle variable avec le texte de l'histoire par défaut
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX); // affecte à la variable l'un des 3 éléments du tableau insertX
  const yItem = randomValueFromArray(insertY); // affecte à la variable l'un des 3 éléments du tableau insertY
  const zItem = randomValueFromArray(insertZ); // affecte à la variable l'un des 3 éléments du tableau insertZ

  // Pour construire la nouvelle histoire, on effectue les remplacements 
  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

 // si l'internaute entre une valeur pour le nom
 // on la récupère avec la value et on remplace celle par défaut
  if (customName.value !== '')
  {
  //  const name = customName.value;
    newStory = newStory.replaceAll('Philippe', customName.value);
  }

  if (document.getElementById("us").checked) {
    const weight = `${Math.round(300*0.0714286)} pounds`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} degres fahrenheits`;
    newStory = newStory.replaceAll('94 degrés', temperature);
    newStory = newStory.replaceAll('300 tonnes', weight);
  }

  // on affecte la nouvelle histoire à la variable story
  story.textContent = newStory;
  console.log(newStory);
  // on rend visible le texte du paragraphe via la propriété CSS
  story.style.visibility = 'visible';
}
