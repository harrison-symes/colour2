import React, {Component} from 'react'
import tickColours from '../functions/tickColours'



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
  componentWillReceiveProps(nextProps) {
    if (nextProps.speed != this.props.speed) {
      this.stopTicking()
      this.startTicking()
    }
  }
  startTicking() {
    const interval = setInterval(() => {
      let newBoard = tickColours(this.props.board, [])
      this.props.tick(newBoard)
    }, 2000 / this.props.speed)
    this.setState({interval})
  }
  stopTicking() {
    clearInterval(this.state.interval)
    this.setState({interval: null})
  }
  render() {
    const {board, size} = this.props
    const {interval} = this.state
    function Square ({colour}) {
      const height = `${80 / size}vh`
      var style = {
        width: height,
        height,
        background: colour.colour
      };
      return <div className="square" style={style}>
      </div>
    }
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
