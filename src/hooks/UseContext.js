import React from 'react';

const ContextComp = React.createContext();

const UseContextHook = () => {
  return (
    <ContextComp.Provider value={'Context Value'}>
      <ComponentOne />
    </ContextComp.Provider>
  );
};

const ComponentOne = () => {
  return (
    <div>
      Component One
      <ComponentTwo />
    </div>
  );
};

const ComponentTwo = () => {
  return (
    <div>
      Component Two
      <ComponentThree />
    </div>
  );
};

const ComponentThree = () => {
  return (
    <div>
      Component Three
      <ContextComp.Consumer>
        {(val) => <div>Value passed {val}</div>}
      </ContextComp.Consumer>
    </div>
  );
};

export default UseContextHook;
