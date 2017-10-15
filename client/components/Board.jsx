import React, {Component} from 'react'
import tickColours from '../functions/tickColours'

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
    this.state = {
      interval: null
    }
  }
  componentDidMount() {
    this.props.init()
  }
  startTicking() {
    const interval = setInterval(() => {
      let newBoard = tickColours(this.props.board, [])
      this.props.tick(newBoard)
    }, 1000)
    this.setState({interval})
  }
  stopTicking() {
    clearInterval(this.state.interval)
    this.setState({interval: null})
  }
  render() {
    console.log(this.props)
    const {board} = this.props
    const {interval} = this.state
    function renderRow(row, key) {
      return <div key={key} className="row">
        {row.map((colour, i) => <Square colour={colour} key={i} />)}
      </div>
    }
    return <div>
      {board.map(renderRow)}
      {interval
        ? <button onClick={this.stopTicking.bind(this)}>Stop</button>
        : <button onClick={this.startTicking.bind(this)}>Start</button>
      }
    </div>
  }
}
