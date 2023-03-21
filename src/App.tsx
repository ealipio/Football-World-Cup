import React from 'react';

import { Navbar } from './components/Navbar';
import { Results } from './components/Results';
import { Manage } from './components/Manage';
import { page, DEFAULT_PAGE } from './store/gameStore';

function App() {
  const [page, setPage] = React.useState<page>(DEFAULT_PAGE);

  const handleSelectPage = (pageSelected: page) => {
    setPage(pageSelected);
  };

  return (
    <>
      <Navbar onSelectPage={handleSelectPage} />
      {page === DEFAULT_PAGE ? <Results /> : <Manage />}
    </>
  );
}

export default App;
