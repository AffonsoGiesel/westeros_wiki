import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PersonDetails = () => {
  const { continentId, kingdomId, id } = useParams();
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`/api/continents/${continentId}/kingdoms/${kingdomId}/people/${id}`)
      .then((response) => {
        setPerson(response.data);
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
      <h1>{person.name}</h1>
      <p>{person.description}</p>
    </div>
  );
};

export default PersonDetails;
