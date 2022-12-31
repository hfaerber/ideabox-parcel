
//should this be deconstructed into individual functions that create each piece of this object?
const createIdea = (title, description) => {
  event.preventDefault() 
  return {
    id: Date.now(),
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
    }
  })
  ideas = favAddedIdeas
  return ideas
}


const addIdea = (idea, oldIdeas) => {
  const newIdeas = [ ...oldIdeas, idea ]
  ideas = newIdeas
  return ideas
}

const deleteIdea = (firstIdeas, endIdeas) => {
  ideas = [...firstIdeas, ...endIdeas]
  return ideas
}

const toggleFavoriteStatus = (selected, firstIdeas, endIdeas) => {
  selected.isFavorite = !selected.isFavorite
  ideas = [...firstIdeas, selected, ...endIdeas]
  return ideas
}

module.exports = {
  createIdea,
  addFavoriteStatus,
  addIdea,
  deleteIdea,
  toggleFavoriteStatus
}