import React, { useState } from 'react';
import './style.css';

import data from './data.js';
import Question from './Question.js';

function App() {
  const [questions, setQuesion] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
