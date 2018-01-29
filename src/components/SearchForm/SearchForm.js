import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchForm = props =>
  <form className="search">
    <div className="form-group">
      <label htmlFor="clients">Clients Name:</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="clients"
        list="clients"
        type="text"
        className="form-control"
        placeholder="Type in a client's name to begin:"
        id="clients"
      />
      <datalist id="clients">
        {props.clients.map(clients => <option value={clients} key={clients} />)}
      </datalist>
      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-success"
      >
        Search
      </button>
    </div>
  </form>;

export default SearchForm;
