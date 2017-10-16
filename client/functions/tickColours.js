import randomiser from './randomiser'
import clone from 'clone'
//
// function startTicker(board, dispatch) {
//   setInterval(() => {
//     let newBoard = tickBoard(board)
//     dispatch({type: 'TICK_BOARD', payload: newBoard})
//   }, 5000)
// }

function tick(board, row, col, nextRow, nextCol, square) {
  board[row][col] = board[nextRow][nextCol]
}

function tickLoop(board, center) {
  var row = center
  var col = center - 1
  let count = 0
  var square = center - 1
  let flag = true
  while (flag) {
    if (row == 0 && col == 0) flag = false
    else if (row == square && col == square) {
      tick(board, row, col, row, col -1)
      col--
      square--
    } else {
      let tempRow = incrementRow(row, col, square, board.length)
      let tempCol = incrementCol(row, col, square, board.length)
      tick(board, row, col, tempRow, tempCol)
      col = tempCol
      row = tempRow
    }
    count++
    // if (count > 15) break
  }
}

function tickBoard(board, selected) {
  if (board) {
    let center = (board.length - 1) /2
    tick(board, center, center, center, center - 1)
    // board[center][center] = board[center][center - 1]
    tickLoop(board, center)
    board[0][0] = fillZeroIndex(board, selected)
  }
  return board
}

function fillZeroIndex(board, selected) {
  let answer = randomiser.createColour()
  if (selected.length > 0) {
    selected.forEach((select) => {
      let found = null
      board.forEach((array) => {
        array.forEach((el) => {
          if (el.colour == select.colour) {
            found = el
          }
        })
      })
      if (found == null) answer = select
    })
  }
  return answer
}

function incrementRow(row, col, square, length) {
  if (col == (0 + square) && row < (length - 1 - square)) return row + 1
  else if (col == (length - 1 - square) && row > (0 + square)) return row - 1
  else return row
}

function incrementCol(row, col, square, length) {
  if (row == (length - 1 - square) && col < (length - 1 - square)) return col + 1
  else if (row == (0 + square) && col > (0 + square)) return col - 1
  return col
}

module.exports = tickBoard
