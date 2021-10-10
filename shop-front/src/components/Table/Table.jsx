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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('http://localhost:5000/api/articles');
      setProducts(data);
      console.log(data);
    };
    fetchProducts();
  }, []); 

  
  return (
    <div className="table">
      <Card>
        <DataTable
          title="Movies"
          columns={columns}
          data={products}
          defaultSortFieldId={1}
          sortIcon={<SortIcon />}
          pagination
          selectableRows
        />
      </Card>
    </div>
  );
}

export default Table


