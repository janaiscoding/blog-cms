"use client";

import { useState } from "react";
import { API_LOGIN } from "../utils/api_keys";
import { loginRequest, opts_post } from "../utils/api_actions";
import { setJwtToken } from "../utils/authentication";
import Heading from "./UI_components/Heading";

const Login = ({ setLogged }: any) => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [validationErrors, setValidErrs] = useState([]);
  const [dbErrors, setDbErrs] = useState(String);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    opts_post.body = JSON.stringify({ email, password });
    console.log("handling logging in");
    loginRequest(
      API_LOGIN,
      opts_post,
      setValidErrs,
      setDbErrs,
      setJwtToken,
      setLogged
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Heading title="Login" />
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col items-start gap-3"
      >
        <div className="flex flex-col">
        <label className="label label-text" htmlFor="email">Email</label>
        <input
          className="input input-bordered input-ghost"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
        </div>
        <div className="flex flex-col">
        <label className="label label-text" htmlFor="password">Password</label>
        <input
          className="input input-bordered input-ghost"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          name="password"

        />
        </div>
        <button className="btn btn-neutral" type="submit">Log in</button>
      </form>
      <div className="py-2">
        {validationErrors.length
          ? validationErrors.map((err: { msg: string }, i) => (
              <p key={i}>{err.msg}</p>
            ))
          : ""}
      </div>
      <div>
        {dbErrors}
      </div>
    </div>
  );
};
export default Login;
