import React from 'react'
import { ISelect } from '../App'
import { MockClass } from '../models'
import SubClassDisplayer from './SubClassDisplayer';

interface CProps {
    classes: MockClass[],
    setCurrentSelect: (arg: ISelect) => void,
}

const ClassDisplayer = (props: CProps) => {

    function updateSelection(mockclass: MockClass) {
        props.setCurrentSelect({
            ...currentSelect,
            activeComponent: SubClassDisplayer,
            mockclass: mockclass,
        });
    }

  return (
    <div>
        {props.classes.map((item) =>
            <button type="button" key={item.mockClassId} onClick={() => updateSelection(item)}>{item.mockClassName}</button>
        )}
    </div>
  )
}

export default ClassDisplayer