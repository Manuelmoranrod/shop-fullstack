import React, { useContext } from "react";
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { filteredData } from '../../context/filteredData'


const Nav = () => {
  const { filter, setFilter } = useContext(filteredData)
  //const [search, setSearch] = useState([])

  const handleChange = (e)=> {
    // setFilter(e.target.value)
    // console.log("change", filter);
    let value = e.target.value;
    let result = [];
    console.log(value);
    result = filter.filter((data) => {
    return data.title.search(value) !== -1;
    });
    setFilter(result);
  }
  



  return (
    <Navbar>
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
            <Button variant="outline-success">Search</Button>
          </Form>
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
};

export default Nav;
