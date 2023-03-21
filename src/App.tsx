import React from 'react';

import { page } from './store/gameStore';
import { Navbar } from './components/Navbar';
import { Summary } from './components/Summary';
import { Settings } from './components/Settings';

function App() {
  const [page, setPage] = React.useState<page>('summary');

  const handleSelectPage = (pageSelected: page) => {
    setPage(pageSelected);
  };

  return (
    <>
      <Navbar onSelectPage={handleSelectPage} />
      {page === 'summary' ? <Summary /> : <Settings />}
    </>
  );
}

export default App;
