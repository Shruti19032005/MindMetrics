import React, { useState } from 'react';
import Header from './components/Header';
import SurveyForm from './components/SurveyForm';
import Results from './components/Results';
import './index.css';

function App() {
  const [formData, setFormData] = useState(null);

  return (
    <div className="app">
      <Header />
      {!formData ? (
        <SurveyForm onSubmit={setFormData} />
      ) : (
        <Results data={formData} onBack={() => setFormData(null)} />
      )}
    </div>
  );
}

export default App;