var expect = require('chai').expect
var Idea = require("../src/Idea.js");


describe('main', function () {
  it('should return true', function () {
    expect(2+2===4).to.equal(true)
  });

  it('should return idea object with isFavorite status', function () {
    const result = Idea.createIdea('mockTitle', 'mockDescription', 55)
    const expected = {
      id: 55,
      title: 'mockTitle',
      description: 'mockDescription',
      isFavorite: false
    }
    expect(result).to.deep.equal(expected)
  })

  it('should return idea object with random id if none provided', function () {
    const result = Idea.createIdea('mockTitle', 'mockDescription')
    const expected = {
      id: 55,
      title: 'mockTitle',
      description: 'mockDescription',
      isFavorite: false
    }
    expect(result).to.have.property('id')
    expect(result.id).to.be.a('number')
    expect(result).to.not.deep.equal(expected)
  })

  it('should add isFavorite property of false if none exists', function () {
    let ideas = [
      { id: 1, title: 'Bluetooth rotary phone', description: 'Because it\'s cool as heck and who wants a landline these days' },
      { id: 2, title: 'Bring back bowing', description: 'No more shaking hands! Let\'s all bow and curtsy instead' }
    ]

    const result = Idea.addFavoriteStatus(ideas)
    const expected = [
      { id: 1, title: 'Bluetooth rotary phone', description: 'Because it\'s cool as heck and who wants a landline these days', isFavorite: false },
      { id: 2, title: 'Bring back bowing', description: 'No more shaking hands! Let\'s all bow and curtsy instead', isFavorite: false }
    ]

    expect(result).to.deep.equal(expected)

  })

  it('should leave isFavorite the same if already exists', function () {
    let ideas = [
      { id: 1, title: 'Bluetooth rotary phone', description: 'Because it\'s cool as heck and who wants a landline these days' },
      { id: 2, title: 'Bring back bowing', description: 'No more shaking hands! Let\'s all bow and curtsy instead', isFavorite: true },
      { id: 3, title: 'Waterproof books', description: 'For reading in a pool/ocean/bathtub', isFavorite: false }
    ]

    const result = Idea.addFavoriteStatus(ideas)
    const expected = [
      { id: 1, title: 'Bluetooth rotary phone', description: 'Because it\'s cool as heck and who wants a landline these days', isFavorite: false },
      { id: 2, title: 'Bring back bowing', description: 'No more shaking hands! Let\'s all bow and curtsy instead', isFavorite: true },
      { id: 3, title: 'Waterproof books', description: 'For reading in a pool/ocean/bathtub', isFavorite: false }
    ]

    expect(result).to.deep.equal(expected)
  })

  it('should add new idea with isFavorite property to ideas array', function () {
    let ideas = [
      { id: 1, title: 'Bluetooth rotary phone', description: 'Because it\'s cool as heck and who wants a landline these days', isFavorite: true },
      { id: 2, title: 'Bring back bowing', description: 'No more shaking hands! Let\'s all bow and curtsy instead', isFavorite: true }
    ];
    const newIdea = { id: 3, title: 'Waterproof books', description: 'For reading in a pool/ocean/bathtub', isFavorite: false }

    const result = Idea.addIdea(newIdea, ideas)
    const expected = [
      { id: 1, title: 'Bluetooth rotary phone', description: 'Because it\'s cool as heck and who wants a landline these days', isFavorite: true },
      { id: 2, title: 'Bring back bowing', description: 'No more shaking hands! Let\'s all bow and curtsy instead', isFavorite: true },
      { id: 3, title: 'Waterproof books', description: 'For reading in a pool/ocean/bathtub', isFavorite: false }
    ]

    expect(result).to.deep.equal(expected)
  })

  it('should add delete idea from ideas array', function () {
    let firstIdeas = [
      { id: 1, title: 'Bluetooth rotary phone', description: 'Because it\'s cool as heck and who wants a landline these days', isFavorite: false }];
    let endIdeas = [
      { id: 3, title: 'Waterproof books', description: 'For reading in a pool/ocean/bathtub', isFavorite: false }
    ]

    const result = Idea.deleteIdea(firstIdeas, endIdeas)
    const expected = [ 
      { id: 1, title: 'Bluetooth rotary phone', description: 'Because it\'s cool as heck and who wants a landline these days', isFavorite: false },
     { id: 3, title: 'Waterproof books', description: 'For reading in a pool/ocean/bathtub', isFavorite: false }

    ]

    expect(result).to.deep.equal(expected)
  })

  it('should add toggle isFavorite property to false', function () {
    let firstIdeas = [
      { id: 1, title: 'Bluetooth rotary phone', description: 'Because it\'s cool as heck and who wants a landline these days', isFavorite: false }];
    let endIdeas = [
      { id: 3, title: 'Waterproof books', description: 'For reading in a pool/ocean/bathtub', isFavorite: false }
    ]
    let selected = { id: 2, title: 'Bring back bowing', description: 'No more shaking hands! Let\'s all bow and curtsy instead', isFavorite: true }

    const result = Idea.toggleFavoriteStatus(selected, firstIdeas, endIdeas)
    const expected = [ 
      { id: 1, title: 'Bluetooth rotary phone', description: 'Because it\'s cool as heck and who wants a landline these days', isFavorite: false },
      { id: 2, title: 'Bring back bowing', description: 'No more shaking hands! Let\'s all bow and curtsy instead', isFavorite: false },
     { id: 3, title: 'Waterproof books', description: 'For reading in a pool/ocean/bathtub', isFavorite: false }

    ]


    expect(result).to.deep.equal(expected)
  })

  it('should add toggle isFavorite property to true', function () {
    let firstIdeas = [
      { id: 1, title: 'Bluetooth rotary phone', description: 'Because it\'s cool as heck and who wants a landline these days', isFavorite: false }];
    let endIdeas = [
      { id: 3, title: 'Waterproof books', description: 'For reading in a pool/ocean/bathtub', isFavorite: false }
    ]
    let selected = { id: 2, title: 'Bring back bowing', description: 'No more shaking hands! Let\'s all bow and curtsy instead', isFavorite: false }

    const result = Idea.toggleFavoriteStatus(selected, firstIdeas, endIdeas)
    const expected = [ 
      { id: 1, title: 'Bluetooth rotary phone', description: 'Because it\'s cool as heck and who wants a landline these days', isFavorite: false },
      { id: 2, title: 'Bring back bowing', description: 'No more shaking hands! Let\'s all bow and curtsy instead', isFavorite: true },
     { id: 3, title: 'Waterproof books', description: 'For reading in a pool/ocean/bathtub', isFavorite: false }

    ]


    expect(result).to.deep.equal(expected)
  })

});


