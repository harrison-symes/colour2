import React, {Component} from 'react'

export default class SizeSlider extends Component {
  constructor(props) {
    super(props)
  }
  slide(e) {
    console.log(e.target.value)
    if (e.target.value % 2 != 0) this.props.slide(Number(e.target.value))
  }
  render() {
    console.log(this.props)
    return  <div>
      <h1>Size: {this.props.size}</h1>
      <input onChange={this.slide.bind(this)} type="range" value={this.props.size} min="3" max="50" />
    </div>
  }
}
