import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const PeopleList = ({ kingdomId, kingdomName, selectedPerson }) => {
  const [people, setPeople] = useState([]);
  const [expandedPeople, setExpandedPeople] = useState({});

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await axios.get(`/api/continents/1/kingdoms/${kingdomId}/people`);
        setPeople(response.data);
      } catch (error) {
        console.error('Erro buscando pessoas:', error);
      }
    };

    if (kingdomId) {
      fetchPeople();
    }
  }, [kingdomId]);

  useEffect(() => {
    if (selectedPerson && selectedPerson.kingdom_id === kingdomId) {
      setExpandedPeople(prevState => ({
        ...prevState,
        [selectedPerson.id]: true
      }));
    }
  }, [selectedPerson, kingdomId]);

  const handleToggle = (personId) => {
    setExpandedPeople(prevState => ({
      ...prevState,
      [personId]: !prevState[personId]
    }));
  };

  return (
    <div>
      <h2>Pessoas de {kingdomName}</h2>
      <ul>
        {people.map(person => (
          <li key={person.id} className="list-item">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span 
                onClick={() => handleToggle(person.id)}
                className="icon-toggle"
              >
                <FontAwesomeIcon icon={expandedPeople[person.id] ? faChevronUp : faChevronDown} />
              </span>
              <span 
                className="person-name"
              >
                {person.name}
              </span>
            </div>
            {expandedPeople[person.id] && (
              <div style={{ marginLeft: '20px' }}>
                <p>{person.description}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;
