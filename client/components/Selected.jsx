import React from 'react'

export default class Selected extends React.Component {
  render() {
    const {colours} = this.props
    return <div className="columns is-multiline">
      {colours.map(({colour}, i ) => <div key={i} className="column is-2" style={{backgroundColor: colour, height: '15vh'}}>
          {colour}
        </div>
      )}
    </div>
  }
}
