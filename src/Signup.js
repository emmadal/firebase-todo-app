import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import RingLoader from "react-spinners/RingLoader";
import firebaseConfig from "./firebaseConfig";

const Signup = () => {
  const [user, SetUser] = useState({
    name: "",
    email: "",
    email2: "",
    password: ""
  });
  const [loading, SetLoading] = useState(false);
  const [error, SetError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    user.email.toString() === user.email2.toString()
      ? createAuth()
      : console.log("email is not correct");
  }

  async function createAuth() {
    try {
        SetLoading(true);
      await firebaseConfig
        .auth()
        .createUserWithEmailAndPassword(
          user.email.toString(),
          user.password.toString()
        );
        SetLoading(false);
      SetUser({ name: "", email: "", email2: "", password: "" });
      
    } catch (error) {
      SetLoading(false);
      SetError(error.message);
    }
  }

  function handleInput(e) {
    SetUser({ ...user, [e.target.name]: [e.target.value] });
  }

  if (loading) {
    return (
      <RingLoader
        sizeUnit={"px"}
        size={240}
        color={"#123abc"}
        loading={loading}
      />
    );
  }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="4" />
        <MDBCol md="4">
          <form onSubmit={handleSubmit}>
            <p className="h4 text-center mb-4">Sign up</p>
            <br />

            <input
              placeholder="Your name"
              value={user.name}
              name="name"
              type="text"
              className="form-control"
              required
              onChange={handleInput}
            />
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
              type="email"
              value={user.email2}
              placeholder="Confirm email"
              className="form-control"
              name="email2"
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
              <MDBBtn gradient="peach" type="submit">
                Signup
              </MDBBtn>
            </div>
          </form>
          <p className="h4 text-center red-text mt-3">{error}</p>
        </MDBCol>
        <MDBCol md="4" />
      </MDBRow>
    </MDBContainer>
  );
};

export default Signup;
