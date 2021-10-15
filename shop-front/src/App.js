import React, { useState } from 'react'
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import Footer from './components/Footer/Footer';
import './styles/styles.scss';
//import { filteredData } from './context/filteredData';
import { allData } from './context/allData'



function App() {
  //const [filter, setFilter] = useState([]);
  const [products, setProducts] = useState([]);


  return (
    <div className="principal">
        <allData.Provider value={{ products, setProducts }}>
          <Header />
          <Table />
        </allData.Provider>
        <Footer />
    </div>
  );
}

export default App;
