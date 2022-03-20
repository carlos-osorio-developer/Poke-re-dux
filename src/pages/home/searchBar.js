import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaSearch } from 'react-icons/fa';
import { searchPokemon } from '../../redux/slices/pokemonListSlice';

export default function SearchBar() {
  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState('');

  const submitHandle = (payload) => {
    dispatch(searchPokemon(payload));
  };

  return (
    <Form
      className="w-50 m-auto mt-5"
      onSubmit={
        (e) => {
          e.preventDefault();
          submitHandle(searchInput);
        }
      }
    >
      <Form.Group className="mb-3 pt-5 d-flex">
        <Form.Control
          type="input"
          placeholder="Enter PokeName"
          onChange={
            (e) => { setSearchInput(e.target.value); }
          }
        />
        <Button variant="primary" type="submit">
          <FaSearch />
        </Button>
      </Form.Group>
    </Form>
  );
}
