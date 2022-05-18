import React from 'react';
import { ISelect } from '../App';
import { MockClass, MockSubClass } from '../models'
import OptionDisplayer from './OptionDisplayer';

export interface SCProps {
    mockclass: MockClass;
    setCurrentState: (arg: ISelect) => void,
}

const SubClassDisplayer = (props: SCProps) => {

    function updateSelection(item: MockSubClass) {
        props.setCurrentState({
            ...currentSelect,
            activeComponent: OptionDisplayer,
            mockoptions: item.mockOptionCollection,
        })
    }

  return (
    <div>
        <h3>{props.mockclass.mockClassName}</h3>
        <div>
            {props.mockclass.mockSubClassCollection.map((item) =>
                <button type="button" key={item.mockSubClassId} onClick={() => updateSelection(item)}>{item.mockSubClassName}</button>
            )}
        </div>
    </div>
  )
}

export default SubClassDisplayer