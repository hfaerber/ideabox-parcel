# ideabox-parcel

A scattered attempt at functional programming with too much focus on recursion and not enough time to focus on everything else.  Great learning and sparked LOTS of questions, ideas and reflections!

## Reflections

Where was I able to:
  - Make use of Pure Functions?  
    - With the exception of DOM related functions, this was less of a challenge than I initially expected
      - Idea.js >  
        - I believe all functions here are relatively pure with the exception of using `Date.now()` for unique ids
      - Main.js >  
        - updateIdeas, findHead & findTail are pure  
        - the other functions in this file touch the DOM so they are not pure  
  - Make use of Higher Order Functions?  
    - I use map to add a favorite status to all ideas.
    - My clearInputs function uses recursion but I'm still trying to determine if it is a higher order function
  - Make use of Closures?  
    - I started a branch to try to use closures to manage my state/ideas array without it being a global function but I wasn't able to get it functional in time
  - Make use of Curried Functions?  
    - I did not implement curried functions
  - Make use of Composition?  
    - I did not implement composition

  - How did you go about creating your data model? Where is it in your code?  
    - My data model is really just my ideas array which is stored in a global variable and updated by the updateIdeasArray function.  Both live in my main.js file with my DOM functionality - I couldn't figure out how to move them out of main.js.  The updateIdeasArray function felt like a piece I needed in main.js to be able to connect the functionality that is living in Ideas.js 

  - How well were you able to separate your data model from the DOM logic? Where is that separation in the code?  
    - Function by function this separation felt do-able.  I wasn't able to pull my ideas array or the updateIdeasArray function out of the main.js file where all the DOM logic lives though. 

