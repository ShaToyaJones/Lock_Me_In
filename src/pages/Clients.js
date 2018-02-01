import React, { Component } from "react";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";
import People from "../images/People.jpg";

class Clients extends Component {
  state = {
    search: "",
    clients: [],
    results: [],
    error: ""
  };
  
  render() {
    return (
      <div>
      <Container style={{ minHeight: "80%" }}>
      <center>
      <img src={People} alt="People" />
      </center>
        <h1 className="text-center">Search By Client:</h1>
        <Alert
          type="danger"
          style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
        >
          {this.state.error}
        </Alert>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          clients={this.state.clients}
        />
        <SearchResults results={this.state.results} />
      </Container>
      </div>
    );
  }
}

export default Clients;
