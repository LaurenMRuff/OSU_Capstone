import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <form action="/login" method="get">
        <label for="username">Username</label>&nbsp;&nbsp;
        <input id="username" type="text" placeholder="Enter Username" name="username" required />
        <br></br>
        <br></br>
        <label for="password">Password</label>&nbsp;&nbsp;
        <input id="password" type="password" placeholder="Enter Password" name="password" required />
        <br></br>
        <br></br>
        <Link to="/"><button type="submit">Login</button></Link>
        <br></br>
        <br></br>
        <Link to="/signup"><button type="submit">Create an account</button></Link>
      </form>
    </div>
  );
}

export default Login;