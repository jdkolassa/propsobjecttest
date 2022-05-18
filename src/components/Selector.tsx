import React from 'react'
import { ISelect } from '../App'

interface SProps extends ISelect {
  data: object | null;
  setCurrentSelect: (arg: ISelect) => void;
}


const Selector = (props: SProps) => {
  const {activeComponent} = props;
  return (
    <>
      {activeComponent}
    </>
    
  )
}

export default Selector