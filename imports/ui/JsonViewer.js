import React from 'react'
import ReactJSON from 'react-json-view'

const JsonViewer = (props) => {
  return (
    <div>
      <ReactJSON
        name="WorkFlow"
        src={props.json}
        theme="flat"
      />
    </div>
  )
}

export default JsonViewer;