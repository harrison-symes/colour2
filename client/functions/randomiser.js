function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function populateArray(array) {
  return array.map(row => row.map(idx => {
      return {
        colour: getRandomColor()
      }
    })
  )
}

function createColour() {
  return {
    colour: getRandomColor()
  }
}

function generateArray(size) {
  return Array(size).fill([]).map((idx) => {
    return Array(size).fill({})
  })
}

function shuffleBoard(board) {
  const size = board.length
  let newBoard = shuffle(flatten(board))
  const final = []
  for (let i = 0; i < size; i++) {
    final.push(newBoard.splice(0, size))
  }
  return final
}

function shuffle(a) {
  a = [...a]
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
  return a
}

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

module.exports = {
  getRandomColor,
  populateArray,
  generateArray,
  createColour,
  shuffleBoard
}
