import React from 'react';
import PipelineDashboard from './components/PipelineDashboard.jsx';
import PipelineCreation from './components/PipelineCreation.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
     {/* <PipelineDashboard/> */}
     <PipelineCreation/>
    </div>
  );
}

export default App;
