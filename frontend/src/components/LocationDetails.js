import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const LocationDetails = () => {
  const { continentId, kingdomId, id } = useParams();
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`/api/continents/${continentId}/kingdoms/${kingdomId}/locations/${id}`)
      .then((response) => {
        setLocation(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [continentId, kingdomId, id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div>
      <h1>{location.name}</h1>
      <p>{location.description}</p>
    </div>
  );
};

export default LocationDetails;
