import React from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Problemset from './components/problemset';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3">
          <Sidebar />
        </div>
        <div className="col-lg-9">
          <Navbar />
          <Problemset />
        </div>
      </div>
    </div>
  );
}

export default App;
