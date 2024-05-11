import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import AppHeader from './compoments/app-header';
import routes from './router/index';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">{useRoutes(routes)}</Suspense>
    </div>
  );
}

export default App;
