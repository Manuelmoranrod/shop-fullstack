import React, { useState } from 'react'
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import Footer from './components/Footer/Footer';
import './styles/styles.scss';
import { filteredData } from './context/filteredData'


function App() {

  const [filter, setFilter] = useState([]);

  return (
    <div className="principal">
      <filteredData.Provider value={{ filter, setFilter }}>
        <Header />
        <Table />
      </filteredData.Provider>
      <Footer />
    </div>
  );
}

export default App;
