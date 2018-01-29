import React, { Component } from "react";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

class Clients extends Component {
  state = {
    search: "",
    clients: [],
    results: [],
    error: ""
  };

  // // When the component mounts, get a list of all available base breeds and update this.state.breeds
  // componentDidMount() {
  //   API.getBaseClientsList()
  //     .then(res => this.setState({ clients: res.data.message }))
  //     .catch(err => console.log(err));
  // }

  // handleInputChange = event => {
  //   this.setState({ search: event.target.value });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   API.getClientsName(this.state.search)
  //     .then(res => {
  //       if (res.data.status === "error") {
  //         throw new Error(res.data.message);
  //       }
  //       this.setState({ results: res.data.message, error: "" });
  //     })
  //     .catch(err => this.setState({ error: err.message }));
  // };
  render() {
    return (
      <Container style={{ minHeight: "80%" }}>
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
    );
  }
}

export default Clients;
