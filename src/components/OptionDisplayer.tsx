import React from 'react'
import { MockSubClass } from '../models'

interface OProps {
    mocksubclass: MockSubClass

}

const OptionDisplayer = (props: OProps) => {
  return (
    <div>
        <div className="headerBox">
            <h3></h3>
            <h4>{props.mocksubclass.mockSubClassName}</h4>
        </div>
    </div>
  )
}

export default OptionDisplayer