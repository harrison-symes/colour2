import React, {Component} from 'react'

function Square ({colour}) {
  var style = {
    width: "20vw",
    height: "20vw",
    background: colour.colour
  };
  return <div className="square" style={style}>
  </div>
}

export default class Board extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.init()
  }
  render() {
    console.log(this.props)
    const {board} = this.props
    function renderRow(row, key) {
      return <div key={key} className="row">
        {row.map((colour, i) => <Square colour={colour} key={i} />)}
      </div>
    }
    return <div>
      {board.map(renderRow)}
    </div>
  }
}
