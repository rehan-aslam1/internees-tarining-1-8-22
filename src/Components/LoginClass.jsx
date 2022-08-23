import React, { Component } from "react";
class LoginClass extends Component {
  state = {
    user: {
      email: "",
      password: "",
    },
  };

  //   handleEmailChange = (e) => {
  //     this.setState({
  //       user: {
  //         ...this.state.user,
  //         [e.target.name]: e.target.value,
  //         email: e.target.value,
  //       },
  //     });
  //   };
  //   handlePasswordChange = (e) => {
  //     this.setState({
  //       user: {
  //         ...this.state.user,
  //         [e.target.name]: e.target.value,
  //        password: e.target.value,
  //       },
  //     });
  //   };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted value", this.state.user);
  };
  render() {
    return (
      <>
        <div className="container mt-5">
          <form onSubmit={this.handleSubmit}>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  name="email"
                  onChange={this.handleChange}
                  value={this.state.user.email}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.user.password}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default LoginClass;
