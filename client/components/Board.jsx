import React, {Component} from 'react'
import tickColours from '../functions/tickColours'

import SizeSlider from '../containers/SizeSlider'
import IntervalSlider from '../containers/IntervalSlider'
import Square from '../containers/Square'
import Selected from '../containers/Selected'

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
  tickOnce() {
    this.props.tick(tickColours(this.props.board, this.props.savedColours))
  }
  startTicking() {
    const interval = setInterval(() => {
      this.tickOnce()
    }, 2000 / this.props.speed)
    this.setState({interval})
  }
  stopTicking() {
    clearInterval(this.state.interval)
    this.setState({interval: null})
  }
  reset() {
    this.stopTicking()
    clearInterval(this.state.interval)
    this.props.reset()
  }
  render() {
    const {board, size, saveColour, reset, isCircles, switchCircles} = this.props
    const {interval} = this.state
    function renderRow(row, key) {
      return <span key={key} className="row">
        {row.map((colour, i) => <Square colour={colour} key={i} />)}
      </span>
    }
    return <div className="has-text-centered columns">
      <div className="column" style={{border: '5px solid black  '}}>
        {board.map(renderRow)}
      </div>
      <div className="column is-5">
        <div className="level">
          <SizeSlider />
          <IntervalSlider />
          <button className="button is-warning is-large" onClick={this.reset.bind(this)}>RESET</button>
        </div>
        <div className="level">
          {interval
            ? <button className="button is-large is-danger" onClick={this.stopTicking.bind(this)}>STOP</button>
            : <button className="button is-large is-success" onClick={this.startTicking.bind(this)}>START</button>
          }
          <button className="button is-info is-large" onClick={this.tickOnce.bind(this)}>TICK</button>
          <button onClick={switchCircles} style={{borderRadius: isCircles ? '0' : '25vh'}} className="button is-primary is-large">{isCircles ? "Squarify" : "Circlify"}</button>
        </div>
        <Selected />
      </div>
    </div>
  }
}
