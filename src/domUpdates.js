const ideasContainer = document.querySelector('#ideas-container');
const submitIdeaButton = document.querySelector("#save-button");
const userInputTitle = document.querySelector("#title-input");
const userInputDescription = document.querySelector("#description-input");


submitIdeaButton.addEventListener('click', function (event) {
  //should i handle this with a pipeline?

  displayIdeas(  
    addIdea( 
      createIdea(userInputTitle.value, userInputDescription.value ), ideas)
      )
})

ideasContainer.addEventListener('click', function(event){
  handleCardClick(event)
  //function to toggle favorite
})

//recursion
const htmlizeIdeas = (ideas) => {
  if (!ideas.length) {
    return
  }
  const firstIdea = findHead(ideas)
  const favoriteIcon = firstIdea.isFavorite ? "❤️" : "";
  const favButtonText = firstIdea.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'
  const htmlIdea = `
    <section class="idea-card" id="${firstIdea.id}">
      <div class="card-header"><span>${favoriteIcon}</span><p class="delete-x">X</p></div>
      <article>
        <h2 class="card-title">${firstIdea.title}</h2>
        <p class="card-text">${firstIdea.description}</p>
      </article>
      <button class="favorite-button">${favButtonText}</button>
    </section>`
  return [htmlIdea].concat([htmlizeIdeas(findTail(ideas))])
}

//recursion
const clearInputs = (inputs) => {
  if (!inputs.length) {
    return
  }
  findHead(inputs).value = ''
  return clearInputs(findTail(inputs))
}

const displayIdeas = (ideas) => {
  ideasContainer.innerHTML = htmlizeIdeas(ideas)
  clearInputs([userInputTitle, userInputDescription])
}

//helper functions
const findHead = (array) => {
  return array[0]
}

const findTail = (array) => {
  return array.slice(1)
}


module.exports = {
  htmlizeIdeas,
  clearInputs,
  displayIdeas
}