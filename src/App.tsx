import * as React from 'react';
import Counter from './Counter';
import ShowName from './ShowName';

class App extends React.Component {
  public render() {
    return (
      <div>
        <ShowName name="velopert" />
        <Counter startNumber={5} />
      </div>
    );
  }
}

export default App;
