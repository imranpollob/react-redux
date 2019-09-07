import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "./../actions/index";

const mapDispatchToProps = dispatch => ({
  addArticle: article => dispatch(addArticle(article))
});

class ConnectedForm extends Component {
  state = {
    title: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.addArticle({
      id: uuidv1(),
      title: this.state.title
    });

    this.setState({
      title: ""
    });
  };

  render() {
    const { title } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          Save
        </button>
      </form>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ConnectedForm);
