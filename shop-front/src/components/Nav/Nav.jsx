import React, { useContext, useEffect, useState } from "react";
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
//import { useDebounce } from 'use-debounce';

//import { filteredData } from '../../context/filteredData'
import { allData } from '../../context/allData'


const Nav = () => {
  const [ filter, setFilter ] = useState([])
  const { products, setProducts } = useContext(allData)
  

  const handleChange = (e)=> {
    setFilter(e.target.value)
  };

  useEffect(() => {
    console.log("Lo que vas a filtrar",filter);
    if (filter) {
      //let result = [];
      const result = products.filter((data) => data.article.toLowerCase().includes(filter.toLowerCase()));
      setProducts(result);
      console.log("filtrados",result);
    }
  }, [filter]);
  
  return (
    <Navbar className="navbar">
      <Container>

        <Navbar.Brand href="#home">AWS warehouse</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              onChange={handleChange}
            />
          </Form>
          <Navbar.Text>
            Sign in:
          </Navbar.Text>
          <Button variant="outline-success">Login</Button>

        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
};

export default Nav;
