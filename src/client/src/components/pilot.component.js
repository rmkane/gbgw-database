import React, { Component } from "react";
import PilotDataService from "../services/pilot.service";

export default class Pilot extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getPilot = this.getPilot.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updatePilot = this.updatePilot.bind(this);
    this.deletePilot = this.deletePilot.bind(this);

    this.state = {
      currentPilot: {
        id: null,
        name: "",
        description: "",
        published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getPilot(this.props.match.params.id);
  }

  onChangeName(e) {
    const name = e.target.value;

    this.setState(function(prevState) {
      return {
        currentPilot: {
          ...prevState.currentPilot,
          name: name
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentPilot: {
        ...prevState.currentPilot,
        description: description
      }
    }));
  }

  getPilot(id) {
    PilotDataService.get(id)
      .then(response => {
        this.setState({
          currentPilot: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentPilot.id,
      name: this.state.currentPilot.name,
      description: this.state.currentPilot.description,
      published: status
    };

    PilotDataService.update(this.state.currentPilot.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentPilot: {
            ...prevState.currentPilot,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePilot() {
    PilotDataService.update(
      this.state.currentPilot.id,
      this.state.currentPilot
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The pilot was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deletePilot() {
    PilotDataService.delete(this.state.currentPilot.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/pilots')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentPilot } = this.state;

    return (
      <div>
        {currentPilot ? (
          <div className="edit-form">
            <h4>Pilot</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentPilot.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentPilot.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentPilot.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentPilot.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deletePilot}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updatePilot}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Pilot...</p>
          </div>
        )}
      </div>
    );
  }
}
