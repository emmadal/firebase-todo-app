import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

const Login = props => {
  const [user, SetUser] = useState({
    email: "",
    password: ""
  });


  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleInput(e) {
    SetUser({ ...user, [e.target.name] : [e.target.value] });
  }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="4" />
        <MDBCol md="4">
          <form onSubmit={handleSubmit}>
            <p className="h4 text-center mb-4">Sign in</p>

            <br />

            <input
              type="email"
              placeholder="Email"
              value={user.email}
              name="email"
              className="form-control"
              required
              onChange={handleInput}
            />
            <br />

            <input
              type="password"
              value={user.password}
              placeholder="Password"
              name="password"
              className="form-control"
              required
              onChange={handleInput}
            />
            <div className="text-center mt-4">
              <MDBBtn color="unique" type="submit">
                Sign in
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
        <MDBCol md="4" />
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
