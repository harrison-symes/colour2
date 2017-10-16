import React, {Component} from 'react'
import rangeSlider from 'rangeslider.js'

export default class IntervalSlider extends Component {
  constructor(props) {
    super(props)
  }
  slide(e) {
    this.props.slide(Number(e.target.value))
  }
  render() {
    const {speed} = this.props
    const max = 10
    const bColour = speed != max ? (speed < max / 3 * 2 ? (speed < max / 3 ? 'green': 'yellow') : 'orange') : 'red'
    return <div className="section">
      <h1 className="subtitle is-1">Speed: {speed}</h1>
      <input className="progress" style={{backgroundColor: bColour}} onChange={this.slide.bind(this)} type="range" min="1" max={max} value={speed} />
    </div>
  }
}
