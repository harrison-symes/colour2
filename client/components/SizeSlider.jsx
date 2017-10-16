import React, {Component} from 'react'

export default class SizeSlider extends Component {
  constructor(props) {
    super(props)
  }
  slide(e) {
    (e.target.value)
    if (e.target.value % 2 != 0) this.props.slide(Number(e.target.value))
  }
  render() {
    (this.props)
    const {size} = this.props
    const max = 49
    const bColour = size != max ? (size < max / 3 * 2 ? (size < max / 3 ? 'green': 'yellow') : 'orange') : 'red'
    return  <div className="section">
      <h1 className="subtitle">Size: <strong style={{color: bColour}}>{size}</strong></h1>
      <input className="progress" style={{backgroundColor: bColour}} onChange={this.slide.bind(this)} type="range" value={size} min="3" max={max} />
    </div>
  }
}
