import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faChevronDown, faChevronUp, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Problemset = () => {
  const [groupedQuestions, setGroupedQuestions] = useState({});
  const [expandedRatings, setExpandedRatings] = useState({});

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('https://codeforces.com/api/problemset.problems');
        if (!response.ok) {
          throw new Error('Failed to fetch questions from Codeforces');
        }
        const data = await response.json();
        const questions = data.result.problems;

        // Group questions by rating
        const grouped = questions.reduce((acc, question) => {
          const { rating } = question;
          if (rating) {
            if (!acc[rating]) acc[rating] = [];
            if (acc[rating].length < 5) acc[rating].push({
              id: question.contestId + question.index,
              name: question.name,
              tags: question.tags,
              rating: question.rating,
              contestId: question.contestId,
              index: question.index
            });
          }
          return acc;
        }, {});

        setGroupedQuestions(grouped);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const toggleRating = (rating) => {
    setExpandedRatings(prevState => ({
      ...prevState,
      [rating]: !prevState[rating]
    }));
  };

  const styles = {
    container: {
      paddingLeft: '0px',
      paddingRight: '20px',
      width: '100%', 
      display: 'flex',
      flexDirection: 'column',
      marginTop: '150px'
    },
    group: {
      marginBottom: '40px'
    },
    groupHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: 'pointer',
      padding: '10px 0'
    },
    groupTitle: {
      fontSize: '1.8em',
      marginBottom: '20px',
      color: '#333'
    },
    card: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '16px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s ease-in-out',
      display: 'flex',
      flexDirection: 'column'
    },
    cardTitle: {
      margin: 0,
      fontSize: '1.5em',
      color: '#333'
    },
    cardDetails: {
      margin: '4px 0',
      color: '#666'
    },
    cardDetailsBold: {
      fontWeight: 'bold'
    },
    buttonsRow: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    solvedButton: {
      backgroundColor: 'green',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      padding: '5px 10px',
      cursor: 'pointer'
    },
    unsolvedButton: {
      backgroundColor: 'white',
      color: 'black',
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '5px 10px',
      cursor: 'pointer'
    },
    link: {
      marginRight: 'auto',
      color: '#007bff',
      textDecoration: 'none'
    },
    bookmarkButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: '#007bff'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={{ marginLeft: '20px',marginBottom: '20px'}}>Codeforces Problemset</h2>
      {Object.entries(groupedQuestions).map(([rating, questions]) => (
        <div key={rating} style={styles.group}>
          <div style={styles.groupHeader} onClick={() => toggleRating(rating)}>
            <h3 style={styles.groupTitle}>Rating: {rating}</h3>
            <FontAwesomeIcon icon={expandedRatings[rating] ? faChevronUp : faChevronDown} />
          </div>
          {expandedRatings[rating] && questions.map(question => (
            <div key={question.id} style={styles.card} className="problem-card">
              <div className="problem-info">
                <h3 style={styles.cardTitle}>{question.name}</h3>
                <div className="problem-details">
                  <p style={styles.cardDetailsBold}>Rating: {question.rating}</p>
                  <p style={styles.cardDetails}>Tags: {question.tags.join(', ')}</p>
                </div>
                <div style={styles.buttonsRow}>
                  <button
                    style={Math.random() > 0.5 ? styles.solvedButton : styles.unsolvedButton} // Randomly simulate solved/unsolved state
                  >
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </button>
                  <a
                    href={`https://codeforces.com/contest/${question.contestId}/problem/${question.index}`}
                    style={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Problem
                  </a>
                  <button className="btn btn-outline-primary" style={styles.bookmarkButton}>
                    <FontAwesomeIcon icon={faBookmark} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Problemset;
