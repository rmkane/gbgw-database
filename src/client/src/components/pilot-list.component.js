import React, { Component } from "react";
import PilotDataService from "../services/pilot.service";
import { Link } from "react-router-dom";

export default class PilotList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrievePilots = this.retrievePilots.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActivePilot = this.setActivePilot.bind(this);
    this.removeAllPilots = this.removeAllPilots.bind(this);
    this.searchName = this.searchName.bind(this);

    this.state = {
      pilots: [],
      currentPilot: null,
      currentIndex: -1,
      searchName: ""
    };
  }

  componentDidMount() {
    this.retrievePilots();
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  retrievePilots() {
    PilotDataService.getAll()
      .then(response => {
        this.setState({
          pilots: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrievePilots();
    this.setState({
      currentPilot: null,
      currentIndex: -1
    });
  }

  setActivePilot(pilot, index) {
    this.setState({
      currentPilot: pilot,
      currentIndex: index
    });
  }

  removeAllPilots() {
    PilotDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchName() {
    PilotDataService.findByName(this.state.searchName)
      .then(response => {
        this.setState({
          pilots: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchPilot, pilots, currentPilot: currentPilot, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              value={searchPilot}
              onChange={this.onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Pilots List</h4>

          <ul className="list-group">
            {pilots &&
              pilots.map((pilot, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActivePilot(pilot, index)}
                  key={index}
                >
                  {pilot.name}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllPilots}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentPilot ? (
            <div>
              <h4>Pilot</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentPilot.name}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentPilot.description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentPilot.published ? "Published" : "Pending"}
              </div>

              <Link
                to={"/pilots/" + currentPilot.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Pilot...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
