import React, { useState, useEffect } from 'react';
import CustomMap from './CustomMap';
import SearchBar from './SearchBar';
import KingdomList from './KingdomList';
//Não mais utilizado
// import KingdomSummary from './KingdomSummary';
import LogoutButton from './LogoutButton';
import LocationDetails from './LocationDetails';
import PersonDetails from './PersonDetails';
import KingdomDetails from './KingdomDetails';

const HomePage = () => {
  const [continentId, setContinentId] = useState(1);
  const [selectedKingdom, setSelectedKingdom] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleSelectKingdom = (kingdom, person, location) => {
    setSelectedKingdom(kingdom);
    setSelectedPerson(person);
    setSelectedLocation(location);
  };

  const handleResultSelect = (result) => {
    if (result.type === 'kingdom') {
      setSelectedKingdom(result);
      setSelectedPerson(null);
      setSelectedLocation(null);
    } else if (result.type === 'person') {
      setSelectedPerson(result);
      setSelectedKingdom({ id: result.kingdom_id });
      setSelectedLocation(null);
    } else if (result.type === 'location') {
      setSelectedLocation(result);
      setSelectedKingdom({ id: result.kingdom_id });
      setSelectedPerson(null);
    }

    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <h1>Bem-vindo à Wiki de Westeros</h1>
      {isAuthenticated && <LogoutButton setIsAuthenticated={setIsAuthenticated} />}
      <SearchBar onResultSelect={handleResultSelect} />
      <CustomMap />
      <KingdomList 
  continentId={continentId} 
  onSelect={handleSelectKingdom} 
  selectedKingdom={selectedKingdom} 
  selectedPerson={selectedPerson} 
/>
      <div id="result-section">
      {selectedKingdom && <KingdomDetails kingdomId={selectedKingdom.id} />}
        {selectedPerson && <PersonDetails personId={selectedPerson.id} />}
        {selectedLocation && <LocationDetails locationId={selectedLocation.id} />}
      </div>
    </div>
  );
};

export default HomePage;
