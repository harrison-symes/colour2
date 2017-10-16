import React from 'react'

export default function Selected (props) {
  const {colours, unSelect} = props
  return <div className="section columns is-multiline">
    {colours.map((c, i ) => <div  key={i} className="column is-2" style={{backgroundColor: c.colour, height: '15vh'}}>
        <h1 className="subtitle is-6">{c.colour}</h1>
        <button className="delete" onClick={() => unSelect(c)}/>
      </div>
    )}
  </div>
}
