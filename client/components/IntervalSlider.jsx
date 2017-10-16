import React, {Component} from 'react'

export default class IntervalSlider extends Component {
  constructor(props) {
    super(props)
  }
  slide(e) {
    this.props.slide(Number(e.target.value))
  }
  render() {
    console.log(this.props)
    return  <div>
      <h1>Speed: {this.props.speed}</h1>
      <input onChange={this.slide.bind(this)} type="range" min="1" max="10" value={this.props.speed}/>
    </div>
  }
}
