import { useState } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Filters from './Components/Filters/Filters';
import Search from './Components/Search/Search';
import { useFilterContext } from './Context/filter_context';
import { FEATURE_FLAGS, FEATURE_FLAGS_HEADERS } from './Mock/featureFlags';

function App() {
  const { filteredList, isLoading, featureFlagHeader, clearFilter } =
    useFilterContext();

  if (isLoading) {
    // We can add spinner here - TODO
    return <div>Loading...</div>;
  }

  return (
    <main className='flex flex-col items-center'>
      <section className='flex justify-center items-center '>
        <Search />
        <Filters />
      </section>
      <button
        className='bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-1 px-2.5 border border-red-400 hover:border-transparent rounded'
        onClick={clearFilter}
      >
        Clear Filters
      </button>
      <Dashboard featureFlags={filteredList} headers={featureFlagHeader} />
    </main>
  );
}

export default App;
