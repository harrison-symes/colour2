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
  ("calling tick on ", {row, col});
  board[row][col] = board[nextRow][nextCol]
}

function tickLoop(board, center) {
  ("tick");
  var row = center
  var col = center - 1
  let count = 0
  var square = center - 1
  let flag = true
  while (flag) {
    ({square});
    if (row == 0 && col == 0) flag = false
    else if (row == square && col == square) {
      ("new square");
      tick(board, row, col, row, col -1)
      col--
      square--
      ("post square change", {square, row, col});
    } else {
      let tempRow = incrementRow(row, col, square, board.length)
      let tempCol = incrementCol(row, col, square, board.length)
      tick(board, row, col, tempRow, tempCol)
      col = tempCol
      row = tempRow
      ("increment col/row");
    }
    count++
    // if (count > 15) break
  }
  ("stopped");
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
  ({selected});
  if (selected.length > 0) {
    selected.forEach((select) => {
      let found = null
      board.forEach((array) => {
        array.forEach((el) => {
          if (el.colour == select.colour) {
            ("found match", {el, select});
            found = el
          }
        })
      })
      ({found});
      if (found == null) answer = select
    })
  }
  ("randomising");
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
