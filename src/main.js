import { htmlizeIdeas, clearInputs, displayIdeas } from "./domUpdates";
import {  createIdea,
  addFavoriteStatus,
  addIdea,
  deleteIdea,
  toggleFavoriteStatus } from "./Idea.js";


const { deleteIdea } = require("./Idea");

let ideas = [
  { id: 1, title: 'Bluetooth rotary phone', description: 'Because it\'s cool as heck and who wants a landline these days' },
  { id: 2, title: 'Bring back bowing', description: 'No more shaking hands! Let\'s all bow and curtsy instead' },
  { id: 3, title: 'Waterproof books', description: 'For reading in a pool/ocean/bathtub' },
]

window.onload = function () {
  //should i handle this with a pipeline?
 displayIdeas(addFavoriteStatus(ideas));
}

// //should this be deconstructed into individual functions that create each piece of this object?
// const createIdea = (title, description) => {
//   event.preventDefault() 
//   return {
//     id: Date.now(),
//     title: title,
//     description: description,
//     isFavorite: false
//   }
// }

// const addFavoriteStatus = (ideas) => {
//   const favAddedIdeas = ideas.map(idea => {
//     if (!idea.isFavorite) {
//       const updatedIdea = {...idea, isFavorite: false}
//       return updatedIdea
//     }
//   })
//   ideas = favAddedIdeas
//   return ideas
// }


// const addIdea = (idea, oldIdeas) => {
//   const newIdeas = [ ...oldIdeas, idea ]
//   ideas = newIdeas
//   return ideas
// }


const handleCardClick = (event) => {
  const clickedCardId = parseInt(event.target.closest('section').id);
  const index = ideas.findIndex(element => element.id === clickedCardId)
  const selected = ideas.slice(index, index + 1)[0]
  const firstIdeas = ideas.slice(0, index)
  const endIdeas = ideas.slice(index + 1)

  if (event.target.classList.contains('favorite-button') ) {
    toggleFavoriteStatus(selected, firstIdeas, endIdeas)
    displayIdeas(ideas)
  }
  else if (event.target.classList.contains('delete-x')) {
    deleteIdea(firstIdeas, endIdeas)
    displayIdeas(ideas)
  }

}

// const deleteIdea = (firstIdeas, endIdeas) => {
//   ideas = [...firstIdeas, ...endIdeas]
//   return ideas
// }

// const toggleFavoriteStatus = (selected, firstIdeas, endIdeas) => {
//   selected.isFavorite = !selected.isFavorite
//   ideas = [...firstIdeas, selected, ...endIdeas]
//   return ideas
// }


//DOM UPDATES - need to figure out import syntax for parcel
// const ideasContainer = document.querySelector('#ideas-container');
// const submitIdeaButton = document.querySelector("#save-button");
// const userInputTitle = document.querySelector("#title-input");
// const userInputDescription = document.querySelector("#description-input");


// submitIdeaButton.addEventListener('click', function (event) {
//   //should i handle this with a pipeline?

//   displayIdeas(  
//     addIdea( 
//       createIdea(userInputTitle.value, userInputDescription.value ), ideas)
//       )
// })

// ideasContainer.addEventListener('click', function(event){
//   handleCardClick(event)
//   //function to toggle favorite
// })


// const displayIdeas = (ideas) => {
//   ideasContainer.innerHTML = htmlizeIdeas(ideas)
//   clearInputs([userInputTitle, userInputDescription])
// }

// //recursion
// const htmlizeIdeas = (ideas) => {
//   if (!ideas.length) {
//     return
//   }
//   const firstIdea = findHead(ideas)
//   const favoriteIcon = firstIdea.isFavorite ? "❤️" : "";
//   const favButtonText = firstIdea.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'
//   const htmlIdea = `
//     <section class="idea-card" id="${firstIdea.id}">
//       <div class="card-header"><span>${favoriteIcon}</span><p class="delete-x">X</p></div>
//       <article>
//         <h2 class="card-title">${firstIdea.title}</h2>
//         <p class="card-text">${firstIdea.description}</p>
//       </article>
//       <button class="favorite-button">${favButtonText}</button>
//     </section>`
//   return [htmlIdea].concat([htmlizeIdeas(findTail(ideas))])
// }

// //recursion
// const clearInputs = (inputs) => {
//   if (!inputs.length) {
//     return
//   }
//   findHead(inputs).value = ''
//   return clearInputs(findTail(inputs))
// }

// const findHead = (array) => {
//   return array[0]
// }

// const findTail = (array) => {
//   return array.slice(1)
// }

// //FUNCTIONAL NOTES
// - could i use recursion?
// - ideas as a global variable is impure
// - can i fetch from api?
// - passing functions through to other functions doesn't look clean
// - which are impure?  do they need to be returning Ideas?
// - am i "prop drilling" the idea array through displayIdeas() > htmlizeIdeas()
// - am i using the data i'm returning from each function?
// - can i implement getters and setters? where? why?

// NEXT STEPS
// - search
// - pull in from api?
// filter by favorites
// no global variable