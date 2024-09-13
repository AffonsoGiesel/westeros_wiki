import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const LocationList = ({ kingdomId, kingdomName, continentId }) => {
  const [locations, setLocations] = useState([]);
  const [expandedLocations, setExpandedLocations] = useState({});

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get(`/api/continents/${continentId}/kingdoms/${kingdomId}/locations`);
        setLocations(response.data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    if (kingdomId) {
      fetchLocations();
    }
  }, [kingdomId]);

  const handleToggle = (locationId) => {
    setExpandedLocations(prevState => ({
      ...prevState,
      [locationId]: !prevState[locationId]
    }));
  };

  return (
    <div>
      <h2>Localidade de {kingdomName}</h2>
      <ul>
        {locations.map(location => (
          <li key={location.id} className="list-item">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span 
                onClick={() => handleToggle(location.id)}
                className="icon-toggle"
              >
                <FontAwesomeIcon icon={expandedLocations[location.id] ? faChevronUp : faChevronDown} />
              </span>
              <span 
                className="location-name"
              >
                {location.name}
              </span>
            </div>
            {expandedLocations[location.id] && (
              <div style={{ marginLeft: '20px' }}>
                <p>{location.description}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationList;
