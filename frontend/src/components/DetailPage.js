import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DetailPage() {
  const { id } = useParams();  
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await axios.get(`/continents/${id}`);  
        setDetail(response.data);
      } catch (error) {
        console.error("Erro ao buscar detalhes: ", error);
      }
    };

    fetchDetail();
  }, [id]);

  if (!detail) {
    return <p>Carregando detalhes...</p>;
  }

  return (
    <div>
      <h2>{detail.name}</h2>
      <p>{detail.description}</p>
    </div>
  );
}

export default DetailPage;
