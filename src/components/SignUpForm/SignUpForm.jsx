import { Component } from "react";
import { signUp } from "../../utilities/users-service";

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { name, email, password } = this.state;
      const formData = { name, email, password };
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
      // Baby step!
      console.log(user);
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className="m-3">
        <div className="form-container">
          <form
            className="flex flex-col gap-3"
            autoComplete="off"
            onSubmit={this.handleSubmit}
          >
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
              className="text-black p-2"
              placeholder="Name..."
            />
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
              className="text-black p-2"
              placeholder="Email..."
            />
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
              className="text-black p-2"
              placeholder="Password..."
            />
            <input
              type="password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
              className="text-black p-2"
              placeholder="Confirm Password..."
            />
            <button
              className=" bg-slate-800 p-3 rounded-full hover:cursor-pointer hover:scale-105"
              type="submit"
              disabled={disable}
            >
              SIGN UP
            </button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
