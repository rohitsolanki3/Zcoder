import React, { useState, useEffect } from 'react';

const Problemset = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('https://codeforces.com/api/problemset.problems');
        if (!response.ok) {
          throw new Error('Failed to fetch questions from Codeforces');
        }
        const data = await response.json();
        // Extract relevant question data from the response
        const extractedQuestions = data.result.problems.slice(0, 30).map(problem => ({
          id: problem.contestId + problem.index,
          name: problem.name,
          tags: problem.tags,
          rating: problem.rating
        }));
        setQuestions(extractedQuestions);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div style={{ marginTop: '110px', marginLeft: '-200px' }}>
      <h2>Codeforces Problemset</h2>
      {questions.map(question => (
        <div key={question.id} className="problem-card">
          <div className="problem-info">
            <h3>{question.name}</h3>
            <div className="problem-details">
              <p>Rating: {question.rating}</p>
              <p>Tags: {question.tags.join(', ')}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Problemset;
