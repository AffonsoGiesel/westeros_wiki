import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationsList from './LocationsList';
import PeopleList from './PeopleList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const KingdomList = ({ continentId, onSelect, selectedKingdom, selectedPerson }) => {
  const [kingdoms, setKingdoms] = useState([]);
  const [expandedKingdoms, setExpandedKingdoms] = useState({});

  useEffect(() => {
    const fetchKingdoms = async () => {
      try {
        const response = await axios.get(`/api/continents/${continentId}/kingdoms`);
        setKingdoms(response.data);
      } catch (error) {
        console.error('Erro buscando os reinos:', error);
      }
    };

    if (continentId) {
      fetchKingdoms();
    }
  }, [continentId]);

  useEffect(() => {
    if (selectedKingdom) {
      setExpandedKingdoms(prevState => ({
        ...prevState,
        [selectedKingdom.id]: true
      }));
    }

    if (selectedPerson) {
      const kingdomId = selectedPerson.kingdom_id;
      setExpandedKingdoms(prevState => ({
        ...prevState,
        [kingdomId]: true
      }));
    }
  }, [selectedKingdom, selectedPerson]);

  const handleToggle = (kingdomId) => {
    setExpandedKingdoms(prevState => ({
      ...prevState,
      [kingdomId]: !prevState[kingdomId]
    }));
  };

  return (
    <div>
      <h2>Reinos</h2>
      <ul>
        {kingdoms.map(kingdom => (
          <li key={kingdom.id} className="list-item">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span 
                onClick={() => handleToggle(kingdom.id)}
                className="icon-toggle"
              >
                <FontAwesomeIcon icon={expandedKingdoms[kingdom.id] ? faChevronUp : faChevronDown} />
              </span>
              <span 
                className="kingdom-name" 
                onClick={() => onSelect(kingdom)}
              >
                {kingdom.name}
              </span>
            </div>
            {expandedKingdoms[kingdom.id] && (
              <div style={{ marginLeft: '20px' }}>
                <p>{kingdom.description}</p>
                <LocationsList kingdomId={kingdom.id} kingdomName={kingdom.name} />
                <PeopleList kingdomId={kingdom.id} kingdomName={kingdom.name} selectedPerson={selectedPerson} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KingdomList;
