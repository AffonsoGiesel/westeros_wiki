import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const KingdomDetails = () => {
  const { continentId, id } = useParams();
  const [kingdom, setKingdom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`/api/continents/${continentId}/kingdoms/${id}`)
      .then((response) => {
        setKingdom(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [continentId, id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div>
      <h1>{kingdom.kingdom.name}</h1>
      <p>{kingdom.kingdom.description}</p>
      <h2>Localidades</h2>
      <ul>
        {kingdom.locations.map(location => (
          <li key={location.id}>
            <Link to={`/continents/${continentId}/kingdoms/${id}/locations/${location.id}`}>
              {location.name}
            </Link>
          </li>
        ))}
      </ul>
      <h2>Pessoas de Interesse</h2>
      <ul>
        {kingdom.people.map(person => (
          <li key={person.id}>
            <Link to={`/continents/${continentId}/kingdoms/${id}/people/${person.id}`}>
              {person.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KingdomDetails;
