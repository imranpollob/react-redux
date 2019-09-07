import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

const mapStateToProps = state => ({
  remoteArticles: state.remoteArticles.slice(0, 10)
});

export class Post extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.remoteArticles.map(el => (
          <li className="list-group-item" key={el.id}>
            {el.title}
          </li>
        ))}
      </ul>
    );
  }
}

export default connect(
  mapStateToProps,
  { getData }
)(Post);
