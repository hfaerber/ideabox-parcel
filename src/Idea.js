//should this be deconstructed into individual functions that create each piece of this object?
const createIdea = (title, description, id) => {
  // event.preventDefault() 
  return {
    id: id ? id : Date.now(),
    title: title,
    description: description,
    isFavorite: false
  }
}

const addFavoriteStatus = (ideas) => {
  const favAddedIdeas = ideas.map(idea => {
    if (!idea.isFavorite) {
      const updatedIdea = {...idea, isFavorite: false}
      return updatedIdea
    } else {
      //caught that i needed this else when testing because I was getting undefined if the isFavorite key already existed - weird that this didnt cause errors on the UI??
      return idea
    }
  })
  return favAddedIdeas
}


const addIdea = (idea, oldIdeas) => {
  return [ ...oldIdeas, idea ]
}

const deleteIdea = (firstIdeas, endIdeas) => {
  return [...firstIdeas, ...endIdeas]
}

const toggleFavoriteStatus = (selected, firstIdeas, endIdeas) => {
  selected.isFavorite = !selected.isFavorite
  return [...firstIdeas, selected, ...endIdeas]
}


module.exports = {
  createIdea,
  addFavoriteStatus,
  addIdea,
  deleteIdea,
  toggleFavoriteStatus
}