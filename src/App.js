
import List from './List/List';

import { useState } from 'react';

function App() {

  return (
    <div className="app">
      <h1 className='app__title'>My Do</h1>
      <h2 className='app__subtitle'>Simple app by Polyana on React</h2>
      <List />
    </div>
  );
}

export default App;
