import React, { ReactNode, useState } from 'react';
import Selector from './components/Selector';
import { MockClass, MockOption, MockSubClass } from './models';

import data from './data.json';
import ClassDisplayer from './components/ClassDisplayer';
import SubClassDisplayer from './components/SubClassDisplayer';
import OptionDisplayer from './components/OptionDisplayer';

export interface ISelect {
  activeComponent: JSX.Element,
  mockclass: MockClass | null,
  mocksubclass: MockSubClass | null,
  mockoptions: MockOption[] | null,
}

const App = () => {

  const [currentSelect, setCurrentSelect] = useState<ISelect>({
    activeComponent: ClassDisplayer,
    mockclass: null,
    mocksubclass: null,
    mockoptions: null
  });

  function updateCurrentSelect(updates: ISelect){
    setCurrentSelect(updates)
  }

  return (
    <div>
      <h1>Testing Transfer of Props via Objects</h1>
      <Selector data={data} setCurrentSelect={updateCurrentSelect} {...currentSelect}  />
    </div>
  )
}

export default App