import React, {Component} from 'react'
import tickColours from '../functions/tickColours'

import SizeSlider from '../containers/SizeSlider'
import IntervalSlider from '../containers/IntervalSlider'
import Square from '../containers/Square'

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
    if (nextProps.speed != this.props.speed && this.state.interval) {
      this.stopTicking()
      this.startTicking()
    }
  }
  startTicking() {
    const interval = setInterval(() => {
      let newBoard = tickColours(this.props.board, this.props.savedColours)
      this.props.tick(newBoard)
    }, 2000 / this.props.speed)
    this.setState({interval})
  }
  stopTicking() {
    clearInterval(this.state.interval)
    this.setState({interval: null})
  }
  render() {
    const {board, size, saveColour} = this.props
    const {interval} = this.state
    // function Square ({colour, save}) {
    //   const height = `${80 / size}vh`
    //   var style = {
    //     height,
    //     width: height,
    //     background: colour.colour
    //   };
    //   return <div className="square has-text-centered" style={style}>
    //   </div>
    // }
    function renderRow(row, key) {
      return <span key={key} className="row">
        {row.map((colour, i) => <Square colour={colour} key={i} />)}
      </span>
    }
    return <div className="container has-text-centered columns">
      <div className="column is-8">
        {board.map(renderRow)}
      </div>
      <div className="column is-4">
        <SizeSlider />
        <IntervalSlider />
        {interval
          ? <button className="button is-large is-danger" onClick={this.stopTicking.bind(this)}>Stop</button>
          : <button className="button is-large is-success" onClick={this.startTicking.bind(this)}>Start</button>
        }
      </div>
    </div>
  }
}
