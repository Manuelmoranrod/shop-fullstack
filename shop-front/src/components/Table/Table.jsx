import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import axios from 'axios'
//import "./styles.css";

const columns = [
  {
    id: 1,
    name: "Artículo",
    selector: (row) => row.article,
    sortable: true,
    reorder: true
  },
  {
    id: 2,
    name: "Precio",
    selector: (row) => row.price,
    sortable: true,
    reorder: true
  },
  {
    id: 3,
    name: "Relevancia",
    selector: (row) => row.relevance,
    sortable: true,
    right: true,
    reorder: true
  }
];


const Table = () => {
  // Estado inicial del componente TABLE, recoge datos con el fetch/axios
  const [products, setProducts] = useState([]);
  //const [makers, setMakers] = useState([]);
  
  // Axios a la DDBB de todos los productos
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('http://localhost:5000/api/articles');
      setProducts(data);
      //console.log("fetch",data);
    };
    fetchProducts();
  }, []); 
  

  // Info para expandir cada ARTICLE
  const ExpandedComponent = ({ data }) => {
    console.log(data);
    return (
      <div className='expanded-info'>
        <p> Manufacured by: {data.maker}</p>
        <p>with CIF: {data.cif}</p>
        <p>direction: {data.direction}</p>
      </div>
    )
  };
  
  return (
    <div className="table">
      <Card>
        <DataTable
          title="Productos"
          columns={columns}
          data={products}
          defaultSortFieldId={1}
          sortIcon={<SortIcon />}
          pagination
          selectableRows
          expandableRows
          expandableRowsComponent={ExpandedComponent}
        />
      </Card>
    </div>
  );
}

export default Table


