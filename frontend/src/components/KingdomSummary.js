// COMPONENTE DESCONTINUADO EM FAVOR DO KINGDOM LIST

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const KingdomSummary = ({ kingdomId }) => {
  const [kingdom, setKingdom] = useState(null);
  const [locations, setLocations] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchKingdomDetails = async () => {
      try {
        const response = await axios.get(`/api/continents/1/kingdoms/${kingdomId}`);
        setKingdom(response.data.kingdom);
        setLocations(response.data.locations);
        setPeople(response.data.people);
      } catch (error) {
        console.error('Erro buscando detalhes do reino:', error);
      }
    };

    if (kingdomId) {
      fetchKingdomDetails();
    }
  }, [kingdomId]);

  if (!kingdom) return <div>Carregando...</div>;

  return (
    <div>
      <h1>{kingdom.name}</h1>
      <p>{kingdom.description}</p>

      <h2>Localidades</h2>
      <ul>
        {locations.map(location => (
          <li key={location.id}>{location.name}</li>
        ))}
      </ul>

      <h2>Pessoas</h2>
      <ul>
        {people.map(person => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default KingdomSummary;
