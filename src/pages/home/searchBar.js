import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
  return (
    <Form className="w-50 m-auto mt-5">
      <Form.Group className="mb-3 pt-5 d-flex">
        <Form.Control type="email" placeholder="Enter PokeName" />
        <Button variant="primary" type="submit">
          <FaSearch />
        </Button>
      </Form.Group>
    </Form>
  );
}
