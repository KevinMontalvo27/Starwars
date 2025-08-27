import './App.css'
import { Table, Pagination, Modal, Searcher } from './components';
import {useFetch} from './hooks/useFetch';
import { useState } from 'react';


function App() {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const url = `https://swapi.info/api/people`
  const {data, loading, error} = useFetch(url);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [term, setTerm] = useState("");


  const allResults = data || [];

  const filteredResults = term
    ? allResults.filter(character =>
        character.name.toLowerCase().includes(term.toLowerCase())
      )
    : allResults;

  const totalItems = filteredResults.length;

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = filteredResults.slice(startIndex, endIndex);

  if (loading) return <h1 className='text-center'>Cargando...</h1>
  if (error) return <h1 className='text-red-600 text-center'>{error}</h1>
  //console.log("Datos en App:", data);

  const selectCharacter = (character) => {
    setSelectedCharacter(character);
  }

   const searchCharacter = (searchTerm) => {
    setTerm(searchTerm);
    setCurrentPage(1);
  };

  

  return (
    <div className="bg-gray-800 min-h-screen py-8">
      <h1 className="text-3xl font-bold text-center text-white mb-8">Personajes de Star Wars</h1>
      <Searcher
        term={term}
        onSearch={searchCharacter}
      />
      <Table data={currentData} selectCharacter={selectCharacter}/>
      <Pagination
        currentPage={currentPage}
        pageSize={pageSize}
        totalItems={totalItems}
        currentDataLength={currentData.length}
        onPageChange={setCurrentPage}
      />
      <Modal
        character={selectedCharacter}
        onClose={() => setSelectedCharacter(null)}
      />
    </div>
  )
}

export default App
