import React, { Fragment, Component } from "react";
import { Dropdown } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";

export class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <div className="navbar bg-danger p-3 text-center">
          <h3>
            <i className="fas fa-newspaper"></i> WORLD-NEWS
          </h3>
          <ul>
            <li>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <strong style={{ fontWeight: "bold" }}>CATEGORY</strong>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    style={{ color: "black", fontWeight: "bold" }}
                    href="#/action-1"
                    onClick={() => {
                      {
                        this.props.disp("entertainment", this.props.country);
                      }
                    }}
                  >
                    ENTERTAINMENT
                  </Dropdown.Item>

                  <Dropdown.Item
                    style={{ color: "black", fontWeight: "bold" }}
                    href="#/action-1"
                    onClick={() => {
                      {
                        this.props.disp("business", this.props.country);
                      }
                    }}
                  >
                    BUSINESS
                  </Dropdown.Item>

                  <Dropdown.Item
                    style={{ color: "black", fontWeight: "bold" }}
                    href="#/action-1"
                    onClick={() => {
                      {
                        this.props.disp("sports", this.props.country);
                      }
                    }}
                  >
                    SPORTS
                  </Dropdown.Item>
                  <Dropdown.Item
                    style={{ color: "black", fontWeight: "bold" }}
                    href="#/action-1"
                    onClick={() => {
                      {
                        this.props.disp("general", this.props.country);
                      }
                    }}
                  >
                    GENERAL
                  </Dropdown.Item>
                  <Dropdown.Item
                    style={{ color: "black", fontWeight: "bold" }}
                    href="#/action-1"
                    onClick={() => {
                      {
                        this.props.disp("science", this.props.country);
                      }
                    }}
                  >
                    SCIENCE
                  </Dropdown.Item>
                  <Dropdown.Item
                    style={{ color: "black", fontWeight: "bold" }}
                    href="#/action-1"
                    onClick={() => {
                      {
                        this.props.disp("health", this.props.country);
                      }
                    }}
                  >
                    HEALTH
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <strong style={{ fontWeight: "bold" }}>COUNTRY</strong>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    style={{ color: "black", fontWeight: "bold" }}
                    href="#/action-1"
                    onClick={() => {
                      {
                        this.props.disp(this.props.category, "us");
                      }
                    }}
                  >
                    USA
                  </Dropdown.Item>
                  <Dropdown.Item
                    style={{ color: "black", fontWeight: "bold" }}
                    href="#/action-1"
                    onClick={() => {
                      {
                        this.props.disp(this.props.category, "in");
                      }
                    }}
                  >
                    INDIA
                  </Dropdown.Item>
                  <Dropdown.Item
                    style={{ color: "black", fontWeight: "bold" }}
                    href="#/action-1"
                    onClick={() => {
                      {
                        this.props.disp(this.props.category, "gb");
                      }
                    }}
                  >
                    UNITED KINGDOM
                  </Dropdown.Item>
                  <Dropdown.Item
                    style={{ color: "black", fontWeight: "bold" }}
                    href="#/action-1"
                    onClick={() => {
                      {
                        this.props.disp(this.props.category, "fr");
                      }
                    }}
                  >
                    FRANCE
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>

        <h2
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            fontWeight: "bold",
            backgroundColor: "blue",
            color: "white",
            borderRadius: "3px",
          }}
        >
          {this.props.category} - {this.props.country}
        </h2>
      </Fragment>
    );
  }
}

export default Navbar;
